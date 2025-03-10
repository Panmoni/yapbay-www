---
draft: false
title: "YapBay Update: Progress, Pivots and Plans for 2025"
snippet: "I'm excited to share where YapBay stands today and where we're headed. The past year has brought significant developments, challenges and fresh opportunities that have shaped our path forward."
publishDate: "2025-03-08 15:36"
image:
  {
    src: "/blog/3/3.png",
    alt: "alt text",
  }
category: "Announcement"
author: "George Donnelly"
tags: [development, MVP, evm, roadmap, sui, solana]
---

I'm excited to share where YapBay stands today and where we're headed. The past year has brought significant developments, challenges and fresh opportunities that have shaped our path forward.

## OpenPeer Labs
Last year, I joined OpenPeer Labs to work on LocalSolana, a peer-to-peer exchange modeled after LocalBitcoins. We made substantial progress building the platform, focusing on creating a robust P2P trading system for the Solana ecosystem. While the project showed tremendous promise, OpenPeer Labs unfortunately ran out of runway.

I purchased the intellectual property and am now redeveloping LocalSolana with an important twist: it will utilize the same engine and incorporate similar features as YapBay. This strategic decision creates synergy between the projects and accelerates our development timeline.

### Community Growth
One of the most exciting developments has been LocalSolana's community building efforts in Nigeria and Venezuela. These new connections complement the community I previously built working with Dash and BCH, expanding our network in regions where P2P crypto solutions can make the greatest impact.

## Technical Evolution

### Simplifying Our Approach
After reflection and evaluation, I realized the Solidity contracts developed in 2024 were unnecessarily complex for an MVP. This led to a comprehensive redesign of YapBay's architecture, focusing on producing a leaner, more efficient platform that can launch faster while maintaining our core value proposition.

### New Architecture
The redesigned YapBay architecture now consists of:

- **Frontend (SolidJS)**
  - Delivers a responsive, engaging user experience
  - Communicates with backend via secure REST endpoints
  - Receives real-time updates through server-sent events

- **API Server (Express)**
  - Acts as secure intermediary between frontend and backend systems
  - Exposes REST endpoints for trade management and user actions
  - Communicates with blockchain via RPC
  - Pushes updates to frontend via server-sent events

- **Event-Listening Microservice (Rust)**
  - Subscribes to blockchain events through WebSocket connections
  - Updates PostgreSQL with current trade states
  - Built with Tokio for robust asynchronous processing

- **PostgreSQL Database**
  - Serves as the persistent "source of truth" for all trade records
  - Records all key state transitions

This architecture allows us to maintain our core functionality while significantly reducing complexity and development time.

## Brand Refresh
The past year has also brought:

- An updated [pitch deck](https://static.panmoni.com/yb/yapbay-deck.pdf)
- A fresh color scheme that better represents our mission
- A new website that more clearly communicates our vision

The [about page](https://yapbay.com/about/) in particular will hopefully eliminate any confusion about what YapBay's business is.

## Updated Roadmap
We've got a new [roadmap](https://yapbay.com/roadmap/) as well, but more importantly the fire in my belly to make YapBay a real, functioning service is stronger than ever. I first had this vision in late 2018 and frankly it has taken me way too long to get here!

### Q2 2025
- **MVP on Sui**: Building on Sui using Move as part of the Overflow hackathon
- **MVP on EVM**: Developing a new MVP in Solidity for deployment on a TBD EVM chain

### Q3 2025
- **First 2 Corridors**: Building trader communities in our initial corridors with a goal of 100 transactions

### Q4 2025
- **Trust Features**: Adding trusted/blocked traders, Civic integration and trust network MVP
- **Trader Referral Program**: Launching our viral trader referral program and dashboard

### Q1 2026
- **Combo Remittances Marketplace**: Developing a marketplace for goods & services in selected corridors

## Funding & Sustainability
I received approximately $1,400 in funding from Gitcoin Grants Round 20 last year, which has been extremely helpful. Currently, I'm funding development myself while exploring additional resources.

Our sustainability approach has two paths:

1. **Public Goods Model**: Ideally, YapBay can operate as a sustainable public good, funded through Octant, Gitcoin, Giveth and other ecosystem grants and sponsorships.

2. **Fee-Based Model**: If the public goods approach doesn't generate sufficient funding, we can implement a 1% transaction fee, with half directed to our referral program, allowing us to reach break-even with a moderate transaction volume.

Long term, a token generation event could enable community governance of the protocol, aligning with our values of decentralization and community ownership. If we can make a go of the public goods model, there will be no TGE.

## Hackathons & Accelerator Applications

We're actively participating in:

- Sui Overflow hackathon
- Solana Eternal hackathon

And we've applied to funding sources:

- Octant x ENS round at Giveth
- DraperU
- Sui Hydropower accelerator  
- Two additional Sui accelerators

I'm pleased to share I've been accepted into the Solana Accelerate event in May.

## The Vision Remains

While the technical approach has evolved, the vision stands firm: creating a borderless, censorship-resistant financial system that serves the unbanked and underbanked. We remain committed to:

- **Financial Inclusion**: Reaching the 2 billion+ people excluded from traditional financial systems
- **Affordable Remittances**: Dramatically reducing the cost of sending money across borders
- **Censorship Resistance**: Ensuring no one can be arbitrarily excluded from the global economy
- **Crisis Resilience**: Building systems that function even during power outages and network instability

Unlike many mainstream Web3 projects building centralized remittance and exchange solutions, we're staying true to our decentralized roots. Centralized approaches may be easier to implement but ultimately cannot deliver the sustainable, equitable and accessible system the developing world desperately needs.

## Join Us

As we enter this exciting new phase, I invite you to join our community and help shape the future of borderless payments. Whether you're a developer, user or supporter, there's a place for you in building this vision of financial freedom.

Let's build a world where everyone, everywhere can transact freely, efficiently and affordably.