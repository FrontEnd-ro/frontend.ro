import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShare } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '~/services/Utils';
import OptionsDrawer from '~/components/OptionsDrawer/OptionsDrawer';
import { FacebookButton, LinkedInButton, CopyLinkButton } from '~/components/SocialMediaButtons';

import styles from './Diploma.module.scss';

interface Props {
  student: {
    name?: string;
    username: string;
    avatar: string;
  }
  tutorial: {
    name: string;
    tutorialId: string;
  };
  certification: {
    date: Date;
    url: string;
    pdf?: string;
    exerciseCount: number;
  },
  variant?: 'large' | 'medium' | 'small',
  showShareControls?: boolean,
  showSignature?: boolean,
  showQRCode?: boolean,
}

const Diploma = ({
  student,
  tutorial,
  certification,
  variant = 'large',
  showShareControls = true,
  showSignature = true,
  showQRCode = true,
}: Props) => {
  const [fullCertificationUrl, setFullCertificationUrl] = useState(certification.url);
  useEffect(() => {
    setFullCertificationUrl(`${window.location.origin}${certification.url}`);
  }, []);

  return (
    // If we ever change this attribute ID, make sure we also change
    // the `diploma-screenshot` Lambda Function
    // https://github.com/FrontEnd-ro/frontend.ro/issues/449
    <section data-diploma className={`${styles.Diploma} ${styles[`Diploma-${variant}`]} relative`}>
      <div className={`${styles.meta} absolute d-flex justify-content-between align-items-center mb-4`}>
        <a href="https://FrontEnd.ro">
          FrontEnd.ro
        </a>
        <time dateTime={format(certification.date.getTime(), 'yyyy-MM-dd')}>
          {formatDate(certification.date)}
        </time>
      </div>
      <div className={`${styles.main} text-center`}>
        <a
          href={`/${student.username}`}
          className={`${styles.student} no-underline inline-flex align-items-center text-left`}
        >
          <div className={`${styles['student-info']} mx-4`}>
            {student.name && (
              <p className="m-0 text-bold">{student.name}</p>
            )}
            <p className={`${styles.username} text-xs m-0 truncate`}>
              {`@${student.username}`}
            </p>
          </div>
          <img
            width="200"
            height="200"
            src={student.avatar}
            alt={`${student.name} avatar`}
          />
        </a>
        <p>
          a completat
          <a className="mt-4 mb-4 d-block text-bold" href={`/${tutorial.tutorialId}`}>
            {tutorial.name}
          </a>
          rezolvând cu succes toate cele
          {' '}
          {certification.exerciseCount}
          {' '}
          exerciții.
        </p>
      </div>
      <footer className="relative d-flex justify-content-between align-items-end">
        {showSignature && <Signature className="mr-2" />}
        {showQRCode && (
          <QRCode
            width={140}
            background="#f8f8f8"
            className={styles.qrcode}
            url={fullCertificationUrl}
          />
        )}

        {showShareControls && (
        // This attribute means we'll remove this element when generating
        // the OG:IMAGE and PDF for the Diploma
        // https://github.com/FrontEnd-ro/frontend.ro/issues/449
        <div data-diploma-hidden className={`${styles['share-button-wrapper']} absolute`}>
          <OptionsDrawer
            trigger={{
              text: 'Share',
              icon: faShare,
            }}
            direction="up"
          >
            <OptionsDrawer.Element>
              <CopyLinkButton text={fullCertificationUrl} />
            </OptionsDrawer.Element>
            {certification.pdf && (
            <OptionsDrawer.Element>
              <a
                href={certification.pdf}
                className="btn btn--light no-underline btn--with-icon"
              >
                <FontAwesomeIcon icon={faDownload} height="24" className="mr-2" />
                Download PDF
              </a>
            </OptionsDrawer.Element>
            )}
            <OptionsDrawer.Element>
              <FacebookButton url={fullCertificationUrl} />
            </OptionsDrawer.Element>
            <OptionsDrawer.Element>
              <LinkedInButton url={fullCertificationUrl} />
            </OptionsDrawer.Element>
          </OptionsDrawer>
        </div>
        )}
      </footer>
    </section>
  );
};

const Signature = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`${styles.signature} ${className}`}>
      <img
        height="100"
        alt="Founder Signature"
        className="border-bottom-1px"
        src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/diploma-signature.png`}
      />
      <p className="m-0">
        Alexandru Păvăloi,
        <br />
        Fondatorul FrontEnd.ro
      </p>
    </div>
  );
};

const QRCode = ({
  url,
  width,
  className = '',
  background = '#fff',
}: {
  url: string;
  width: number;
  background?: string;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    import('qrcode').then((module) => {
      module.default.toCanvas(canvasRef.current, url, {
        color: {
          light: background,
        },
        width,
      }, (error) => {
        if (error) console.error(error);
        console.log('success!');
      });
    });
  }, [url]);

  return (
    <canvas width={width} className={className} ref={canvasRef} />
  );
};

export default Diploma;
