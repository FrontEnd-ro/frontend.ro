import React, { ReactElement } from 'react';
import styles from './SweetAlert.module.scss';

let Toast = null;

interface ToastI {
  text: string;
  href?: string;
  timer?: number;
  type?: 'error' | 'success';
}

class SweetAlertService {
  private static anchorTag: HTMLAnchorElement;

  static toast({
    text, href = null, timer = 3000, type = 'success',
  }: ToastI) {
    SweetAlertService.init();

    let target = document.body;
    if (href) {
      SweetAlertService.anchorTag.href = href;
      target = SweetAlertService.anchorTag;
    }

    return new Promise<void>((resolve) => {
      if (Toast !== null) {
        return resolve();
      }

      import('sweetalert2').then((swal) => {
        Toast = swal.default.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          background: '#1b1b15',
          customClass: {
            container: styles['swal--dark'],
          },
        });

        resolve();
      });
    }).then(() => {
      Toast.fire({
        icon: type,
        title:
          type === 'error' ? text || 'Oups, something went wrong...' : text,
        target,
        timer,
      });
    });
  }

  static async content(ReactComponent: any, title = null, props = {}) {
    const [contentModule, swalModule] = await Promise.all([
      import('sweetalert2-react-content'),
      import('sweetalert2'),
    ]);

    const ReactSwal = contentModule.default(swalModule.default);

    return ReactSwal.fire({
      title,
      html: React.createElement(ReactComponent, {
        closeModal: () => swalModule.default.close(),
        ...props,
      }),
      customClass: styles['swal2-content'],
      showConfirmButton: false,
      heightAuto: false,
    });
  }

  static async closePopup() {
    const swal = await import('sweetalert2');
    swal.default.close();
  }

  private static init() {
    SweetAlertService.anchorTag = document.createElement('a');
    document.body.appendChild(SweetAlertService.anchorTag);
  }
}

export default SweetAlertService;
