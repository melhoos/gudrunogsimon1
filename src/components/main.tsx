import React from 'react';
import '../styles/main.scss';
import Schedule from './schedule';
import Menu from './menu';
import RSVP from './rsvp';
import Travel from './travel';
import Information from './information';
import Map from './common/map';

const Main = (): JSX.Element => {
  return (
    <div id="main">
      <Menu />
      <RSVP />
      <Schedule />
      <Travel />
      <Information />
      <Map />
    </div>
  );
};

export default Main;
