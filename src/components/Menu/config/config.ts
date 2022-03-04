import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    disabled: true,
    items: [
      {
        label: t('Farms'),
        href: '/farms',
        tip: 'Soon',
        disabled: true,
      },
      {
        label: t('Pools'),
        href: '/pools',
        tip: 'Soon',
        disabled: true,
      },
    ],
  },
  {
    label: t('Win'),
    href: '/prediction',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    disabled: true,
    items: [
      {
        label: t('Trading Competition'),
        href: '/competition',
        tip: 'Soon',
        disabled: true,
      },
      {
        label: t('Prediction (BETA)'),
        href: '/prediction',
        tip: 'Soon',
        disabled: true,
      },
      {
        label: t('Lottery'),
        href: '/lottery',
        tip: 'Soon',
        disabled: true,
      },
    ],
  },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    disabled: true,
    items: [
      {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
        tip: 'Soon',
        disabled: true,
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
        tip: 'Soon',
        disabled: true,
      },
      {
        label: t('Activity'),
        href: `${nftsBaseUrl}/activity`,
        tip: 'Soon',
        disabled: true,
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('IFO'),
        href: '/ifo',
        tip: 'Soon',
        disabled: true,
      },
      {
        label: t('Voting'),
        href: '/voting',
        tip: 'Soon',
        disabled: true,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
        tip: 'Soon',
        disabled: true,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
      // {
      //   label: t('Docs'),
      //   href: 'https://docs.pancakeswap.finance',
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
    ],
  },
]

export default config
