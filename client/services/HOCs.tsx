import {
  useRef,
  useEffect,
  PropsWithChildren,
} from 'react';

interface Props {
  onHeightChange: (height: number) => void;
  className?: string;
}

/**
 * Hight order component that listens to changes in the children height
 * and emits a callback with the current height in pixels.
 */
const ReactHeight = (
  { children, onHeightChange, className = '' }: PropsWithChildren<Props>,
) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // NOTE: we already have a `useResizeObserver` hook, so
    // why are we not using that directly? The reason is that
    // using the Hook doesn't work if we render this component
    // inside the [root-render](https://beta.reactjs.org/reference/react-dom/client/createRoot#root-render)
    // API. Don't know what is the cause of that but definitely doesn't work, with this API
    // and we need it for the View Zones inside Monaco Editor.
    const resizeObserver = new ResizeObserver(([entry]) => {
      onHeightChange(entry.contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default ReactHeight;
