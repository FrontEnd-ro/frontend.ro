import { useRef, useEffect, useState } from 'react';
import { ProgressItemI } from '../types';

interface Props {
  // A CSS Value (eg: '256px', '10em', '50%') that
  // is used for the size of the SVG
  size: string;

  // How much is 100% of the circle? This is used when computing
  // the proportions of inner circles.
  count: number;
  items: ProgressItemI[];
  className?: string;
  strokeWidth?: number;
}

const ProgressDonut = ({
  size, count, items, className = '', strokeWidth = 2,
}: Props) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const [circleLength, setCircleLength] = useState(undefined);

  useEffect(() => {
    if (!circleRef.current) {
      console.error("[ProgressDonut.useEffect] CircleRef is empty. This shouldn't be possible!");
      return;
    }

    setCircleLength(circleRef.current.getTotalLength());
  }, []);

  return (
    <svg
      role="img"
      fill="none"
      width={size}
      strokeWidth="2"
      className={className}
      viewBox="0 0 32 32"
      stroke="currentcolor"
    >
      <circle ref={circleRef} cx="16" cy="16" r="14" strokeWidth={strokeWidth} />
      {circleLength && items.map((item, index, arr) => {
        const countBefore = arr
          .slice(0, index)
          .reduce((acc, cur) => acc + cur.count, 0);

        const itemLength = (item.count / count) * circleLength;
        const dashOffset = (countBefore / count) * circleLength;

        return (
          <circle
            // It's ok to use `index` as a key here, because we're
            // not dynamically changing their order.
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            r="14"
            cx="16"
            cy="16"
            stroke={item.color}
            // First one is a dash, second one is the gap.
            // This is a repeating pattern, that resets at the beginning of the circle.
            // But, by having a very big gap (ie: circleLength) we make sure the
            // pattern is not repeating.
            strokeDasharray={`${itemLength} ${circleLength}`}
            strokeDashoffset={-dashOffset}
            // Rotate 90degrees anticlockwise, around the circle center: (16, 16)
            // This is because the strokes start at the same point the graphic starts.
            // In case of circles, that is at 3 o'clock
            transform="rotate(-90 16 16)"
            strokeWidth={strokeWidth}
          />
        );
      })}

    </svg>
  );
};

export default ProgressDonut;
