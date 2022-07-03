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
        <Text value={'tavel_from_trondheim_2'} /> 
      </h2>
      <h2>
        <Text value={'travel_from_trondheim_3'} /> 
      </h2>
      <h2>
        <Text value={'travel_from_trondheim_4'} />
      </h2>
    </div>
  );
};

export default Travel;
