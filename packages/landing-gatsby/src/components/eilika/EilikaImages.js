import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import EilikaImageWrapper from './eilikaimage.style';
import '../../css/App.css';
import Img1 from '../../images/eilika/kauniit_kynnet1.webp';
import Img2 from '../../images/eilika/kauniit_kynnet1_thumb.jpg';
import Img3 from '../../images/eilika/kauniit_kynnet2.webp';
import Img4 from '../../images/eilika//kauniit_kynnet2_thumb.jpg';
import Img5 from '../../images/eilika/kauniit_kynnet3.webp';
import Img6 from '../../images/eilika//kauniit_kynnet3_thumb.jpg';
import Img7 from '../../images/eilika/kauniit_kynnet4.webp';
import Img8 from '../../images/eilika//kauniit_kynnet4_thumb.jpg';
import Img9 from '../../images/eilika/kauniit_kynnet5.webp';
import Img10 from '../../images/eilika//kauniit_kynnet5_thumb.jpg';
import Img11 from '../../images/eilika/kauniit_kynnet6.webp';
import Img12 from '../../images/eilika//kauniit_kynnet6_thumb.jpg';
import Img13 from '../../images/eilika/kauniit_kynnet7.webp';
import Img14 from '../../images/eilika//kauniit_kynnet7_thumb.jpg';
import Img15 from '../../images/eilika/kauniit_kynnet8.webp';
import Img16 from '../../images/eilika//kauniit_kynnet8_thumb.jpg';
import Img17 from '../../images/eilika/kauniit_kynnet9.webp';
import Img18 from '../../images/eilika//kauniit_kynnet9_thumb.jpg';
import Img19 from '../../images/eilika/kauniit_kynnet10.webp';
import Img20 from '../../images/eilika//kauniit_kynnet10_thumb.jpg';
import Img21 from '../../images/eilika/kauniit_kynnet11.webp';
import Img22 from '../../images/eilika//kauniit_kynnet11_thumb.jpg';
import Img23 from '../../images/eilika/kauniit_kynnet12.webp';
import Img24 from '../../images/eilika//kauniit_kynnet12_thumb.jpg';
import Img25 from '../../images/eilika/kauniit_kynnet13.webp';
import Img26 from '../../images/eilika//kauniit_kynnet13_thumb.jpg';
import Img27 from '../../images/eilika/kauniit_kynnet14.webp';
import Img28 from '../../images/eilika//kauniit_kynnet14_thumb.jpg';

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
    <EilikaImageWrapper>
      <SRLWrapper options={options}>
        <a
          className="zoom"
          href={Img1}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_1"
          data-attribute="SRL"
        >
          <img src={Img2} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img3}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_2"
          data-attribute="SRL"
        >
          <img src={Img4} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img5}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_3"
          data-attribute="SRL"
        >
          <img src={Img6} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img7}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_4"
          data-attribute="SRL"
        >
          <img src={Img8} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img9}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_5"
          data-attribute="SRL"
        >
          <img src={Img10} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img11}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_6"
          data-attribute="SRL"
        >
          <img src={Img12} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img13}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_7"
          data-attribute="SRL"
        >
          <img src={Img14} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img15}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_8"
          data-attribute="SRL"
        >
          <img src={Img16} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img17}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_9"
          data-attribute="SRL"
        >
          <img src={Img18} alt="Geelilakkaukset / Rakennekynnet" />
        </a>

        <a
          className="zoom"
          href={Img19}
          style={{ padding: '10px' }}
          alt="kauniit_kynnet_10"
          data-attribute="SRL"
        >
          <img src={Img20} alt="Geelilakkaukset / Rakennekynnet" />
        </a>
      </SRLWrapper>
    </EilikaImageWrapper>
  );
}
export default EtusivuImages;
