import React, { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '~/services/Utils';
import OptionsDrawer from '~/components/OptionsDrawer/OptionsDrawer';
import { FacebookButton, LinkedInButton, CopyLinkButton } from '~/components/SocialMediaButtons';

import styles from './Diploma.module.scss';

interface Props {
  student: {
    name: string;
    username: string;
    avatar: string;
  }
  module: {
    name: string;
    url: string;
  },
  certification: {
    date: Date;
    url: string;
    exerciseCount: number;
  },
  variant: 'large' | 'medium' | 'small'
}

const Diploma = ({
  student, module, certification, variant = 'large',
}: Props) => (
  <section className={`${styles.Diploma} ${styles[`Diploma-${variant}`]} relative`}>
    <time className="absolute d-block mb-4" dateTime={format(certification.date.getTime(), 'yyyy-MM-dd')}>
      {formatDate(certification.date)}
    </time>
    <div className={`${styles.main} text-center`}>
      <a
        href={`/${student.username}`}
        className={`${styles.student} no-underline inline-flex align-items-center text-left`}
      >
        <div className={`${styles['student-info']} mx-4`}>
          <p className="m-0 text-bold">{student.name}</p>
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
        <a className="mt-4 mb-4 d-block text-bold" href={module.url}>
          {module.name}
        </a>
        rezolvând cu succes toate cele
        {' '}
        {certification.exerciseCount}
        {' '}
        exerciții.
      </p>
    </div>
    <footer className="relative d-flex justify-content-between align-items-end">
      <Signature className="mr-2" />
      <QRCode
        width={140}
        background="#f8f8f8"
        className={styles.qrcode}
        url={certification.url}
      />
      <div className={`${styles['share-button-wrapper']} absolute`}>
        <OptionsDrawer
          trigger={{
            text: 'Share',
            icon: faShare,
          }}
          direction="up"
        >
          <OptionsDrawer.Element>
            <CopyLinkButton text={certification.url} />
          </OptionsDrawer.Element>
          <OptionsDrawer.Element>
            <FacebookButton url={certification.url} />
          </OptionsDrawer.Element>
          <OptionsDrawer.Element>
            <LinkedInButton url={certification.url} />
          </OptionsDrawer.Element>
        </OptionsDrawer>
      </div>
    </footer>
  </section>
);

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
  }, []);

  return (
    <canvas width={width} className={className} ref={canvasRef} />
  );
};

export default Diploma;
