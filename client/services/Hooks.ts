import { NextRouter, useRouter } from 'next/router';
import { MutableRefObject, useEffect, useState } from 'react';
import { UserState } from '~/redux/user/types';
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

/**
 * Apply "scroll-behaviour: smooth" to the Ref Object.
 * If none is supplied, then default to the root <html>
 * element.
 * @param ref React.MutableRefObject
 */
function withSmoothScroll(ref?: React.MutableRefObject<HTMLElement>) {
  useEffect(() => {
    if (ref === undefined) {
      ref = { current: document.documentElement };
    }
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

function useKeyDown(code: string, handler: (e: KeyboardEvent) => void, dependencies: any[] = []) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.code === code) {
        handler(event);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [code, ...dependencies]);
}

function useCurrentUrl() {
  const router = useRouter();
  const [url, setUrl] = useState(router.pathname);

  useEffect(() => {
    setUrl(`${window.location.origin}${router.asPath}`);
  }, []);

  return url;
}

export {
  useOutsideClick,
  withSmoothScroll,
  useLoggedInOnly,
  useAnonymousOnly,
  withAuthModal,
  useKeyDown,
  useCurrentUrl,
};
