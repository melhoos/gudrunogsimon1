import React from 'react';
import gudrunogsimon from '../assets/photos/gudrunogsimon.jpg';
import Text from './common/text';

const RSVP = (): JSX.Element => {
  return (
    <div id="rsvp">
      <img src={gudrunogsimon} alt="Brennvikssand" />
      <div className="name-n-date">
        <h1>Gudrun & Simon</h1>
        <h2>
          <Text value={'rsvp_date'} />
        </h2>
        <h2>
          <Text value={'rsvp_place'} />
        </h2>
      </div>
    </div>
  );
};

export default RSVP;
