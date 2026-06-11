import type { FeaturedGuide } from "@/data/featured-guides";

export const profitGuides: FeaturedGuide[] = [
  {
    slug: "ecommerce-contribution-margin-guide",
    title: "Ecommerce Contribution Margin Guide",
    seoTitle: "Ecommerce Contribution Margin: Formula and Seller Examples",
    category: "Margins",
    description:
      "Learn how ecommerce contribution margin connects price, variable costs, advertising, break-even decisions, and product-level profit.",
    readTime: "11 min read",
    updatedAt: "June 11, 2026",
    relatedCalculatorSlugs: [
      "profit-margin-calculator",
      "shopify-profit-calculator",
      "break-even-calculator",
    ],
    relatedLinks: [
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Compare revenue, entered cost, profit, margin, and markup for one consistent scope.",
      },
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Model order revenue, product cost, shipping, payments, advertising, and contribution profit.",
      },
      {
        label: "Break Even Calculator",
        href: "/break-even-calculator",
        description:
          "Convert unit contribution and fixed cost into required break-even sales.",
      },
    ],
    sections: [
      {
        title: "What contribution margin tells an ecommerce seller",
        paragraphs: [
          "Contribution margin is the amount left from a sale after the variable costs required to produce and deliver that sale are deducted. It is called contribution because the remaining money contributes toward fixed operating costs and, after those costs are covered, profit. For a seller, it creates a useful bridge between product-level economics and a full business profit and loss statement.",
          "Revenue alone cannot answer whether an additional order helps the business. A $70 order may look attractive, but product cost, pick and pack, postage, payment fees, marketplace commission, packaging, returns allowance, and customer acquisition can consume most of it. Contribution margin keeps those order-linked costs visible before a seller decides to increase volume.",
        ],
      },
      {
        title: "The contribution margin formula",
        paragraphs: [
          "The basic formula is contribution margin = net sales revenue - variable costs. Contribution margin percentage equals contribution margin divided by net sales revenue, multiplied by 100. Use net sales after seller-funded discounts and refunded revenue. Keep taxes collected for authorities separate according to the accounting treatment used by the business.",
          "Variable costs should rise when another order is completed. Common ecommerce examples include landed product cost, marketplace and payment charges, fulfillment, shipping subsidy, packaging, sales commission, and per-order advertising. Fixed costs such as a base software plan, salaried management, rent, or committed design work are normally reviewed after contribution, although the boundary depends on the decision.",
        ],
      },
      {
        title: "A worked order example",
        paragraphs: [
          "Suppose a direct-store order produces $80 in net product revenue. Landed product cost is $27, fulfillment and delivery are $11, payment fees are $2.70, packaging is $1.30, expected return cost is $3, and average paid acquisition cost is $18. Total variable cost is $63, leaving $17 of contribution and a 21.25% contribution margin.",
          "That $17 is not automatically net profit. It must help pay for store software, staff, accounting, storage, content, and other operating costs. The example is still valuable because it shows that the seller cannot sustainably spend another $20 to acquire the same order without changing price or another cost. It also creates a baseline for testing a bundle or shipping offer.",
        ],
      },
      {
        title: "Use contribution margin for product and channel comparisons",
        paragraphs: [
          "Calculate contribution using the same definitions for each product. A high-priced product can generate more contribution dollars but a lower percentage, while a lower-priced accessory may have a strong percentage but too few dollars to support acquisition. Review both measures. Dollars help pay fixed costs; percentage shows how much room remains relative to sales.",
          "Channel comparisons also require complete variable costs. A marketplace may supply demand but charge commission and fulfillment. A direct store may avoid marketplace commission while requiring more advertising, software, and support. Do not declare one channel more profitable from its headline fee. Model actual orders using consistent product, shipping, payment, return, and acquisition assumptions.",
        ],
      },
      {
        title: "Connect contribution margin to advertising",
        paragraphs: [
          "Advertising spend should come from pre-ad contribution, not from revenue. If an order has a 40% contribution margin before ads, forty cents of each sales dollar is available for acquisition and fixed costs. Spending the entire amount on ads may produce a mathematical break-even order, but it leaves nothing for overhead or profit.",
          "Set a target above break even by preserving a required contribution after ads. Review both campaign ROAS and average ad cost per completed order. Platform attribution may claim revenue that would have occurred without the ad, so compare campaign reports with store-level contribution trends. A higher ROAS is useful only when the underlying product economics remain sound.",
        ],
      },
      {
        title: "Turn contribution into a break-even target",
        paragraphs: [
          "Once contribution per unit is known, divide fixed costs by that amount to estimate break-even units. If a product contributes $17 and the launch must recover $3,400 of photography, samples, design, and setup, the simplified break-even point is 200 units. A lower contribution means more sales are needed to recover the same commitment.",
          "Run a downside scenario before approving the target. Increase advertising, returns, or shipping and reduce the expected price. If contribution becomes zero or negative, additional volume cannot recover fixed cost under those assumptions. The seller must improve price, product cost, fulfillment, acquisition, or the fixed commitment before relying on sales growth.",
        ],
      },
      {
        title: "Build a repeatable contribution review",
        paragraphs: [
          "Start with the largest products or channels and use recent order exports, supplier records, shipping invoices, fee statements, and ad spend. Document which costs are included and whether the view is before or after advertising. Reconcile the estimate with monthly accounts so costs that do not appear beside an order are not forgotten.",
          "Update the model when price, shipping, payment terms, product cost, return rate, or acquisition cost changes. Contribution margin is a management measure rather than a complete accounting standard. Its value comes from using a clear definition consistently, comparing scenarios, and connecting order decisions to the fixed costs the business still needs to cover.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is contribution margin the same as net profit margin?",
        answer:
          "No. Contribution margin subtracts defined variable costs, while net profit margin also reflects fixed and operating expenses for the period.",
      },
      {
        question: "Should advertising be included in contribution margin?",
        answer:
          "It can be shown before and after advertising. Label the view clearly and use average acquisition cost from the same product, channel, and period.",
      },
      {
        question: "What is a good ecommerce contribution margin?",
        answer:
          "There is no universal target. The required margin depends on overhead, returns, growth strategy, cash needs, category risk, and the profit the seller needs to retain.",
      },
    ],
  },
  {
    slug: "free-shipping-profitability-guide",
    title: "Free Shipping Profitability Guide for Ecommerce Sellers",
    seoTitle: "Free Shipping Profitability: Cost, Margin, and Pricing Guide",
    category: "Shipping",
    description:
      "Evaluate whether free shipping works after product cost, carrier expense, packaging, fees, discounts, returns, and customer acquisition.",
    readTime: "11 min read",
    updatedAt: "June 11, 2026",
    relatedCalculatorSlugs: [
      "shopify-profit-calculator",
      "profit-margin-calculator",
      "break-even-calculator",
    ],
    relatedLinks: [
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Compare buyer-paid and seller-funded shipping scenarios at the order level.",
      },
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Measure how a shipping subsidy changes profit and margin.",
      },
      {
        label: "Break Even Calculator",
        href: "/break-even-calculator",
        description:
          "Estimate extra units needed when a shipping offer adds fixed or variable cost.",
      },
    ],
    sections: [
      {
        title: "Free shipping is a pricing decision",
        paragraphs: [
          "Free shipping does not remove delivery cost. It changes who pays the carrier and where the expense appears in the offer. The seller may absorb the full amount, include an average allowance in product price, require a minimum order value, limit the offer to selected regions, or use a combination of those approaches.",
          "The right question is not whether customers prefer free shipping. It is whether the offer produces enough additional conversion, order value, or repeat business to justify the cost. A store can increase orders and reduce profit at the same time when the shipping subsidy is larger than the contribution those extra orders create.",
        ],
      },
      {
        title: "Calculate the complete delivery cost",
        paragraphs: [
          "Start with postage or fulfillment charges, then add the packaging used for the order, labels, pick and pack, insurance, residential or remote-area surcharges, fuel adjustments, and any service fee charged by a fulfillment partner. Use actual invoice data by zone and package type rather than one carrier's advertised starting rate.",
          "Returns can create a second delivery cost. Depending on policy, the seller may pay the outbound shipment, return label, inspection, repackaging, and replacement delivery. Build a return allowance from recent product or category history. Bulky, fragile, apparel, and international orders often need their own scenarios because an overall average can conceal risk.",
        ],
      },
      {
        title: "Compare three common shipping offers",
        paragraphs: [
          "For buyer-paid shipping, record shipping collected as revenue and actual delivery expense as cost. For free shipping included in price, raise the product price by a documented allowance and test how payment or marketplace percentage fees change. For threshold shipping, calculate the contribution of the expected basket above the threshold rather than assuming every larger order is equally profitable.",
          "A threshold can improve average order value when customers add useful products, but it can also encourage low-margin additions or expensive multi-item fulfillment. Compare the basket's total product cost, package size, weight, pick time, and return behavior. The threshold should be based on contribution, not a round number copied from another store.",
        ],
      },
      {
        title: "A worked free-shipping example",
        paragraphs: [
          "Assume an item sells for $45 with $17 product cost, $5 payment and selling costs, $8 advertising, and $7 delivery and packaging. With free shipping, the order contributes $8 before fixed overhead. If the buyer previously paid $5 for delivery, removing that charge reduces collected revenue and contribution unless conversion or basket size improves enough to compensate.",
          "Now test a $65 threshold. If a customer adds a second item that contributes $12 before shipping and the combined package costs only $2 more to deliver, the larger basket may support the subsidy. If the second item adds weight, dimensional charges, and return risk, the threshold may not work. Use product-level basket data rather than assuming all add-ons are beneficial.",
        ],
      },
      {
        title: "Account for geography and service promises",
        paragraphs: [
          "A national free-shipping message can expose a seller to large zone differences. Segment local, regional, remote, and international orders. Consider excluding services or products with unusually high cost, applying a surcharge, or offering a slower economy method. A clear offer is better than a promise that the margin cannot support.",
          "Delivery speed also has a cost. If free shipping implies fast delivery, sellers may pay premium service levels or split inventory across fulfillment locations. Model the service actually advertised. Monitor late shipments, reships, support contacts, and refund behavior because customer experience costs can rise even when the carrier invoice looks acceptable.",
        ],
      },
      {
        title: "Measure the offer after launch",
        paragraphs: [
          "Compare conversion rate, average order value, contribution per order, contribution per visitor, refund rate, and repeat purchase behavior before and after the offer. Revenue and order count are incomplete. Contribution per visitor can be especially useful because it combines conversion with the money retained from each order.",
          "Use a defined test period and watch for changes in traffic mix, discounting, and advertising. A holiday promotion cannot automatically prove that free shipping caused the result. Keep a control or historical baseline where practical, then update the calculator with actual shipping and basket costs instead of leaving the original forecast unchanged.",
        ],
      },
      {
        title: "Choose a sustainable shipping policy",
        paragraphs: [
          "A sustainable policy states the eligible products, locations, service level, threshold, and return treatment. It also leaves enough contribution for overhead and profit. Sellers can combine flat rates, thresholds, membership benefits, local pickup, and product exclusions rather than forcing one rule across every order.",
          "Review the policy when carrier rates, package dimensions, fulfillment partners, product mix, or geographic demand changes. Free shipping can be a useful merchandising tool, but it should be funded by price, basket contribution, operational savings, or measured customer value. It should not depend on ignoring the cost of delivery.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should shipping charged to the buyer count as revenue?",
        answer:
          "For planning, record the collected amount and the actual delivery cost separately, using accounting treatment consistent with your business records.",
      },
      {
        question: "How should a free-shipping threshold be set?",
        answer:
          "Use basket contribution, delivery cost, package behavior, and expected product mix. A threshold should leave more contribution than the subsidy it creates.",
      },
      {
        question: "Can free shipping increase sales but reduce profit?",
        answer:
          "Yes. More orders do not guarantee more profit when the added shipping subsidy and other variable costs exceed the contribution from incremental sales.",
      },
    ],
  },
  {
    slug: "discount-profitability-guide",
    title: "Discount Profitability Guide for Online Sellers",
    seoTitle: "Discount Profitability: Margin Formula and Ecommerce Workflow",
    category: "Pricing",
    description:
      "Plan ecommerce discounts with a practical workflow for margin, required sales lift, payment fees, shipping, advertising, and promotion limits.",
    readTime: "12 min read",
    updatedAt: "June 11, 2026",
    relatedCalculatorSlugs: [
      "profit-margin-calculator",
      "shopify-profit-calculator",
      "break-even-calculator",
    ],
    relatedLinks: [
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Compare full-price and discounted revenue against the same complete cost base.",
      },
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Test discount, advertising, shipping, and payment cost changes together.",
      },
      {
        label: "Break Even Calculator",
        href: "/break-even-calculator",
        description:
          "Estimate the sales volume needed to recover promotion setup or campaign costs.",
      },
    ],
    sections: [
      {
        title: "A discount reduces more than the selling price",
        paragraphs: [
          "A 20% discount does not usually reduce product cost, packaging, fulfillment, fixed payment charges, or the work required to serve the order. The price falls while many costs remain unchanged. This is why a modest percentage discount can remove a much larger share of profit than the headline percentage suggests.",
          "Discount planning should begin with contribution per order at the normal price. Then calculate the same order at the promotional price, including any higher ad spend, shipping subsidy, affiliate commission, or return cost connected to the campaign. The difference shows how much profit is being exchanged for the expected increase in sales.",
        ],
      },
      {
        title: "Calculate profit before and after the promotion",
        paragraphs: [
          "Suppose a product sells for $60 and has $39 in variable costs, leaving $21 contribution. A 15% discount reduces price to $51. If percentage fees fall slightly but other costs stay similar, contribution may fall to about $12. The selling price declined 15%, but contribution declined roughly 43%.",
          "Use the exact fee and cost structure for the channel. Marketplace commission and payment processing may decline with price, while fixed fees do not. Fulfillment, packaging, and product cost normally remain. Advertising can rise during a promotion because the seller buys additional traffic. Model those changes rather than subtracting only the coupon amount.",
        ],
      },
      {
        title: "Find the required sales lift",
        paragraphs: [
          "Required unit lift can be estimated by dividing normal contribution by promotional contribution. In the example, $21 divided by $12 equals 1.75. The seller needs about 75% more units to generate the same total contribution, before considering extra campaign setup, customer support, inventory pressure, or returns.",
          "This comparison helps challenge vague goals such as increasing conversion. A promotion can improve conversion by 20% and still produce less contribution if each order keeps much less money. Measure contribution per visitor, total contribution, and inventory impact alongside conversion rate and gross sales.",
        ],
      },
      {
        title: "Separate promotion types",
        paragraphs: [
          "Percentage discounts, fixed coupons, bundles, buy-one-get-one offers, free gifts, free shipping, and loyalty credits have different cost behavior. A fixed coupon has a larger percentage effect on a low-priced basket. A free gift adds product and fulfillment cost. A bundle may improve average order value but increase package size and return complexity.",
          "Model each offer according to its actual mechanics. Do not treat a bundle's crossed-out comparison price as revenue. Use the amount customers pay and the cost of every included item. For loyalty credits, account for expected redemption and whether the future order will also receive other discounts.",
        ],
      },
      {
        title: "Protect against stacked costs",
        paragraphs: [
          "Promotions often stack with paid ads, affiliate commission, marketplace programs, and free shipping. A coupon that works for organic repeat buyers may lose money when attached to cold paid traffic. Create separate scenarios by acquisition source and customer type rather than averaging every order together.",
          "Set exclusions and maximum combinations when the commerce platform allows them. Review low-priced items, heavy products, high-return categories, and international orders separately. A universal code can expose the weakest products to the deepest economic damage even when the storewide average appears acceptable.",
        ],
      },
      {
        title: "Use discounts for a defined business purpose",
        paragraphs: [
          "A promotion can support inventory clearance, customer acquisition, repeat purchase, bundle discovery, seasonal demand, or a product launch. The acceptable margin depends on that purpose. Clearance may prioritize recovered cash, while customer acquisition may accept lower first-order contribution if repeat purchase evidence is strong.",
          "Document the hypothesis before launch: which customers should respond, which products are eligible, what contribution can be sacrificed, and what result would justify repeating the offer. Avoid using an assumed lifetime value to excuse weak first-order economics when the business does not have reliable retention data.",
        ],
      },
      {
        title: "Review promotion results with complete data",
        paragraphs: [
          "After the promotion, compare full-price and discounted orders by revenue, units, contribution, margin, ad cost, return rate, basket size, and new versus returning customers. Include refunds that arrive after the campaign ends. A promotion may look strong on launch day and weaken after return and support costs are known.",
          "Record the final assumptions and use them for the next plan. If the promotion missed its contribution target, investigate price depth, audience, product selection, shipping, creative, and stacking rules. The answer is not always to stop discounting, but every future offer should be based on measured economics rather than a generic percentage.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I calculate whether a discount is profitable?",
        answer:
          "Calculate contribution per order before and after the discount using complete variable costs, then compare total contribution at realistic sales volumes.",
      },
      {
        question: "Why does a 20% discount reduce profit by more than 20%?",
        answer:
          "Because many costs remain unchanged while revenue falls. The discount is taken from the portion of price that previously included profit.",
      },
      {
        question: "Should repeat customer value be included?",
        answer:
          "Only use retention and lifetime value assumptions supported by reliable cohort data, and keep the first-order result visible rather than hiding it.",
      },
    ],
  },
  {
    slug: "returns-refunds-profit-impact",
    title: "How Returns and Refunds Affect Ecommerce Profit",
    seoTitle: "Ecommerce Returns and Refunds: Profit Impact Guide",
    category: "Operations",
    description:
      "Measure the true profit impact of ecommerce returns, refunds, labels, damaged inventory, nonrefundable fees, replacements, and support work.",
    readTime: "12 min read",
    updatedAt: "June 11, 2026",
    relatedCalculatorSlugs: [
      "profit-margin-calculator",
      "shopify-profit-calculator",
      "amazon-fba-profit-calculator",
    ],
    relatedLinks: [
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Compare reported sales margin with a version that includes return allowances.",
      },
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Add an average per-order returns allowance to a direct-store scenario.",
      },
      {
        label: "Amazon FBA Profit Calculator",
        href: "/amazon-fba-profit-calculator",
        description:
          "Stress-test per-unit profit with return, removal, and damaged inventory allowances.",
      },
    ],
    sections: [
      {
        title: "A refund reverses revenue but not every cost",
        paragraphs: [
          "When an order is refunded, the seller may lose the sale while retaining some or all of the original costs. Product fulfillment, outbound delivery, packaging, payment processing, marketplace charges, advertising, and support may already have been paid. Some amounts can be recovered, while others remain or create an additional charge.",
          "This makes return economics more complex than subtracting refunded revenue. The seller needs to identify what happens to the product, fees, shipping, and acquisition cost after the return. A product that can be restocked quickly has a different loss profile from an opened, damaged, personalized, perishable, or low-value item.",
        ],
      },
      {
        title: "Map the full cost of a return",
        paragraphs: [
          "Track refunded product revenue, refunded shipping collected, nonrefundable payment or marketplace charges, return label cost, inspection, cleaning, repackaging, restocking labor, disposal, and replacement shipping. Include customer support and fraud loss when material. A replacement without a refund still creates another product and delivery cost.",
          "Separate customer-remorse returns from defects, damage, fulfillment errors, compatibility problems, and late delivery. The cost may be similar, but the operational response differs. Reason codes help a seller decide whether to change product information, quality control, packaging, carrier service, sizing guidance, or policy.",
        ],
      },
      {
        title: "Create a returns allowance",
        paragraphs: [
          "A returns allowance spreads expected return loss across orders for planning. Calculate total net return cost for a product or category over a representative period, then divide by completed orders or units. Enter that average as an additional cost when testing price and advertising scenarios.",
          "Use product-specific data where possible. Storewide averages can make a low-return accessory subsidize a high-return apparel or electronics line. New products need a conservative estimate based on comparable items, with frequent updates after real orders arrive. Keep the allowance separate from observed accounting results so the forecast and actual loss are not confused.",
        ],
      },
      {
        title: "A worked return-cost example",
        paragraphs: [
          "Suppose 100 orders each contribute $18 before returns, producing $1,800. Eight orders are refunded. The seller loses $45 of revenue on each, pays an $8 return label, retains $4 of nonrecoverable fees, and can resell six of the eight products after $3 of inspection and repackaging. Two products are damaged and lose their $16 landed cost.",
          "The return loss includes revenue reversal and the costs that remain, offset by any inventory value recovered. Exact accounting treatment varies, but the management conclusion is clear: the original $18 contribution per order overstated expected performance. Converting the period's return loss into a per-order allowance creates a more realistic price and acquisition target.",
        ],
      },
      {
        title: "Connect returns to advertising and channel decisions",
        paragraphs: [
          "Ad platforms often report revenue before later returns are known. A campaign can show a strong ROAS while attracting customers or products with high refund rates. Review net sales and contribution after the return window, then compare campaigns by retained revenue rather than only initial attributed orders.",
          "Channels can also treat returns and fees differently. A marketplace may manage the customer process but charge fulfillment, return, or disposal amounts. A direct store may control policy while paying support and logistics directly. Use the same return-loss categories for each channel so the comparison reflects the complete outcome.",
        ],
      },
      {
        title: "Reduce avoidable return cost",
        paragraphs: [
          "Improve product descriptions, dimensions, compatibility details, size guidance, photography, materials, expected color variation, setup instructions, and delivery promises. Analyze repeated reason codes and customer questions. The goal is not to make returning impossible; it is to prevent orders created by unclear or inaccurate expectations.",
          "Operational changes can reduce loss after a return. Use routing rules for local returns, inspect high-value products quickly, standardize grading, and identify items that should be refunded without return when postage exceeds recoverable value. Review whether return windows, restocking practices, and carrier services match product economics and applicable consumer rules.",
        ],
      },
      {
        title: "Review profitability after the return window",
        paragraphs: [
          "Monthly profit reviews should include returns associated with earlier sales periods where practical. At minimum, track gross sales, refunds, return shipping, damaged inventory, nonrecoverable fees, and replacement cost. Compare return rate and return cost per order because the same return percentage can have different financial effects.",
          "Update calculator assumptions when product quality, carrier service, seasonality, policy, or customer mix changes. Returns are not merely a customer-service statistic. They are part of product cost, acquisition efficiency, inventory recovery, and margin. Pricing and campaign decisions should reflect the amount the business keeps after the full order lifecycle.",
        ],
      },
    ],
    faqs: [
      {
        question: "How should returns be included in a profit calculator?",
        answer:
          "Use a per-order or per-unit allowance based on net historical return losses, then reconcile the estimate against actual refunds and recovery.",
      },
      {
        question: "Is return rate enough to measure the problem?",
        answer:
          "No. Track return cost per order and recovery value because products with the same return rate can produce very different financial losses.",
      },
      {
        question: "Should ad revenue be adjusted for refunds?",
        answer:
          "Yes. Review retained net sales and contribution after the return window instead of relying only on the ad platform's initial attributed revenue.",
      },
    ],
  },
  {
    slug: "cac-vs-roas-ecommerce-guide",
    title: "Customer Acquisition Cost vs ROAS for Ecommerce",
    seoTitle: "CAC vs ROAS for Ecommerce: Profit and Advertising Guide",
    category: "Advertising",
    description:
      "Understand how customer acquisition cost and ROAS measure different parts of ecommerce performance, and connect both metrics to contribution profit.",
    readTime: "11 min read",
    updatedAt: "June 11, 2026",
    relatedCalculatorSlugs: [
      "roas-calculator",
      "shopify-profit-calculator",
      "profit-margin-calculator",
    ],
    relatedLinks: [
      {
        label: "ROAS Calculator",
        href: "/roas-calculator",
        description:
          "Calculate attributed revenue per advertising dollar for a defined campaign.",
      },
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Convert average acquisition cost into an order-level profit scenario.",
      },
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Check how acquisition cost changes total profit and margin.",
      },
    ],
    sections: [
      {
        title: "CAC and ROAS answer different questions",
        paragraphs: [
          "Customer acquisition cost, or CAC, measures how much the business spends to acquire a new customer. ROAS measures how much attributed revenue advertising generated for each advertising dollar. Both help evaluate growth, but they use different denominators and can produce different conclusions about the same campaign.",
          "A campaign can have a strong ROAS because existing customers place large orders, while new-customer CAC remains high. Another campaign can have a modest first-order ROAS but acquire customers who make repeat purchases. Sellers should define whether they are measuring orders, new customers, total customers, or attributed revenue before interpreting either metric.",
        ],
      },
      {
        title: "Calculate customer acquisition cost",
        paragraphs: [
          "The basic formula is acquisition cost divided by new customers acquired. Define acquisition cost consistently. A narrow paid-media CAC may include only ad spend. A fully loaded CAC may also include agency fees, creative production, affiliate commission, promotional credit, software, and acquisition staff allocated to the period.",
          "Use new customers rather than all orders when the goal is customer acquisition. Decide how returning customers, guest checkout, marketplace buyers, and unidentifiable users are handled. If customer identity is incomplete, label the result as an estimate and avoid presenting it with false precision.",
        ],
      },
      {
        title: "Calculate and interpret ROAS",
        paragraphs: [
          "ROAS equals revenue attributed to ads divided by ad spend. A 3.5x ROAS means the reporting system assigned $3.50 of revenue for each advertising dollar. It says nothing by itself about product cost, fulfillment, payment fees, discounts, returns, or the amount of revenue that would have occurred without advertising.",
          "Attribution windows and models can differ across channels. Meta, Google, Amazon, TikTok, analytics tools, and store reports may assign the same order differently. Do not add channel-attributed revenue without checking overlap. Keep spend, currency, reporting dates, and attribution definitions aligned when comparing campaigns.",
        ],
      },
      {
        title: "Connect both metrics to first-order contribution",
        paragraphs: [
          "Suppose a new customer's first order produces $40 of contribution before advertising. If CAC is $28, the order leaves $12 before fixed overhead. If CAC rises to $45, the first order loses $5 under that definition. ROAS may still look acceptable when the order value is high, which is why product economics must be reviewed beside the revenue ratio.",
          "Calculate contribution after acquisition by subtracting CAC or average ad cost per acquired order from pre-ad contribution. Segment products when their margins differ. A campaign selling high-margin accessories and low-margin bulky goods can have one blended ROAS while producing very different profit by product.",
        ],
      },
      {
        title: "Use lifetime value carefully",
        paragraphs: [
          "Customer lifetime value can justify spending more than first-order contribution only when repeat behavior is supported by reliable cohort data. Use net contribution from repeat orders, not gross revenue. Account for retention cost, discounts, support, fulfillment, refunds, and the time required for those purchases to occur.",
          "Keep first-order economics visible even when using lifetime value. A business can be profitable over the customer lifecycle and still face a cash-flow problem if acquisition is paid today and contribution arrives months later. Apply conservative retention assumptions and compare forecast cohorts with mature actual cohorts.",
        ],
      },
      {
        title: "Choose metrics for the decision",
        paragraphs: [
          "Use ROAS for campaign revenue efficiency, CAC for the cost of adding customers, contribution after ads for order profitability, and payback period for cash recovery. No single metric should control budget. A high ROAS may be driven by returning customers; a low CAC may attract low-value customers; positive first-order contribution may still be too small for overhead.",
          "Create a simple scorecard by campaign and product: spend, new customers, CAC, attributed revenue, ROAS, net sales after refunds, pre-ad contribution, and contribution after ads. Review both campaign and blended store results. The blended view can reveal that several platforms are claiming the same demand.",
        ],
      },
      {
        title: "Build a practical review cadence",
        paragraphs: [
          "Monitor spend and obvious tracking issues frequently, but judge profit after enough time has passed for delayed conversions, cancellations, and returns. Weekly reviews can guide tests, while monthly cohort and profit reviews provide a more stable view. Label incomplete periods so they are not compared with mature results.",
          "Update targets when product margin, pricing, return rate, creative cost, customer mix, or repeat behavior changes. CAC and ROAS are measurement tools, not fixed truths. Their usefulness depends on consistent definitions, realistic contribution data, and a willingness to reconcile advertising reports with the money retained by the store.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is CAC the same as cost per purchase?",
        answer:
          "Not necessarily. Cost per purchase can include returning customers, while CAC should use newly acquired customers under a defined identity method.",
      },
      {
        question: "Can a campaign have good ROAS and bad CAC?",
        answer:
          "Yes. Returning-customer revenue or large orders can support ROAS even when the cost of adding each new customer is high.",
      },
      {
        question: "Should creative and agency costs be included in CAC?",
        answer:
          "Include them in a fully loaded view when they are part of acquisition, and keep a media-only view if it helps operational campaign comparisons.",
      },
    ],
  },
  {
    slug: "product-bundle-pricing-profit-guide",
    title: "Product Bundle Pricing for Ecommerce Profit",
    seoTitle: "Product Bundle Pricing: Ecommerce Profit and Margin Guide",
    category: "Pricing",
    description:
      "Build profitable ecommerce bundles by modeling combined product cost, discount depth, fulfillment, fees, shipping, advertising, and returns.",
    readTime: "11 min read",
    updatedAt: "June 11, 2026",
    relatedCalculatorSlugs: [
      "shopify-profit-calculator",
      "profit-margin-calculator",
      "markup-calculator",
    ],
    relatedLinks: [
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Enter the bundle price and combined order-level cost to test contribution.",
      },
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Compare bundle margin with the margin of standalone products.",
      },
      {
        label: "Markup Calculator",
        href: "/markup-calculator",
        description:
          "Translate combined cost and target markup into a candidate bundle price.",
      },
    ],
    sections: [
      {
        title: "Why bundles can improve or weaken profit",
        paragraphs: [
          "Bundles can raise average order value, move complementary inventory, reduce separate payment transactions, and make an offer easier to understand. They can also hide excessive discounts, add fulfillment work, increase package size, and create returns that are harder to process. The bundle should be evaluated as its own sellable product.",
          "Do not judge a bundle from the gap between crossed-out individual prices and the offer price. Calculate what the customer pays, the cost of every included item, the package and delivery cost, selling fees, acquisition cost, and expected return loss. Compare the result with selling the products separately.",
        ],
      },
      {
        title: "Build the complete bundle cost",
        paragraphs: [
          "Add landed cost for each component, inserts, special packaging, kitting, pick and pack, payment and marketplace fees, shipping, advertising, affiliate commission, and a returns allowance. If the bundle uses a larger box or different fulfillment tier, use the new charge rather than the cost of the main product alone.",
          "Allocate shared costs consistently. A bundle may require photography, a new listing, assembly instructions, or custom packaging. Those costs can be treated as fixed launch costs and reviewed through break-even analysis, while costs that occur with every bundle belong in unit contribution.",
        ],
      },
      {
        title: "Set a discount from contribution",
        paragraphs: [
          "Suppose two products sell separately for $40 and $30. Their combined variable cost, including separate fulfillment, is $43. A $63 bundle appears to give the customer a 10% discount from $70. If combined fulfillment and shipping save $4, bundle variable cost may fall to $39, leaving $24 contribution.",
          "Compare that $24 with the expected contribution from separate orders and with the cost of acquiring the bundle order. A deeper discount may still work if the bundle meaningfully reduces fulfillment or acquisition cost. Without those savings, the discount comes directly from contribution and requires more volume to produce the same total profit.",
        ],
      },
      {
        title: "Choose products that belong together",
        paragraphs: [
          "Useful bundles solve one customer task, support a routine, provide a starter set, or offer a logical refill. Combining unrelated slow inventory may increase the apparent value while confusing the offer. Review whether customers who buy one item already tend to buy the other, and whether the combined package changes shipping or return behavior.",
          "Protect hero products from being discounted unnecessarily. A popular item may sell at full price without help, while an accessory benefits from attachment. Test a main-product-plus-accessory structure, quantity pack, subscription starter kit, or tiered bundle. Each structure should have a documented cost and contribution target.",
        ],
      },
      {
        title: "Plan bundle advertising",
        paragraphs: [
          "Higher order value does not automatically support higher acquisition cost. Calculate pre-ad contribution for the bundle, then set a maximum ad cost that leaves room for overhead and profit. Compare conversion rate and contribution per visitor with the standalone product, not only revenue per order.",
          "Creative should accurately show quantities, sizes, variants, and exclusions. Misunderstood bundles can increase returns and support contacts. If an ad platform attributes revenue at the bundle price, verify that the store's actual bundle margin supports the reported ROAS before increasing spend.",
        ],
      },
      {
        title: "Handle inventory and returns",
        paragraphs: [
          "A bundle can become unavailable when one component runs out, even if the other products remain in stock. Forecast component demand, reserve inventory carefully, and decide whether substitutions are allowed. Track bundle sales at the component level so purchasing does not overlook which item limits availability.",
          "Define whether customers can return one component or must return the complete set, subject to applicable law and platform policy. Partial returns can create complicated refund and inventory values. Include damaged packaging, missing components, inspection, and repacking in the expected return cost.",
        ],
      },
      {
        title: "Measure bundle performance",
        paragraphs: [
          "Compare bundle and standalone sales by contribution dollars, margin, units moved, acquisition cost, return rate, fulfillment time, and inventory impact. A lower margin bundle can still be useful when it creates more contribution per visitor or moves inventory without weakening the main product's demand.",
          "Review the price when component cost, shipping, package dimensions, demand, or advertising changes. Keep the bundle only while it serves a clear merchandising purpose and meets the required contribution. A bundle is not automatically valuable because the customer sees a discount; it must improve the economics or customer decision in a measurable way.",
        ],
      },
    ],
    faqs: [
      {
        question: "How should I price an ecommerce bundle?",
        answer:
          "Add complete bundle cost, choose required contribution or margin, then test whether the resulting price offers a credible customer benefit.",
      },
      {
        question: "Should bundle discounts equal fulfillment savings?",
        answer:
          "Not automatically. Savings can fund part of the discount, but the bundle still needs contribution for acquisition, overhead, returns, and profit.",
      },
      {
        question: "How do partial returns affect bundle profit?",
        answer:
          "They can change refund allocation, inventory recovery, packaging, and support cost. Define and model the policy before launch.",
      },
    ],
  },
  {
    slug: "inventory-reorder-profitability-guide",
    title: "Inventory Reorder Profitability Guide",
    seoTitle: "Inventory Reorder Profitability: ROI, Margin, and Cash Guide",
    category: "Inventory",
    description:
      "Evaluate ecommerce reorders using per-unit profit, margin, ROI, sell-through, lead time, storage, advertising, and downside scenarios.",
    readTime: "12 min read",
    updatedAt: "June 11, 2026",
    relatedCalculatorSlugs: [
      "roi-calculator",
      "amazon-fba-profit-calculator",
      "break-even-calculator",
    ],
    relatedLinks: [
      {
        label: "ROI Calculator",
        href: "/roi-calculator",
        description:
          "Compare expected net return with the cash committed to a reorder.",
      },
      {
        label: "Amazon FBA Profit Calculator",
        href: "/amazon-fba-profit-calculator",
        description:
          "Model SKU-level landed cost, fees, storage, inbound freight, ads, and profit.",
      },
      {
        label: "Break Even Calculator",
        href: "/break-even-calculator",
        description:
          "Estimate units needed to recover fixed reorder or relaunch costs.",
      },
    ],
    sections: [
      {
        title: "A profitable product can still be a weak reorder",
        paragraphs: [
          "A product may show positive per-unit profit while being a poor use of cash. The reorder could be too large, sell too slowly, require expensive storage, face falling demand, or prevent investment in a stronger item. Reorder decisions need unit economics and inventory timing, not margin alone.",
          "Start with the SKU's recent net sales, contribution per unit, advertising cost, return rate, stockout history, and sell-through. Then update the next purchase with the current supplier price, freight, duty, preparation, exchange rate, minimum order quantity, and expected lead time. Old landed cost should not control a new commitment.",
        ],
      },
      {
        title: "Calculate landed cost for the new purchase",
        paragraphs: [
          "Landed cost includes unit purchase or manufacturing cost plus inbound freight, duties, inspection, labels, packaging, preparation, and other costs required before the unit is ready to sell. Divide shipment-level costs by usable units received. Defects and shortages can make cost per sellable unit higher than cost per unit ordered.",
          "Request supplier quotes with clear incoterms, quantities, packaging, and validity dates. Model currency movement when purchasing in another currency. If a packaging revision changes dimensions or weight, update marketplace fulfillment, parcel, and storage assumptions as well as the factory price.",
        ],
      },
      {
        title: "Forecast contribution and ROI",
        paragraphs: [
          "Estimate net selling price after expected discounts, then subtract landed product cost, selling fees, fulfillment, shipping, advertising, and return allowance. Multiply per-unit contribution by realistically sellable units, not the full order quantity when defects, samples, or unsold safety stock are expected.",
          "ROI compares projected net return with the cash committed, but it must use a defined period. A 30% return over three months is different from the same return over two years. Track the expected date of supplier payments, inventory arrival, sales, marketplace reserves, and cash recovery.",
        ],
      },
      {
        title: "Use sell-through and weeks of cover",
        paragraphs: [
          "Sell-through measures how much available inventory sold during a period. Weeks of cover estimates how long stock will last at expected demand. Use recent demand, seasonality, planned promotions, and lead time. Avoid extrapolating a launch spike or holiday period across an ordinary year.",
          "A reorder should provide enough cover for lead time and a deliberate safety allowance without creating unnecessary storage and markdown risk. Separate stable products from trend-sensitive, seasonal, perishable, or version-dependent products. The cost of a stockout and the cost of excess stock are different for each category.",
        ],
      },
      {
        title: "Run downside scenarios",
        paragraphs: [
          "Test a lower selling price, higher advertising cost, slower sales, increased returns, higher storage, delayed inbound shipment, and supplier cost overrun. Calculate profit and cash recovery under each case. A reorder that only works at the current best-case price and ad performance may not have enough resilience.",
          "For marketplace inventory, include aged inventory, removal, disposal, and long-term storage risk where relevant. For direct stores, include warehouse, fulfillment minimums, and discounting needed to clear slow units. A downside case should be uncomfortable but plausible, not an extreme designed to reject every purchase.",
        ],
      },
      {
        title: "Compare the reorder with alternative uses of cash",
        paragraphs: [
          "Rank potential purchases by expected contribution, ROI, payback time, demand confidence, operational complexity, and strategic importance. A lower-return staple may deserve inventory because it supports repeat customers, while a high-return experimental product may need a smaller test because demand evidence is weak.",
          "Keep enough liquidity for advertising, freight, tax, payroll, returns, and supplier deposits. Inventory that looks profitable on paper can create cash pressure when payment is due before sales occur. Reorder quantity should reflect the business's ability to fund the full operating cycle.",
        ],
      },
      {
        title: "Create an approval checklist",
        paragraphs: [
          "Before approval, document supplier terms, landed cost, current price, contribution, margin, ROI period, ad cost, return allowance, demand forecast, lead time, weeks of cover, storage risk, cash requirements, and downside result. Record who supplied each assumption and the date it was checked.",
          "After the inventory arrives, compare actual landed cost and sell-through with the plan. Update the next reorder instead of reusing the original forecast. A disciplined feedback loop turns each purchase into better evidence and reduces the chance that revenue growth hides slow, cash-intensive, or low-contribution stock.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is profit margin enough to approve a reorder?",
        answer:
          "No. Also review demand confidence, sell-through, lead time, storage, return risk, ROI period, and cash-flow timing.",
      },
      {
        question: "What cost should be used for inventory ROI?",
        answer:
          "Use the cash and directly attributable costs committed to the defined reorder, with projected return measured over the same scope and period.",
      },
      {
        question: "How should slow inventory be modeled?",
        answer:
          "Use lower sales velocity, longer storage, possible markdowns, and disposal or removal costs in a downside scenario.",
      },
    ],
  },
  {
    slug: "shopify-etsy-amazon-profit-comparison",
    title: "Shopify vs Etsy vs Amazon Profit Comparison",
    seoTitle: "Shopify vs Etsy vs Amazon: Seller Profit Comparison Guide",
    category: "Channels",
    description:
      "Compare Shopify, Etsy, and Amazon profit using the same product, fulfillment, fee, advertising, return, and operating cost framework.",
    readTime: "13 min read",
    updatedAt: "June 11, 2026",
    relatedCalculatorSlugs: [
      "shopify-profit-calculator",
      "etsy-fee-calculator",
      "amazon-fba-profit-calculator",
    ],
    relatedLinks: [
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Model direct-store order economics, payment fees, shipping, and acquisition.",
      },
      {
        label: "Etsy Fee Calculator",
        href: "/etsy-fee-calculator",
        description:
          "Estimate listing, transaction, payment, shipping, and Offsite Ads effects.",
      },
      {
        label: "Amazon FBA Profit Calculator",
        href: "/amazon-fba-profit-calculator",
        description:
          "Estimate referral, FBA, landed inventory, storage, PPC, and per-unit profit.",
      },
    ],
    sections: [
      {
        title: "Compare complete channel economics",
        paragraphs: [
          "Shopify, Etsy, and Amazon provide different combinations of storefront control, built-in demand, payment processing, fulfillment options, advertising, and customer relationships. A fee table alone cannot show which channel is most profitable. The comparison must include the cost of acquiring and serving an order on each channel.",
          "Use the same product, time period, currency, and cost definitions. Start with the price customers actually pay, then include landed product cost, platform and payment charges, fulfillment, shipping, packaging, advertising, returns, subscriptions, and channel-specific operations. Keep costs separate enough to explain why results differ.",
        ],
      },
      {
        title: "Model a Shopify order",
        paragraphs: [
          "A Shopify store gives the merchant control over site experience, pricing, offers, and customer data, but demand is not automatically included. Model payment processing, possible transaction charges, apps, the store plan, shipping or fulfillment, packaging, fraud, returns, support, and the advertising or content cost needed to generate orders.",
          "Allocate recurring store costs over a realistic order volume, while keeping variable costs at order level. A low-volume store can carry a high software cost per order. A growing store may reduce that allocation but spend more on acquisition, staff, and fulfillment. Use actual checkout and payout terms rather than a generic processor rate.",
        ],
      },
      {
        title: "Model an Etsy order",
        paragraphs: [
          "Etsy provides marketplace discovery and a selling environment for handmade, vintage, craft supply, and digital products. Model listing and renewal behavior, transaction charges, location-specific payment processing, shipping, production labor, packaging, advertising, currency or regulatory costs where relevant, and possible Offsite Ads attribution.",
          "Separate attributed and ordinary orders because advertising cost may not apply equally. Include maker time and customization support when they are significant. A listing can have a high percentage margin and still underpay the seller if production and service labor are omitted.",
        ],
      },
      {
        title: "Model an Amazon order",
        paragraphs: [
          "Amazon can provide marketplace demand and, through FBA, fulfillment and customer service infrastructure. Model referral fee, selling plan, FBA or merchant fulfillment, landed product cost, inbound freight, storage, PPC, returns, removals, coupons, and other SKU-specific charges. Dimensions, weight, category, and inventory age can materially change cost.",
          "Use per-unit profit, margin, ROI, and cash timing together. FBA may simplify delivery but require inventory to be purchased and positioned before the sale. A strong sales rank or revenue forecast does not remove the risk of price competition, storage, advertising, or slow inventory.",
        ],
      },
      {
        title: "A consistent product comparison",
        paragraphs: [
          "Imagine one product with $15 landed cost. It sells for $45 on a direct store, $48 on Etsy, and $43 on Amazon. Those prices cannot be compared until the seller adds channel fees, payment cost, shipping or FBA, advertising, packaging, returns, subscriptions, and labor. The highest price may not create the highest contribution.",
          "Run base and downside cases for each channel. Shopify may need higher acquisition cost. Etsy may add listing, processing, and attributed advertising. Amazon may add referral, fulfillment, storage, and PPC. Keep the assumptions visible. If one channel uses organic demand while another includes paid acquisition, label that difference rather than presenting the outputs as directly equivalent.",
        ],
      },
      {
        title: "Consider control, cash, and operational work",
        paragraphs: [
          "Profit calculations should be paired with operational requirements. Shopify may require more storefront, marketing, analytics, and support ownership. Etsy may require listing, communication, and production workflows suited to its customer expectations. Amazon may require inventory preparation, account compliance, listing management, and marketplace-specific advertising.",
          "Cash timing also differs. Review payment schedules, reserves, inventory purchases, return windows, and advertising billing. A channel can have positive unit economics but create working-capital pressure. Measure how long cash is committed and how much inventory or ad spend is needed before payouts are available.",
        ],
      },
      {
        title: "Choose a channel role instead of one winner",
        paragraphs: [
          "The best answer may be a portfolio. A direct store can support brand and customer retention, Etsy can reach shoppers looking for distinctive products, and Amazon can serve convenience-driven demand. Products, prices, bundles, and fulfillment methods do not need to be identical across every channel.",
          "Assign each channel a role and a minimum contribution target. Review profit by SKU and channel monthly, then update prices, inventory, advertising, and product selection. Avoid shifting volume based only on gross sales. The useful comparison is the money retained, the cash required, and the operational work needed to produce it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is cheaper for sellers: Shopify, Etsy, or Amazon?",
        answer:
          "There is no universal answer. Total cost depends on product, country, payment setup, fulfillment, advertising, returns, subscriptions, and seller operations.",
      },
      {
        question: "Should the same selling price be used on every channel?",
        answer:
          "Not automatically. Channel costs, customer expectations, competition, policies, and fulfillment differ, so each price should be tested against its own economics.",
      },
      {
        question: "Can one product be profitable on one channel and unprofitable on another?",
        answer:
          "Yes. Differences in fees, acquisition, fulfillment, returns, price, and operating work can materially change contribution by channel.",
      },
    ],
  },
];

export function getProfitGuide(slug: string): FeaturedGuide | undefined {
  return profitGuides.find((guide) => guide.slug === slug);
}
