import { NextRouter, useRouter } from 'next/router';
import { MutableRefObject, useEffect } from 'react';
import { UserState } from '~/redux/user/types';
import ClientMonitoring, { LogEventType } from './ClientMonitoring';
import SweetAlertService from './sweet-alert/SweetAlert.service';
import { noop } from './Utils';

function useOutsideClick(ref: MutableRefObject<HTMLElement>, handler: (e: MouseEvent) => void) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

function useClipboard(ref: MutableRefObject<HTMLElement>, onCopy: () => void = noop) {
  const initClipboard = (ClipboardJS) => {
    let clipboard = new ClipboardJS(ref.current);

    clipboard.on('success', (e) => {
      e.clearSelection();

      SweetAlertService.toast({ text: 'Successfully copied to clipboard.' });
      onCopy();
    });

    clipboard.on('error', () => {
      SweetAlertService.toast({ type: 'error', text: "Seems like your browser doesn't support clipboard copying. You have to copy it manually..." });
    });
  };

  useEffect(() => {
    import('clipboard').then((module) => {
      initClipboard(module.default);
    });
  }, []);
}

function withClientMonitoring() {
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (!location.host.includes('frontend.ro')) {
      return;
    }
    ClientMonitoring.log(LogEventType.ROUTE);

    window.addEventListener('beforeunload', ClientMonitoring.destroy);
  }, []);
}

function withSmoothScroll(ref: React.MutableRefObject<HTMLElement>) {
  useEffect(() => {
    ref.current.style.scrollBehavior = 'smooth';
    return () => {
      ref.current.style.scrollBehavior = 'initial';
    };
  }, []);
}

function useLoggedInOnly(isLoggedIn: boolean, path: string) {
  const router = useRouter();

  if (!isLoggedIn && path) {
    if (typeof window !== 'undefined') {
      router.replace(`/auth?next=${encodeURIComponent(path)}`);
    }
  }
}

function useAnonymousOnly(router: NextRouter, isLoggedIn: boolean, nextHref: string) {
  if (isLoggedIn && nextHref) {
    if (typeof window !== 'undefined') {
      router.replace(nextHref);
    }
  }
}

/**
 * If the user is not logged in when this method is called,
 * let's show the Login/Register modal and authenticate/register.
 */
function withAuthModal(isLoggedIn: boolean, cb: (...any) => any) {
  return (...props) => {
    if (isLoggedIn) {
      cb(...props);
    } else {
      import('~/components/login/Login').then((module) => {
        SweetAlertService.content(
          module.default,
          'Autentifică-te',
          {
            onSuccess(userInfo: UserState['info']) {
              SweetAlertService.closePopup();
              cb(...props, userInfo);
            },
          },
        );
      });
    }
  };
}

export {
  useOutsideClick,
  useClipboard,
  withClientMonitoring,
  withSmoothScroll,
  useLoggedInOnly,
  useAnonymousOnly,
  withAuthModal,
};
