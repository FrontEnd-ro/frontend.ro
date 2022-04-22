import React from 'react';

interface Props {
  title: string;
  src: string;
  className?: string;
  // If we're rendering a Video, should
  // we show controls?
  controls?: boolean;
}

/**
 * Base component for rendering a Tidbit Asset. Initially we only had
 * images, but since the `use-transition` tidbit we've also got videos.
 * This components gets an `src` string and renders the appropriate element,
 * either an <img> tag or a <video> one.
 */
const BaseTidbitItem = ({
  src, title, className = '', controls = true,
}: Props) => {
  if (src.slice(-4) === '.mp4') {
    // Currently only format we "support" is `mp4`
    const attributes: { controls?: boolean } = {};

    // If we simply do `controls={controls}` on the element,
    // the server will render a video with `controls=""` which breaks
    // HTML validation if the <video> is inside an <a> element.
    if (controls) {
      attributes.controls = controls;
    }

    return (
      <video src={src} muted autoPlay loop className={className} {...attributes} />
    );
  }

  return (
    <img src={src} alt={title} className={className} />
  );
};

export default BaseTidbitItem;
