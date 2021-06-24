import React from 'react';
import { FaHome, FaMailBulk, FaMoneyBill, FaGem } from 'react-icons/fa';
export default [
  {
    page: 'KOTI',
    label: 'Koti',
    url: `/`,
    icon: <FaHome className="icon" />,
  },

  {
    page: 'PALVELUMME',
    label: 'Kampaaja(oppilastyö)',
    url: `/palvelumme/kampaaja/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Olaplex salonkihoito',
    url: `/palvelumme/olaplex-salonkihoito/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Ripset & kulmat',
    url: `/palvelumme/ripset_kulmat/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Kasvohoito(tulossa)',
    url: `/palvelumme/kasvohoito/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Jalkahoito',
    url: `/palvelumme/jalkahoito/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Kynnet',
    url: `/palvelumme/kynnet/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Geelilakkaus varpaaisiin',
    url: `/palvelumme/geelilakkaus-varpaisiin/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Hieronta',
    url: `/palvelumme/hieronta/`,
    icon: <FaGem className="icon" />,
  },
  {
    page: 'PALVELUMME',
    label: 'Kuumakivihieronta',
    url: `/palvelumme/hemmotteleva-kuumakivihieronta/`,
    icon: <FaGem className="icon" />,
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
