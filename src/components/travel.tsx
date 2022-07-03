import React from 'react';
import Text from './common/text';

const Travel = (): JSX.Element => {
  return (
    <div id="travel">
      <h1>
        <Text value={'travel_and_accommodation'} />
      </h1>
      <Text value={'travel_from_trondheim'} />
      <p>
        <Text value={'travel_from_trondheim_2'} />
      </p>
      <p>
        <Text value={'travel_from_trondheim_3'} />
      </p>
      <p>
        <Text value={'travel_from_trondheim_4'} />
      </p>
    </div>
  );
};

export default Travel;
