import React from 'react';
import Text from './common/text';

const Schedule = (): JSX.Element => {
  return (
    <div id="schedule">
      <p>
        <Text value={'program_in_progress'} />
      </p>
      <h1>
        <Text value={'program'} />
      </h1>
    </div>
  );
};

export default Schedule;
