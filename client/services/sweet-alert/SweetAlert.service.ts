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
    text,
    href = null,
    timer = 3000,
    type = 'success',
  }: ToastI) {
    SweetAlertService.init();

    let target = document.body;
    if (href) {
      SweetAlertService.anchorTag.href = href;
      target = SweetAlertService.anchorTag;
    }

    return new Promise((resolve) => {
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
        title: type === 'error' ? text || 'Oups, something went wrong...' : text,
        target,
        timer,
      });
    });
  }

  private static init() {
    SweetAlertService.anchorTag = document.createElement('a');
    document.body.appendChild(SweetAlertService.anchorTag);
  }
}

export default SweetAlertService;
