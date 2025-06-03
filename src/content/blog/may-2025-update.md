---
draft: false
title: "YapBay is on Celo Mainnet: May 2025 Updates"
snippet: ""
publishDate: "2025-06-03 10:36"
image:
  {
    src: "/blog/6/6.png",
    alt: "YapBay is on Celo Mainnet: May 2025 Updates",
  }
category: "Announcement"
author: "George Donnelly"
tags: [fees, token, roadmap, referrals]
---

The YapBay Escrow contract is now live on Celo Mainnet!

May was a fun month, a bit lighter in intensity than April for YapBay development, however we still got quite a bit done:

## Contracts
- deployed to mainnet
- added new functions to query escrow balances
- added auto cancel functions
- added new tests

## API
- updated the API for new the contract functions, including: balance sync, routes for balance queries, etc
- created a backend monitoring service to ensure timed out trades get auto canceled and funds are returned to the seller
- refactored routes (this was a massive job)
- added multi-network support, initially Celo Alfajores testnet and Celo Mainnet (so that you can test it on testnet before putting real value at risk)

## Frontend
- integrated [Divvi](https://www.divvi.xyz/) in order to earn rewards as part of Celo Proof of Ship
- updated the roadmap
- postponed Sui integration indefinitely
- added a blog post on the business side of YapBay
- enabled the ability to switch between Celo Mainnet and Celo Alfajores testnet

## Business
- finished Celo Proof of Ship Season 4, signed up for Season 5 (June 2025)
- applied to Celo Public Goods Support Streams

## Community
- currently preparing for the public feedback stage (see roadmap), so we can get your feedback and ideas for future development, find bugs and overall make YapBay an ideal product for you. Be sure to join our Telegram for opportunities to participate in this. I expect to produce some tutorials before this is launched.

## Roadmap
- currently considering that it may make sense to fold LocalSolana into YapBay and just add Solana devnet and mainnet as options in the YapBay interface. 

## This Month

This month, I've got a heavy development schedule so stay tuned for new commits and new opportunities. Your feedback and ideas are welcome at any time.

