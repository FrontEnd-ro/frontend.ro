import React, { RefObject } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

interface Props {
  text: string;
  className?: string;
  onCopy?: () => void;
}

export default class CopyToClipboard extends React.Component<Props> {
  private ref: RefObject<HTMLButtonElement>;

  private timeoutId: any;

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    import('clipboard').then((module) => {
      this.initClipboard(module.default);
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  initClipboard = (ClipboardJS) => {
    let clipboard = new ClipboardJS(this.ref.current);

    clipboard.on('success', (e) => {
      e.clearSelection();

      SweetAlertService.toast({ text: 'Link copied to clipboard.' });
      this.props?.onCopy();
    });

    clipboard.on('error', () => {
      SweetAlertService.toast({ type: 'error', text: "Seems like your browser doesn't support clipboard copying. You have to copy it manually..." });
    });
  }

  render() {
    const { text, className } = this.props;

    return (
      <button className={className} type="button" data-clipboard-text={text} ref={this.ref}>
        <FontAwesomeIcon icon={faLink} height="24" className="mr-2" />
        Copy link
      </button>
    );
  }
}
