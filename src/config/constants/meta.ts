import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Bn',
  description:
    'The most popular AMM on BSC by user count! Earn FARM through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings and more, on a platform you can trust.',
  image: 'http://45.32.148.194/images/LogoName.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Bn')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Bn')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Bn')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Bn')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Bn')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Bn')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Bn')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Bn')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Bn')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Bn')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Bn')}`,
      }
    default:
      return null
  }
}
