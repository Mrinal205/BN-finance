import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },

 {
    label: t('Presale'),
    icon: 'SaleIcon',
    href: '/presale',
    status: {
        text: t('Live').toLocaleUpperCase(),
        color: 'success',
      },
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '#',
      },
      {
        label: t('Liquidity'),
        href: '#',
      },
    ],
  }, 
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Auto farm'),
    icon: 'Autofarm',
    href: '/Autofarm',
  }, 
//   {
//     label: t('Prediction (BETA)'),
//     icon: 'PredictionsIcon',
//     href: '/prediction',
//   },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
    status: {
      text: t('win').toLocaleUpperCase(),
      color: 'success',
    },
  },
//   {
//     label: t('Collectibles'),
//     icon: 'NftIcon',
//     href: '/collectibles',
//   },
//   {
//     label: t('Team Battle'),
//     icon: 'TeamBattleIcon',
//     href: '/competition',
//   },
//   {
//     label: t('Teams & Profile'),
//     icon: 'GroupsIcon',
//     items: [
//       {
//         label: t('Leaderboard'),
//         href: '/teams',
//       },
//       {
//         label: t('Task Center'),
//         href: '/profile/tasks',
//       },
//       {
//         label: t('Your Profile'),
//         href: '/profile',
//       },
//     ],
//   },


 {
    label: t('IDO'),
    icon: 'SaleIcon',
    href: 'IDO',
    status: {
        text: t('soon').toLocaleUpperCase(),
        color: 'success',
      },
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://pancakeswap.info',
  },
//   {
//     label: t('IFO'),
//     icon: 'IfoIcon',
//     href: '/ifo',
//   },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: '#',
      },
      {
        label: t('Docs'),
        href: '#',
      },
      
    ],
  },
]

export default config
