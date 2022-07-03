import React from 'react';
import Lottie from './common/lottie';
import envelope from '../assets/lotties/envelope.json';
import kimono from '../assets/lotties/kimono.json';
import gift from '../assets/lotties/gift.json';
import suitcase from '../assets/lotties/suitcase.json';
import Text from './common/text';

const Information = (): JSX.Element => {
  return (
    <div id="information">
      <h1>
        <Text value={'information'} />
      </h1>
      <div className="bullets">
        <div>
          <h2>
            <Text value={'information_rsvp'} />
            <Lottie id={'mail'} icon={envelope} sizeInPx={60} />
          </h2>
          <p>
            <Text value={'information_rsvp_desc'} />
          </p>
        </div>
        <div>
          <h2>
            <Text value={'information_dresscode'} />
            <Lottie id={'kimono'} icon={kimono} sizeInPx={60} />
          </h2>
          <p>
            <Text value={'information_dresscode_desc'} />
          </p>
        </div>
        <div>
          <h2>
            <Text value={'information_gifts'} />
            <Lottie id={'gift'} icon={gift} sizeInPx={60} />
          </h2>
          <p>
            <Text value={'information_gifts_desc_1'} />
          </p>
          <p>
            <Text value={'information_gifts_desc_2'} />
          </p>
        </div>
        <div>
          <h2>
            <Text value={'information_packinglist'} />
            <Lottie id={'suitcase'} icon={suitcase} sizeInPx={60} />
          </h2>
          <p>
            <Text value={'information_packinglist_desc_1'} />
          </p>
          <p>
            <Text value={'information_packinglist_desc_2'} />
            <a
              href="https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/11-48728/Norge/Nordland/Steigen/Helnessund"
              target="_blank"
            >
              <Text value={'information_packinglist_desc_2_link'} />
            </a>
            <Text value={'information_packinglist_desc_3'} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
