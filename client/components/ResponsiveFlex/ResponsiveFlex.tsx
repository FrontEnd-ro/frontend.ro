import React, { PropsWithChildren, useEffect } from 'react';

interface Props {
  breakpoint: number;
  className?: string;
}

// This component allows us to have dynamic, responsive layouts.
// The component receives the breakpoint as props and
// then switch from flex-row to flex-column.
function ResponsiveFlex({ breakpoint, children, className = '' } : PropsWithChildren<Props>) {
  const containerRef = React.createRef<HTMLDivElement>();
  const responsiveClassName = `responsive-flex--${breakpoint}`;

  // For each breakpoint value we create a className with the rules specific to that breakpoint.
  // we first check if we have a unique class on the container and if we don't,
  // we write the @media CSS code and create a generic class such as
  // (responsive-flex--1000 or responsive-flex--256) that we assign to container
  // otherwise we simply assign the generated class to our container
  useEffect(() => {
    if (!classExists(breakpoint)) {
      const styleEl = createStyleEl(breakpoint);
      document.head.appendChild(styleEl);
    }
  }, [breakpoint]);

  function classExists(breakpoint): boolean {
    return !!document.head.querySelector(`[data-flex-breakpoint="${breakpoint}"]`);
  }

  function createStyleEl(breakpoint) {
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-flex-breakpoint', `${breakpoint}`);
    styleEl.innerHTML = `
    .responsive-flex--${breakpoint} {
      display: flex;
      flex-direction: row;
    }
    @media screen and (max-width: ${breakpoint}px) {
      .responsive-flex--${breakpoint} {
        flex-direction: column;
      }
      .responsive-flex--${breakpoint} > * {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
    }`;
    return styleEl;
  }

  return (
    <div ref={containerRef} className={`${responsiveClassName} ${className}`}>
      {children}
    </div>
  );
}

export default ResponsiveFlex;
