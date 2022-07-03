import React from 'react';
import Text from './common/text';

const Travel = (): JSX.Element => {
  return (
    <div id="travel">
      <h1>
        <Text value={'travel_and_accommodation'} />
      </h1>
      <Text value={'travel_from_trondheim'} />
      <h2>
        <Text value={'boat'} />
      </h2>
      <p>
        <Text value={'boat_desc'} />
        <a
        href="https://www.atb.no/hitra/"
        target="_blank"
        >
        <Text value={'atb_link'} />
        </a>
      </p>
      
      <h2>
        <Text value={'car'} />
      </h2>   
      <p>
        <Text value={'car_desc'} />
      </p>
      </h2>
    </div>
  );
};

export default Travel;
