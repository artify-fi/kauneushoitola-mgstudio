import React from 'react';
import {
  FaHome,
  FaDiagnoses,
  FaMailBulk,
  FaMoneyBill,
  FaFillDrip,
  FaHandPaper,
  FaEye,
  FaUserTie,
  FaUser,
  FaUsers,
  FaGem,
} from 'react-icons/fa';
export default [
  {
    page: 'KOTI',
    label: 'Koti',
    url: `/`,
    icon: <FaHome className="icon" />,
  },
  // example
  // {
  //   page: 'MEISTÄ',
  //   label: 'Tietoa meistä',
  //   url: `/#pricing`,
  //   icon: <FaObjectGroup className="icon" />,
  // },
  {
    page: 'MEISTÄ',
    label: 'Tietoa meistä',
    url: `/tietoa-meistä/tietoa-meista/`,
    icon: <FaUsers className="icon" />,
  },
  {
    page: 'MEISTÄ',
    label: 'Eilika',
    url: `/tietoa-meistä/eilika/`,
    icon: <FaUsers className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Naisten hiusten leikkaus',
    url: `/palvelumme/naisten-hiusten-leikkaus/`,
    icon: <FaUser className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Miesten hiusten leikkaus',
    url: `/palvelumme/miesten-hiusten-leikkaus/`,
    icon: <FaUserTie className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Väripaketti',
    url: `/palvelumme/väripaketti/`,
    icon: <FaFillDrip className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'hieronta',
    url: `/palvelumme/hieronta/`,
    icon: <FaDiagnoses className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'jalkahoito',
    url: `/palvelumme/jalkahoito/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Hemmotteleva kuumakivihieronta',
    url: `/palvelumme/hemmotteleva-kuumakivihieronta/`,
    icon: <FaDiagnoses className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'kasvohoito',
    url: `/palvelumme/kasvohoito/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Kynnet',
    url: `/palvelumme/kynnet/`,
    icon: <FaHandPaper className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Ripset & kulmat',
    url: `/palvelumme/ripset-kulmat/`,
    icon: <FaEye className="icon" />,
  },
  {
    page: 'BLOGI',
    label: 'Blogi',
    url: `/templates/blog-post-archive/`,
    icon: <FaEye className="icon" />,
  },
  {
    page: 'HINTALISTA',
    label: 'Hintalista',
    url: `/hintalista/hintalista/`,
    icon: <FaMoneyBill className="icon" />,
  },
  {
    page: 'YHTEYSTIEDOT',
    label: 'Yhteystiedot',
    url: `/yhteystiedot/yhteystiedot/`,
    icon: <FaMailBulk className="icon" />,
  },
];
