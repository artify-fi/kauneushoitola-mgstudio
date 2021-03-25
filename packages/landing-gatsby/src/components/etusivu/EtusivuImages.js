import React from "react";
import { SRLWrapper } from "simple-react-lightbox"; 
// import '../../css/App.css';
import Img1 from '../../images/etusivu/kauniit_kynnet.webp'
import Img2 from '../../images/etusivu/kauniit_kynnet_thumb.jpg'
import Img3 from '../../images/etusivu/kauniit_silmaripset.webp'
import Img4 from '../../images/etusivu/kauniit_silmaripset_thumb.jpg'
import Img5 from '../../images/etusivu/kauniit_varvaskynnet.webp'
import Img6 from '../../images/etusivu/kauniit_varvaskynnet_thumb.jpg'
import Img7 from '../../images/etusivu/kauniit_huulet.webp'
import Img8 from '../../images/etusivu/kauniit_huulet_thumb.jpg'






const options = {
    settings: {
      overlayColor: "#edf9de",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    },
    buttons: {
      backgroundColor: "#fcdede",
      iconColor: "rgba(126, 172, 139, 0.8)",
    },
    // caption: {
    //   captionColor: "#a6cfa5",
    //   captionFontFamily: "Raleway, sans-serif",
    //   captionFontWeight: "300",
    //   captionTextTransform: "uppercase",
    // },
    thumbnails: {
      showThumbnails: true,
      thumbnailsAlignment: 'space-around',
      thumbnailsContainerBackgroundColor: 'transparent',
      thumbnailsContainerPadding: '0',
      thumbnailsGap: '12px 1px',
      thumbnailsIconColor: '#ffffff',
      thumbnailsOpacity: 0.4,
      thumbnailsPosition: 'bottom',
      thumbnailsSize: ['100px', '80px']
    }
  };

function EtusivuImages() {
  return (
    <div style={{ padding: '30px'}}>
      <SRLWrapper options={options}>
        <a href={Img1} style={{padding: '10px'}} alt="kauniit_kynnet_thumbnail" data-attribute="SRL">         
        <img src={Img2} alt="kauniit_kynnet"  />         
        </a>

        <a href={Img3} style={{padding: '10px'}} alt="kauniit_silmaripset_thumbnail" data-attribute="SRL">         
        <img src={Img4} alt="kauniit_silmaripset"  />         
        </a>

        <a href={Img5} style={{padding: '10px'}} alt="kauniit_varvaskynnet_thumbnail" data-attribute="SRL">         
        <img src={Img6} alt="kauniit_varvaskynnet"  />         
        </a>

        <a href={Img7} style={{padding: '10px'}} alt="kauniit_huulet_thumbnail" data-attribute="SRL">         
        <img src={Img8} alt="kauniit_huulet"  />         
        </a>
       
      </SRLWrapper>
    </div>
  );
}
export default EtusivuImages;