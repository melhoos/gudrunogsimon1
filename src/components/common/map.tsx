import React from 'react';

const Map = (): JSX.Element => {
  return (
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49053.70264775486!2d9.117191330984618!3d63.64713927748553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4612f3411ba9a3af%3A0xf39ee900f2513d0a!2sNordbotnveien%2012%2C%207242%20Knarrlaget!5e0!3m2!1sen!2sno!4v1656855671313!5m2!1sen!2sno"
        frameBorder="0"
        allowFullScreen={undefined}
        aria-hidden="false"
        tabIndex={0}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
