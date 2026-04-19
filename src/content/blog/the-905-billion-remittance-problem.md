---
draft: false
title: "The $905 Billion Remittance Problem (And Why It's Getting Worse, Not Better)"
snippet: "$905B in remittances flowed in 2024. Senders paid ~$43B in fees. Global average cost: 6.36% (Q3 2025) — more than double the UN's 3% target. Sub-Saharan Africa averaged 8.78% in Q1 2025. With 4 years to the 2030 SDG deadline, costs have plateaued, not fallen. The data, and why YapBay exists."
publishDate: "2026-04-18 06:36"
image:
  {
    src: "/blog/9/9.png",
    alt: "The $905 Billion Remittance Problem",
  }
category: "Thinking Out Loud"
author: "George Donnelly"
tags: [remittances, fees, africa, stablecoins]
---

Every year, roughly **$905 billion** flows across borders as personal remittances — household-to-household transfers and wages earned by cross-border workers, most of it sent by migrants to family back home. For many low- and middle-income countries, this is the single largest source of external finance — bigger than foreign direct investment and development aid combined.

And the system that moves it is broken.

In 2015, the UN's Sustainable Development Goal 10.c set a target: by 2030, reduce the global average cost of sending remittances to less than 3%, and eliminate any corridor above 5%. Eleven years in, with four years to go, the global average is **stuck at more than double the target.** I wanted to walk through the numbers, because when you look at them closely, the case for building something like YapBay becomes hard to argue with.

