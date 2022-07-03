import React from 'react';
import Lottie from './common/lottie';
import clock3 from '../assets/lotties/clock3.json';
import ticket from '../assets/lotties/ticket.json';
import assigment from '../assets/lotties/assigment.json';
import phone from '../assets/lotties/phone.json';
import arrow from '../assets/lotties/arrow.json';
import Text from './common/text';

const Menu = (): JSX.Element => {
  return (
    <div id="menu">
      <Lottie
        id="clock"
        icon={clock3}
        label={<Text value="program" />}
        linkTag={'schedule'}
      />
      <Lottie
        id="location-pin"
        icon={ticket}
        label={<Text value="travel_and_accommodation" />}
        linkTag={'travel'}
      />
      <Lottie
        id="document"
        icon={assigment}
        label={<Text value="information" />}
        linkTag={'information'}
      />
      <Lottie
        id="svar"
        icon={arrow}
        label={<Text value="replay" />}
        linkTag={'svar'}
      />
      <Lottie
        id="phone"
        icon={phone}
        label={<Text value="contact" />}
        linkTag={'kontakt'}
      />
    </div>
  );
};

export default Menu;
