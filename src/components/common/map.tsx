import React from 'react';

const Map = (): JSX.Element => {
  return (
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6992.010567451452!2d14.77484912003136!3d67.7308409202983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45deeeb8b0a1a401%3A0xdf98805dc908f845!2sHelnessund%20Brygger!5e0!3m2!1sen!2sno!4v1650216123053!5m2!1sen!2sno"
        frameBorder="0"
        allowFullScreen={undefined}
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default Map;
