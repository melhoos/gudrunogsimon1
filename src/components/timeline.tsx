import React from 'react';
import Lottie from './common/lottie';

export type TimelineItem = {
  id: string;
  label: JSX.Element;
  time: string | JSX.Element;
  location: string | JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = (props: TimelineProps): JSX.Element => {
  return (
    <div id="timeline">
      {props.items.map((item, key) => (
        <>
          <span className="item">
            <Lottie {...item} sizeInPx={60} />
            <div className="location-n-time">
              <span> {item.location} </span>
              <span> {item.time} </span>
            </div>
          </span>
          {key != props.items.length - 1 ? (
            <span className="dotted-line"></span>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  );
};

export default Timeline;
