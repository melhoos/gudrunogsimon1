import React, { useEffect } from 'react';
import lottie, { AnimationDirection } from 'lottie-web';

interface LottieProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  id: string;
  sizeInPx?: number;
  label?: JSX.Element | string;
  linkTag?: string;
}

const Lottie = (props: LottieProps): JSX.Element => {
  useEffect(() => {
    const hoverElement = document.getElementById(
      `${props.id}-parent`
    ) as HTMLDivElement;
    const animation = lottie.loadAnimation({
      container: document.getElementById(props.id) as HTMLDivElement,
      animationData: props.icon,
      loop: false,
      autoplay: false,
    });

    const handleMouseEvent = (direction: AnimationDirection) => {
      animation.setDirection(direction);
      animation.play();
    };

    hoverElement.addEventListener('mouseenter', () => {
      handleMouseEvent(1);
    });

    return () => {
      hoverElement.removeEventListener('mouseenter', () => handleMouseEvent(1));
    };
  });

  function smoothScrollTo() {
    if (props.linkTag) {
      document.getElementById(props.linkTag)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  return (
    <div id={`${props.id}-parent`}>
      <div id={props.id} style={{ height: `${props.sizeInPx ?? 30}px` }} />
      <label onClick={smoothScrollTo}>{props.label}</label>
    </div>
  );
};

export default Lottie;
