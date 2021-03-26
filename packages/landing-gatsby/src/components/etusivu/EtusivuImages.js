import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import EtusivuImageWrapper from './etusivuimage.style';

import Img1 from '../../images/etusivu/kauniit_kynnet.webp';
import Img2 from '../../images/etusivu/kauniit_kynnet_thumb.jpg';
import Img3 from '../../images/etusivu/kauniit_silmaripset.webp';
import Img4 from '../../images/etusivu/kauniit_silmaripset_thumb.jpg';
import Img5 from '../../images/etusivu/kauniit_varvaskynnet.webp';
import Img6 from '../../images/etusivu/kauniit_varvaskynnet_thumb.jpg';
import Img7 from '../../images/etusivu/kauniit_huulet.webp';
import Img8 from '../../images/etusivu/kauniit_huulet_thumb.jpg';

const options = {
  settings: {
    overlayColor: '#ededef',
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: '#414b60',
    iconColor: '#edf9de',
  },

  caption: {
    captionColor: '#2d3a56',
    captionFontFamily: 'Raleway, sans-serif',
    captionFontWeight: '300',
    captionFontSize: '1.8rem',
  },

  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '12px 1px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px'],
  },
};

function EtusivuImages() {
  return (
    <EtusivuImageWrapper>
      <SRLWrapper options={options}>
        <a
          className="zoom"
          href={Img1}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_thumbnail"
          data-attribute="SRL"
        >
          <img src={Img2} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img3}
          style={{ padding: '10px' }}
          alt="kauniit_silmaripset_thumbnail"
          data-attribute="SRL"
        >
          <img src={Img4} alt="Ripsienpidennykset" />
        </a>

        <a
          className="zoom"
          href={Img5}
          style={{ padding: '10px' }}
          alt="kauniit_varvaskynnet_thumbnail"
          data-attribute="SRL"
        >
          <img src={Img6} alt="Jalkahoitot" />
        </a>

        <a
          className="zoom"
          href={Img7}
          style={{ padding: '10px' }}
          alt="kauniit_huulet_thumbnail"
          data-attribute="SRL"
        >
          <img src={Img8} alt="Kulmien ja ripsien värjäykset" />
        </a>
      </SRLWrapper>
    </EtusivuImageWrapper>
  );
}
export default EtusivuImages;