> **A note on definitions.** Per the World Bank and IMF ([BPM6](https://datahelpdesk.worldbank.org/knowledgebase/articles/114950-how-do-you-define-remittances)), "personal remittances" comprise *personal transfers* (mostly but not exclusively migrant-to-family household transfers) plus *compensation of employees* (wages earned by cross-border workers). The popular shorthand "migrants sending money home" captures the majority of the flow but not all of it.

## The Headline Numbers

Let's start with the big picture. All figures below are from the World Bank's Remittance Prices Worldwide database, which is the authoritative global source and is updated quarterly.

- **$905 billion** — Total global personal remittance flows in 2024, up 4.6% from $865 billion in 2023 ([IOM Migration Data Portal](https://www.migrationdataportal.org/themes/remittances-overview))
- **$685 billion** — The portion that went to low- and middle-income countries in 2024, larger than FDI and ODA combined ([World Bank Blog, Dec 2024](https://blogs.worldbank.org/en/peoplemove/in-2024--remittance-flows-to-low--and-middle-income-countries-ar))
- **6.36%** — Global average cost to send $200, as of Q3 2025, down from 6.49% in Q1 2025 ([RPW Issue 54, Sept 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf))
- **3%** — The UN SDG 10.c target by 2030 ([UN DESA](https://sdgs.un.org/goals/goal10))

We're more than double the target. Costs have barely moved in years — 6.2% in 2023, 6.49% in Q1 2025, 6.36% in Q3 2025. The UN's own 2025 SDG Extended Report notes costs "remained high... at more than twice the Sustainable Development Goal target of 3 percent by 2030" ([UN Stats, 2025](https://unstats.un.org/sdgs/report/2025/extended-report/Extended-Report-2025_Goal-10.pdf)).

To put 6.36% in absolute terms: on the $685 billion that flowed to LMICs in 2024, senders paid roughly **$43 billion in fees**. That's about the GDP of Bolivia — extracted annually from the people in the world who can least afford it.

## Africa Pays the Most (Because Of Course It Does)

Zoom in by region and the inequality gets worse.

- **8.78%** — Average cost to send $200 to Sub-Saharan Africa in Q1 2025; decreased to 8.46% by Q3 2025, still the world's most expensive region ([Srinivasan, Mahadevan & Saxena, CDPG/IIM Bangalore, 2025](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/cross-border-payments-conference/documents/paper-cost-patterns-remittance.pdf); [RPW Issue 54, Sept 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf))
- **$58 billion** — Total remittances received by Africa in 2024 ([tralac, April 2025](https://www.tralac.org/blog/article/16753-africa-s-remittance-costs-are-coming-down-but-very-slowly.html))
- **~$5 billion** — Approximate annual fee extraction from African remittances (8.78% × $58B)

Sub-Saharan Africa has been the world's most expensive receiving region for every quarter the World Bank has tracked. The Q3 2025 RPW report shows SSA at **8.46%**, down modestly from 8.78% in Q1 2025 but still the world's priciest region by a wide margin ([RPW Issue 54, Sept 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf)).

Within Africa, the intra-continental corridors are the worst. The Tanzania → Uganda corridor, for example, currently averages **33.58%** to send $500 — more than $167 in fees per transfer ([RPW Country Corridor: Tanzania → Uganda](https://remittanceprices.worldbank.org/corridor/Tanzania/Uganda)). Visual Capitalist, summarizing World Bank corridor data, found that **Tanzania is the single most expensive country to receive a $200 remittance in the entire world — at $115 in fees on a $200 transfer** ([Visual Capitalist, June 2025](https://www.visualcapitalist.com/sp/pla01-countries-with-the-highest-remittance-costs/)). Seven of the 15 most expensive receiving countries are in Africa.

This is the part that should make anyone pause: the families with the least margin are paying the most to receive money. The pipes are most expensive exactly where they matter most.

## The Sub-$200 Penalty

The World Bank's data has another uncomfortable pattern: **smaller transfers cost more in percentage terms.**

The Q1 2025 global average for sending $500 was **4.26%**, while sending $200 averaged 6.49% in the same quarter ([Srinivasan, Mahadevan & Saxena, 2025, Table 1](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/cross-border-payments-conference/documents/paper-cost-patterns-remittance.pdf)). That spread isn't because small transfers are economically harder to process — it's because flat-fee components (typically $5–15) hit small amounts disproportionately. A $10 fee on a $200 transfer is 5%. On a $1,000 transfer, it's 1%.

This is why at YapBay we focus obsessively on the sub-$200 segment. A construction worker in Dubai sending $150 home every two weeks to her family in Nairobi is the real user. Not the banker wiring $50,000 to London. Not the Bitcoin billionaire bragging about moving his billions on-chain for under twenty bucks.

## Banks Are the Worst. Digital Is the Best. Nobody Uses the Best.

The Q3 2025 RPW report breaks costs down by service provider type. The ordering is consistent across quarters and regions:

| Service type | Average cost (Q3 2025) |
|---|---|
| Banks | **14.99%** |
| Post offices | 5.58% |
| Money Transfer Operators (Western Union, MoneyGram, etc.) | 4.72% |
| Mobile operators | 4.69% |
| Credit/debit card (funding instrument) | **4.39%** (cheapest) |

Source: [RPW Issue 54, September 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf)

Banks are **more than three times** more expensive than credit/debit-card-funded alternatives (14.99% vs 4.39%), yet they still process a massive share of flows in many corridors because they're often the only option — especially in regions with heavy de-risking, KYC friction, or banking monopolies. The same Q3 2025 report notes that non-digital ("cash") services remain consistently more expensive than digital services across every region tracked ([RPW Issue 54, Sept 2025](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf)).

## The ID Problem Under the Fee Problem

Fees are only half the story. The other half is who can't participate at all.

The World Bank's ID4D (Identification for Development) 2025 dataset, summarised in an October 2025 World Bank blog post, found:

- **~800 million people** lack any official proof of identity ([World Bank ID4D Dataset](https://id4d.worldbank.org/global-dataset))
- **2.8 billion people** have no access to digital ID for online transactions ([World Bank Blog, Oct 2025](https://blogs.worldbank.org/en/digital-development/global-progress-in-identification--3-findings-from-the-latest-da))

That's down from just over 1 billion people in 2017 and 850 million in 2021 ([World Bank ID4D, 2017 press release](https://www.worldbank.org/en/news/press-release/2017/10/12/11-billion-invisible-people-without-id-are-priority-for-new-high-level-advisory-council-on-identification-for-development); [WB Blog, Oct 2025](https://blogs.worldbank.org/en/digital-development/global-progress-in-identification--3-findings-from-the-latest-da)). Progress — but 800 million people without legal identity is still, roughly, the population of Europe — locked out of every formal financial product on earth. No bank account, no mobile wallet that requires KYC, no remittance receipt, no credit. When we talk about the unbanked, this is the root.

Women are disproportionately represented in that 800 million. So are refugees, the rural poor, and the undocumented diaspora workers actually doing the remittance sending in the first place ([Women's World Banking, 2026](https://www.womensworldbanking.org/insights/why-women-lack-id-and-what-policymakers-can-do/)).

## Meanwhile, Stablecoins Moved $33 Trillion

While the TradFi remittance industry has been slowly, reluctantly, inching fees down from 9% to 6% over two decades, something else happened:

- **$33 trillion** — Total stablecoin transaction volume in 2025, up 72% year-over-year ([Bloomberg / Artemis Analytics, Jan 2026](https://finance.yahoo.com/news/stablecoin-transactions-soared-72-2025-054951388.html))
- **~$400 billion per year** — BIS estimate of cross-border flows settled between USDC and USDT ([Artemis, 2025](https://reports.artemisanalytics.com/stablecoins/artemis-stablecoin-payments-from-the-ground-up-2025.pdf))
- **$305 billion** — Total stablecoin market cap as of September 2025, up from $5 billion five years earlier ([BVNK, Oct 2025](https://bvnk.com/blog/blockchain-cross-border-payments))

Stablecoins already process more annual value than Visa. A USDC transfer from Dubai to Nairobi settles in seconds and costs cents on networks like Celo, Solana or Base. The technology problem is solved. What isn't solved — and what YapBay exists to solve — is the **on-ramp and off-ramp at the edges,** where senders need to convert local fiat into stablecoin and recipients need to convert it back into spendable currency. That's where TradFi still clips the ticket, and that's where peer-to-peer with proper escrow cuts it out entirely.

## What a 6.36% Tax on the Poor Actually Means

Let's sit with this for a moment, because the percentage can make it feel abstract.

Take a Filipina domestic worker in Hong Kong sending $200 to her mother in Manila twice a month. At 6.36% average global cost, that's **$305 a year in fees** — a month's worth of groceries for her family, handed to an intermediary for moving bits across a network that, in 2026, costs fractions of a cent to operate.

Now multiply by the **167.7 million international migrant workers** the ILO counted in 2022 ([ILO Global Estimates, Dec 2024](https://www.ilo.org/publications/major-publications/ilo-global-estimates-international-migrants-labour-force)). Now consider that the global median masks far worse outcomes at the bottom: the Tanzania → Uganda corridor averages **33.58%** on $500, and several intra-African corridors sit above 20% ([World Bank RPW Country Corridors](https://remittanceprices.worldbank.org/corridor/Tanzania/Uganda)).

This is not a small inefficiency. It is the largest regressive transfer of wealth in the world, happening quietly, every day, mostly denominated in amounts small enough that nobody writes about any individual case.

## The SDG 10.c Scorecard (We Are Failing)

With four years left to the 2030 deadline:

- **Target:** 3% global average, no corridor above 5%
- **Current global average:** 6.36%
- **Corridors above 5%:** Dozens, including most of Sub-Saharan Africa
- **Countries where average send cost is above 3%:** 28 ([World Bank Blog, June 2025](https://blogs.worldbank.org/en/opendata/the-cost-of-sending-remittances-is-higher-than-3--in-28-countrie))
- **Trend since 2020:** Costs have plateaued above 6%, not declined toward target

The South Centre's June 2025 research paper is blunt about why: "progress has slowed" and the current global payments architecture has structural incentives to maintain, not reduce, the spread ([South Centre RP219, June 2025](https://www.southcentre.int/wp-content/uploads/2025/06/RP219_Reducing-the-Cost-of-Remittances-%E2%80%93-A-Priority-for-the-Global-South_EN.pdf)).

The banks and money transfer operators that dominate remittance flows are not going to voluntarily compete their own margins away. They have said for a decade that fees are coming down. They have not come down.

## Why We Built YapBay

If you've read the other posts on this blog, you know the YapBay thesis. But it's worth restating it in the context of these numbers.

1. **Peer-to-peer kills the intermediary margin.** A buyer and a seller meeting directly, with escrow enforced on-chain, don't need a Western Union to sit between them charging 6%.

2. **Stablecoins handle the cross-border leg for pennies.** The expensive part of a remittance is the fiat-to-fiat conversion and the bank-to-bank settlement. Stablecoins route around both.

3. **Combo remittances skip the cash-out entirely.** Instead of sending money that the recipient then has to convert and spend, the sender pays for groceries, medicine, or other essentials that get delivered directly to their family in-country. One transaction, no off-ramp — we piloted this between Madrid and Caracas in 2019 and it worked.

4. **1% fee, not 6.36%.** Our planned 1% fee ([see our fees post](https://yapbay.com/blog/)) is less than one-sixth the global average, and every cent goes back into the community treasury and referral rewards rather than to shareholders.

5. **No bank account required.** All you need is a wallet and a counterparty willing to trade with you. That matters for the 800 million people the formal system has left out entirely.

The technology to fix this has existed for years. What's been missing is a platform that makes peer-to-peer, combo-route, stablecoin-settled remittances actually usable by someone who isn't a crypto native. That's what we're building.

## What You Can Do

- **If you remit:** Join our [Telegram](https://t.me/yapbay) and try the MVP. We're actively looking for feedback from real senders in real corridors.
- **If you build:** Our [code is open source](https://github.com/Panmoni/yapbay). Fork, integrate, contribute.
- **If you research or advocate:** The World Bank's [Remittance Prices Worldwide](https://remittanceprices.worldbank.org/) database is a public good. Cite it, use it, pressure your governments with it.

The numbers above aren't going to move on their own. Fifteen years of "fees are coming down" has produced a global average still stuck above 6% and a Sub-Saharan Africa average above 8%. If the incumbents won't make it happen, we will.

---

## Citations

- Artemis Analytics. (2025). [Stablecoin Payments from the Ground Up 2025](https://reports.artemisanalytics.com/stablecoins/artemis-stablecoin-payments-from-the-ground-up-2025.pdf).
- Bloomberg / Yahoo Finance. (January 2026). [Stablecoin Transactions Soared 72% in 2025, Hit $33T](https://finance.yahoo.com/news/stablecoin-transactions-soared-72-2025-054951388.html).
- BVNK. (October 2025). [Blockchain in Cross-Border Payments: A Complete 2025 Guide](https://bvnk.com/blog/blockchain-cross-border-payments).
- International Organization for Migration. (2025). [Migration Data Portal: Remittances](https://www.migrationdataportal.org/themes/remittances-overview).
- Srinivasan, R., Mahadevan, B., & Saxena, A. (2025). [Understanding Cost Patterns in Remittance Corridors of Sub-Saharan Africa: A Data-Driven Analysis of Infrastructure and Inclusion Gaps](https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/cross-border-payments-conference/documents/paper-cost-patterns-remittance.pdf). Centre for Digital Public Goods, IIM Bangalore (paper hosted by the South African Reserve Bank's Cross-Border Payments Conference).
- South Centre. (June 2025). [Research Paper 219: Reducing the Cost of Remittances – A Priority for the Global South](https://www.southcentre.int/wp-content/uploads/2025/06/RP219_Reducing-the-Cost-of-Remittances-%E2%80%93-A-Priority-for-the-Global-South_EN.pdf).
- tralac. (April 2025). [Africa's Remittance Costs Are Coming Down, But Very Slowly](https://www.tralac.org/blog/article/16753-africa-s-remittance-costs-are-coming-down-but-very-slowly.html).
- United Nations. [Sustainable Development Goal 10 — Reduce inequality within and among countries](https://sdgs.un.org/goals/goal10).
- UN Statistics Division. (2025). [The Sustainable Development Goals Extended Report 2025 — Goal 10](https://unstats.un.org/sdgs/report/2025/extended-report/Extended-Report-2025_Goal-10.pdf).
- Visual Capitalist. (June 2025). [Ranked: Countries With the Highest Remittance Costs](https://www.visualcapitalist.com/sp/pla01-countries-with-the-highest-remittance-costs/).
- Women's World Banking. (2026). [Why Women Lack ID — And What Policymakers Can Do](https://www.womensworldbanking.org/insights/why-women-lack-id-and-what-policymakers-can-do/).
- World Bank. [Remittance Prices Worldwide](https://remittanceprices.worldbank.org/).
- World Bank. (September 2025). [Remittance Prices Worldwide Quarterly Report, Issue 54 (Q3 2025 data)](https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf).
- World Bank. [Remittance Prices Worldwide Country Corridor: Tanzania → Uganda](https://remittanceprices.worldbank.org/corridor/Tanzania/Uganda).
- International Labour Organization. (December 2024). [ILO Global Estimates on International Migrant Workers](https://www.ilo.org/publications/major-publications/ilo-global-estimates-international-migrants-labour-force).
- World Bank. (2017). [1.1 Billion 'Invisible' People without ID Are Priority for New High Level Advisory Council on Identification for Development](https://www.worldbank.org/en/news/press-release/2017/10/12/11-billion-invisible-people-without-id-are-priority-for-new-high-level-advisory-council-on-identification-for-development).
- World Bank Blog. (December 2024). [In 2024, Remittance Flows to Low- and Middle-Income Countries Are Expected to Reach $685 Billion](https://blogs.worldbank.org/en/peoplemove/in-2024--remittance-flows-to-low--and-middle-income-countries-ar).
- World Bank Blog. (June 2025). [The Cost of Sending Remittances Is Higher Than 3% in 28 Countries](https://blogs.worldbank.org/en/opendata/the-cost-of-sending-remittances-is-higher-than-3--in-28-countrie).
- World Bank Blog. (October 2025). [Global Progress in Identification: 3 Findings from the Latest Data](https://blogs.worldbank.org/en/digital-development/global-progress-in-identification--3-findings-from-the-latest-da).
- World Bank Data Help Desk. [How Do You Define Remittances?](https://datahelpdesk.worldbank.org/knowledgebase/articles/114950-how-do-you-define-remittances).
- World Bank ID4D. (2025). [Global Dataset](https://id4d.worldbank.org/global-dataset).
