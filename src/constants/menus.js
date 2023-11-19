import TransactionsIcon from 'icons/transactions.inline.svg';

import LINKS from './links';

export default {
  header: [
      {
       text: 'Ecosystem',
       items: [
          {
            icon: TransactionsIcon,
            text: 'Exzo Web Wallet',
            description: 'Store, swap, and delegate to earn rewards.',
            to: 'https://wallet.exzo.network',
          },
          {
            icon: TransactionsIcon,
            text: 'Exzo Dex',
            to: 'https://dex.exzo.network',
            description: 'Swap tokens, earn rewards, provide liquidity.',
          },
          {
            icon: TransactionsIcon,
            text: 'Cross-Chain Bridge',
            to: 'https://bridge.exzo.network',
            description: 'Bridge to and from other blockchains.',
          },
          {
            icon: TransactionsIcon,
            text: 'Governance Portal',
            to: 'https://governance.exzo.technology',
            description: 'Contribute to the growth of Exzo Network.',
          },
        ],
      },
      {
        text: 'Network',
        items: [
          {
            icon: partnersIcon,
            text: 'EVM Block Explorer',
            to: 'https://evm.exzoscan.io',
            description: 'Track & explore EVM TXNs on Exzo Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Native Block Explorer',
            to: 'https://exzoscan.io',
            description: 'Track & explore native TXNs on Exzo Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Testnet Block Explorer',
            to: 'https://evm-testnet.exzoscan.io',
            description: 'Test and explore Exzo Networks blockchain data in real time.',
          },
        ],
      },
      {
        text: 'Developers',
        items: [
          {
            icon: TransactionsIcon,
            text: 'Developer Documentation',
            to: 'https://docs.exzo.network',
            description: 'Learn how to integrate and build on Exzo Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Node Validator Tutorial',
            to: 'https://validator.exzo.network/',
            description: 'Deploy your own node validator.',
          },
          {
            icon: TransactionsIcon,
            text: 'Exzo Program Library',
            to: 'https://github.com/ExzoNetwork/exzo-program-library',
            description: 'Interact with nodes and build on Exzo Network.',
          },
          {
            icon: TransactionsIcon,
            text: 'Audit Reports & KYC',
            to: 'https://github.com/ExzoNetwork/Smart-Contract-Audit-Reports',
            description: 'View audit reports and KYC docs.',
          },
          {
            icon: TransactionsIcon,
            text: 'Hackathons',
            to: 'https://dorahacks.io/org/exzonetwork/hackathon',
            description: 'Contribute to our ecosystem and earn rewards.',
          },
          {
            icon: TransactionsIcon,
            text: 'Bug Bounties',
            to: 'https://hackenproof.com/programs?title=Exzo%20Network',
            description: 'Earn rewards for finding vulnerbilities.',
          },
          {
            icon: TransactionsIcon,
            text: 'GitHub',
            to: 'https://github.com/ExzoNetwork/',
            description: 'Core foundation of Exzo Network.',
          },
        ],
    },
      {
        text: 'Community',
        items: [
          {
            text: 'CoinMarketCap',
            to: 'https://coinmarketcap.com/currencies/exzo-network/',
         },
          {
            text: 'Twitter',
            to: LINKS.twitter,
          },
          {
            text: 'Telegram',
            to: 'https://t.me/Exzo_Network',
         },
          {
             text: 'Discord',
             to: LINKS.discord,
          },
          {
            text: 'GitHub',
            to: 'https://github.com/orgs/Exzo-Network/',
          },
          {
            text: 'YouTube',
            to: LINKS.youtube,
          },
        ],
    },
    {
      text: 'Blog',
      to: 'https://exzonetwork.medium.com',
    },
    // {
    //   text: 'AI',
    //   to: LINKS.ai,
    // },
    // {
    //   text: 'Pricing',
    //   to: LINKS.pricing,
    // },
  ],
  footer: [
    {
      text: 'Company',
      links: [
        {
          text: 'Exzo Web Wallet',
          to: 'https://wallet.exzo.network',
        },
        {
          text: 'Exzo Wallet Extension',
          to: 'https://chrome.google.com/webstore/detail/exzo-wallet/jiieejiponjbbnldnklcbamkembhhpka',
        },
        {
          text: 'Cross-chain Bridge',
          to: 'https://bridge.exzo.network',
        },
        {
          text: 'Governance',
          to: 'https://governance.exzo.network',
        },
        {
          text: 'Exzo Dex',
          to: 'https://bridge.exzo.network',
        },

        // {
        //   text: 'Release notes',
        //   to: LINKS.releaseNotes,
        // },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Developer Docs',
          to: 'https://docs.exzo.network',
        },
        {
          text: 'Block Explorer',
          to: 'https://exzoscan.io',
        },
        {
          text: 'Native Explorer',
          to: 'https://exzoscan.io',
        },
        {
          text: 'Tutorials',
          to: 'https://exzonetwork.medium.com/',
        },
        {
          text: 'Developer Chat',
          to: 'https://t.me/exzo_network_developers_official',
        },
        {
          text: 'Testnet Faucet',
          to: 'https://evm-faucet.exzo.network/',
        },
      ],
    },
    {
      text: 'Community',
      links: [
        {
          text: 'Twitter',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
           text: 'Discord',
           to: LINKS.discord,
           icon: 'telegram-icon',
        },
        {
          text: 'GitHub',
          to: 'https://github.com/orgs/Exzo-Network/',
          icon: 'github-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    },
  ],
  mobile: [
      {
        text: 'Exzo Web Wallet',
        to: 'https://wallet.exzo.network',
      },
      {
        text: 'Exzo Wallet Extension',
        to: 'https://chrome.google.com/webstore/detail/exzo-wallet/jiieejiponjbbnldnklcbamkembhhpka',
      },
      {
        text: 'Cross-chain Bridge',
        to: 'https://bridge.exzo.network',
      },
      {
        text: 'Governance',
        to: 'https://governance.exzo.network',
      },
      {
        text: 'Exzo Dex',
        to: 'https://bridge.exzo.network',
      },
  ],
  docSidebar: [
    {
      icon: TransactionsIcon,
      title: 'API Reference',
      slug: LINKS.apiReference,
    },
    {
      icon: ConsoleIcon,
      title: 'CLI Reference',
      slug: LINKS.cliReference,
    },
    {
      icon: CalendarIcon,
      title: 'Release notes',
      slug: LINKS.releaseNotes,
    },
  ],
};
