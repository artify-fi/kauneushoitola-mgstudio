import React from 'react';
import {
  FaHome,
  FaAward,
  FaMailBulk,
  FaMoneyBill,
  FaObjectGroup,
  FaTv,
  FaUsersCog,
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
    url: `tietoa-meistä/tietoa-meistä`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Naisten hiusten leikkaus',
    url: `palvelumme/naisten-hiusten-leikkaus`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Miesten hiusten leikkaus',
    url: `palvelumme/miesten-hiusten-leikkaus`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Väripaketti',
    url: `palvelumme/väripaketti`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'hieronta',
    url: `/palvelumme/hieronta/`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'jalkahoito',
    url: `/palvelumme/jalkahoito/`,
    icon: <FaTv className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Hemmotteleva kuumakivihieronta',
    url: `/palvelumme/hemmotteleva-kuumakivihieronta/`,
    icon: <FaAward className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'kasvohoito',
    url: `/palvelumme/kasvohoito/`,
    icon: <FaUsersCog className="icon" />,
  },  
  {
    page: 'PALVELUMME',
    label: 'Kynnet',
    url: `/palvelumme/kynnet`,
    icon: <FaMailBulk className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Ripset & kulmat',
    url: `/palvelumme/ripset-kulmat`,
    icon: <FaMailBulk className="icon" />,
  },
  {
    page: 'HINTALISTA',
    label: 'Hintalista',
    url: `/hintalista/hintalista`,
    icon: <FaMoneyBill className="icon" />,
  },
  {
    page: 'YHTEYSTIEDOT',
    label: 'Yhteystiedot',
    url: `/yhteystiedot/yhteystiedot/`,
    icon: <FaMailBulk className="icon" />,
  },
];
