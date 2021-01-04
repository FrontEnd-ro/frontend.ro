import { MutableRefObject, useEffect } from 'react';
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
    if (location.host.includes('localhost')) {
      return;
    }
    ClientMonitoring.log(LogEventType.ROUTE);

    window.addEventListener('beforeunload', ClientMonitoring.destroy);
  }, []);
}

export {
  useOutsideClick,
  useClipboard,
  withClientMonitoring,
};
