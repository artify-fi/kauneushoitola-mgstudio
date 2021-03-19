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
    page: 'etusivu',
    label: 'koti',
    url: `/`,
    icon: <FaHome className="icon" />,
  },
  {
    page: 'etusivu',
    label: 'palvelut',
    url: `/#featureSection`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'etusivu',
    label: 'hinnasto',
    url: `/#pricing`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'etusivu',
    label: 'kysymykset',
    url: `/#faq`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'palvelut',
    label: 'yhteenveto',
    url: `/palvelut/yhteenveto/`,
    icon: <FaObjectGroup className="icon" />,
  },
  {
    page: 'palvelut',
    label: 'gatsbyJS kotisivut',
    url: `/palvelut/kotisivut/`,
    icon: <FaTv className="icon" />,
  },
  {
    page: 'palvelut',
    label: 'hakukoneoptimointi- ja markkinointi',
    url: `/palvelut/hakukone/`,
    icon: <FaAward className="icon" />,
  },
  {
    page: 'ratkaisut',
    label: 'kehitysprosessi',
    url: `/ratkaisut/kehitysprosessi/`,
    icon: <FaUsersCog className="icon" />,
  },
  {
    page: 'blogi',
    label: 'blogi',
    url: `/posts/`,
    icon: <FaMailBulk className="icon" />,
  },
  // {
  //   page: 'hinnasto',
  //   label: 'hinta-arviointi',
  //   url: `/hinnasto/hinta`,
  //   icon: <FaMoneyBill className="icon" />,
  // },
  {
    page: 'yritys',
    label: 'yhteystiedot',
    url: `/yritys/yhteystiedot/`,
    icon: <FaMailBulk className="icon" />,
  },
];
