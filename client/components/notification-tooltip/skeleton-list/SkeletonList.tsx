import React from 'react';
import { SkeletonParagraph, SkeletonRect, SkeletonWord } from '~/components/SkeletonScreens';

const SkeletonNotificationList = () => {
  const COUNT = 5;

  return (
    <div>
      {new Array(COUNT).fill('').map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="p-3 d-flex" key={index}>
          <SkeletonRect className="mr-2" width="40px" height="40px" />
          <div>
            <SkeletonWord className="m-0" text="You received feedback dear User" />
            <SkeletonParagraph className="m-0" text="Yesterday" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonNotificationList;
