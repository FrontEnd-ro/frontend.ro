import { NextRouter, useRouter } from 'next/router';
import * as MonacoTypes from 'monaco-editor';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { UserState } from '~/redux/user/types';
import SweetAlertService from './sweet-alert/SweetAlert.service';
import { noop } from './Utils';
import MonacoService from './MonacoService';

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
      if (ref.current !== undefined && ref.current !== null) {
        ref.current.style.scrollBehavior = 'initial';
      }
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

function navigateIfAuthenticated(router: NextRouter, isLoggedIn: boolean, nextHref: string) {
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

function useResizeObserver(
  element: HTMLElement | null = null,
  onResize: (DOMRectReadOnly) => void,
  dependencies: any[] = [],
) {
  useEffect(() => {
    if (element === null) {
      return noop;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { contentRect } = entry;
      onResize(contentRect);
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [element, ...dependencies]);
}

function useViewZones(
  editor: MonacoTypes.editor.IStandaloneCodeEditor | null,
  viewZones: {
    id: string;
    afterLineNumber: number;
    heightInPx: number;
    Component: React.ReactElement;
    range: {
      startLineNumber: number;
      startColumn: number;
      endLineNumber: number;
      endColumn: number;
    }
  }[],
) {
  const previousViewZones = useRef<{zoneId: string; decorationIds: string[]}[]>([]);

  useEffect(() => {
    if (editor === null) {
      return;
    }

    previousViewZones.current.forEach((viewZoneId) => {
      MonacoService.simpleRemoveViewZone(editor, viewZoneId.zoneId, viewZoneId.decorationIds);
    });

    viewZones.forEach((viewZone) => {
      const newViewZoneId = MonacoService.simpleAddViewZone(
        editor,
        viewZone.afterLineNumber,
        viewZone.heightInPx,
        viewZone.Component,
        viewZone.range,
      );
      previousViewZones.current.push(newViewZoneId);
    });
  }, [
    editor,
    viewZones
      .map((viewZone) => `${viewZone.id}/${viewZone.afterLineNumber}/${viewZone.heightInPx}`)
      .join('_'),
  ]);
}

export {
  useOutsideClick,
  withSmoothScroll,
  useLoggedInOnly,
  navigateIfAuthenticated,
  withAuthModal,
  useKeyDown,
  useCurrentUrl,
  useResizeObserver,
  useViewZones,
};
