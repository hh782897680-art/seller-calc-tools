import type {
  CalculatorSlug,
  FAQItem,
} from "@/data/calculators";

export interface FeaturedGuideSection {
  title: string;
  paragraphs: string[];
  subsections?: {
    title: string;
    paragraphs: string[];
  }[];
}

export interface FeaturedGuide {
  slug: string;
  title: string;
  seoTitle: string;
  category: string;
  description: string;
  readTime: string;
  updatedAt: string;
  relatedCalculatorSlugs: CalculatorSlug[];
  relatedLinks: {
    label: string;
    href: `/${string}`;
    description: string;
  }[];
  sections: FeaturedGuideSection[];
  faqs: FAQItem[];
}

export const featuredGuides: FeaturedGuide[] = [
  {
    slug: "best-shopify-profit-calculator-for-sellers",
    title: "Best Shopify Profit Calculator for Sellers in 2026",
    seoTitle: "Best Shopify Profit Calculator for Sellers in 2026",
    category: "Shopify",
    description:
      "Learn what a useful Shopify profit calculator should include, from product and payment costs to shipping, ads, refunds, apps, margin, and break-even ROAS.",
    readTime: "12 min read",
    updatedAt: "June 6, 2026",
    relatedCalculatorSlugs: [
      "shopify-profit-calculator",
      "profit-margin-calculator",
      "roas-calculator",
    ],
    relatedLinks: [
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Model revenue, product cost, shipping, payment fees, ad cost, profit, margin, ROI, and break-even ROAS.",
      },
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Check the relationship between revenue, cost, profit margin, and markup.",
      },
      {
        label: "ROAS Calculator",
        href: "/roas-calculator",
        description:
          "Compare advertising revenue with spend while keeping margin context visible.",
      },
    ],
    sections: [
      {
        title: "What makes a Shopify profit calculator useful",
        paragraphs: [
          "The best Shopify profit calculator is not the one with the most impressive dashboard. It is the one that matches the way a seller actually earns and spends money. A useful model starts with completed order revenue, then subtracts the costs required to source, market, process, pack, and deliver those orders. It should make assumptions visible so the merchant can replace examples with numbers from Shopify, payment providers, shipping invoices, and advertising reports.",
          "A calculator should also separate profit from cash collected. Gross sales can rise while contribution profit falls because discounts, acquisition cost, shipping subsidies, or payment charges increase. The goal is not to predict an exact accounting result from a few inputs. The goal is to create a consistent planning model that helps a seller compare products, campaigns, bundles, and price changes before committing more inventory or advertising budget.",
        ],
      },
      {
        title: "Start with accurate product and order revenue",
        paragraphs: [
          "Use the amount customers actually pay after seller-funded discounts, excluding cancelled or fully refunded orders from the sales total being analyzed. If shipping is charged separately, decide whether to include that collected amount as revenue and then enter the related delivery expense. Keep taxes collected for authorities separate from operating revenue according to the accounting treatment appropriate for the business.",
          "Product cost should represent landed cost rather than only the supplier invoice. Depending on the business, landed cost can include manufacturing, wholesale purchase price, inbound freight, duties, inspection, packaging components, and preparation before inventory is ready to sell. A bundle needs the combined cost of every included item. A made-to-order product may also need a realistic labor allowance so a busy sales month does not look profitable while consuming unpaid production time.",
        ],
      },
      {
        title: "Model Shopify and payment costs without assuming one rate",
        paragraphs: [
          "Shopify costs can vary by plan, country, payment setup, currency, and the services enabled by the merchant. Payment processing commonly contains a percentage and a fixed charge, while a store using a third-party provider may have a different combination of provider and platform costs. Enter the terms shown for the actual account rather than treating a rate found in an article as universal.",
          "Recurring store expenses also matter. Allocate the Shopify plan, paid apps, themes, email tools, review tools, subscriptions, and domains over a realistic monthly order volume. This does not turn each subscription into a true variable cost, but it helps a seller understand whether the current order base supports the software stack. Review the allocation when order volume changes because a fixed monthly cost has a larger per-order effect during a slow period.",
        ],
        subsections: [
          {
            title: "Keep payment fees and platform overhead separate",
            paragraphs: [
              "Separating the payment charge from recurring overhead makes scenario testing clearer. A higher selling price usually changes percentage-based processing cost, while the monthly plan remains fixed. This distinction helps a seller see whether a price increase, bundle, or minimum order threshold improves the economics for the reason expected.",
            ],
          },
        ],
      },
      {
        title: "Include shipping, refunds, and operational leakage",
        paragraphs: [
          "Shipping cost should reflect what the business pays, not only what the buyer pays. Include postage or fulfillment, packaging, labels, insurance when used, and predictable surcharges. If free shipping is offered, the full delivery expense remains a seller cost. If the buyer pays shipping, the collected amount and actual expense should both be modeled because they may not be equal.",
          "Refunds and returns create more than lost revenue. A merchant may pay return postage, replacement shipping, support time, damaged inventory, and processing charges that are not fully recovered. Instead of pretending every order is final, use recent store history to create a reasonable return allowance. Keep chargebacks, fraud loss, and reshipments visible when they materially affect a product or market.",
        ],
      },
      {
        title: "Connect ad spend to margin and break-even ROAS",
        paragraphs: [
          "Advertising should be evaluated against contribution profit, not revenue alone. Start with the amount left after product, fulfillment, payment, and other variable order costs. That contribution is the budget available to cover customer acquisition before the order loses money. A campaign with attractive reported ROAS can still be unprofitable when the product has a narrow pre-ad margin.",
          "Break-even ROAS is a planning threshold, not a recommended target. A business normally needs room above break even for overhead, returns, taxes, and uncertainty. Test a base case using current acquisition cost, then a stress case with higher ad spend or lower conversion. This shows whether the offer has enough resilience before the seller increases budget.",
        ],
        subsections: [
          {
            title: "Use blended and campaign views",
            paragraphs: [
              "Campaign reports help diagnose individual ads, while a blended view captures spend that is not perfectly attributed. Compare both. A product may appear efficient inside one platform while total paid acquisition, creator fees, agency cost, or discounting tells a different business-level story.",
            ],
          },
        ],
      },
      {
        title: "A practical monthly Shopify profit workflow",
        paragraphs: [
          "At the end of each month, export orders, refunds, discounts, and payouts. Gather product purchase records, shipping invoices, app bills, and advertising spend. Reconcile payment charges with the store assumptions, then calculate profit by product or product group rather than relying only on a storewide average. A strong product can hide a weak product when all revenue is combined.",
          "Use the Shopify Profit Calculator for fast scenarios, the Profit Margin Calculator for a simpler revenue-and-cost check, and the ROAS Calculator when evaluating campaigns. Save the assumptions alongside the result and date them. Repeating the same process each month creates a useful operating record, even though the calculator itself is not accounting software or an official statement of Shopify fees.",
        ],
      },
    ],
    faqs: [
      {
        question: "What costs should a Shopify profit calculator include?",
        answer:
          "Include product landed cost, shipping and fulfillment, payment charges, advertising, discounts, returns, packaging, allocated apps and subscriptions, and other costs that apply to the orders being analyzed.",
      },
      {
        question: "Is Shopify payout the same as profit?",
        answer:
          "No. A payout reflects payment activity after certain deductions, but product cost, advertising, shipping, returns, apps, overhead, tax obligations, and other expenses may still need to be deducted.",
      },
      {
        question: "How often should Shopify profit assumptions be updated?",
        answer:
          "Review them monthly and whenever pricing, payment setup, shipping terms, product cost, apps, discounts, or advertising strategy changes.",
      },
      {
        question: "Does a break-even ROAS mean a campaign is successful?",
        answer:
          "No. Break-even means the modeled contribution has been consumed. A sustainable target generally needs room for overhead, returns, uncertainty, and the seller's required profit.",
      },
    ],
  },
  {
    slug: "etsy-fees-explained-2026",
    title: "Etsy Fees Explained for Sellers in 2026",
    seoTitle: "Etsy Fees Explained for Sellers in 2026",
    category: "Etsy",
    description:
      "Understand Etsy listing, transaction, payment processing, shipping, Offsite Ads, production, and profit planning costs for sellers in 2026.",
    readTime: "12 min read",
    updatedAt: "June 6, 2026",
    relatedCalculatorSlugs: [
      "etsy-fee-calculator",
      "profit-margin-calculator",
      "markup-calculator",
    ],
    relatedLinks: [
      {
        label: "Etsy Fee Calculator",
        href: "/etsy-fee-calculator",
        description:
          "Estimate listing, transaction, processing, shipping, Offsite Ads, profit, and margin for one order.",
      },
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Check whether the revenue left after all entered costs supports the desired margin.",
      },
      {
        label: "Markup Calculator",
        href: "/markup-calculator",
        description:
          "Compare markup on cost with margin on selling price before setting a listing price.",
      },
    ],
    sections: [
      {
        title: "Why Etsy fees need an order-level model",
        paragraphs: [
          "Etsy sellers often manage several types of cost at once: making or sourcing the product, publishing the listing, completing the transaction, receiving payment, shipping the order, and sometimes paying for advertising. Looking only at the item price can make a listing appear healthier than it is. An order-level model keeps each deduction visible and helps the seller understand what remains after the sale.",
          "Etsy updated its Fees and Payments Policy in February 2026, and payment processing still varies by the location of the seller's bank account. Advertising participation, currency handling, taxes, and regulatory charges can also differ. Use current Etsy policy pages and the shop's Payment account as the source of truth. A calculator is most useful when its editable fields are replaced with the terms that apply to the actual shop.",
        ],
      },
      {
        title: "Listing fees and catalog behavior",
        paragraphs: [
          "A listing fee is connected to publishing or renewing an item, not necessarily to a completed sale. That means slow-moving inventory, expired listings, automatic renewals, and multi-quantity listings can create cost before or between orders. A shop with a large experimental catalog may experience listing expense differently from a made-to-order seller with a small number of proven products.",
          "Allocate listing cost using realistic sales behavior. If a product typically needs several listing periods before selling, the expected cost per completed order is higher than one initial listing charge. For products with multiple quantities, review how renewals occur after sales. Keep unsuccessful listing tests in the product-development budget rather than allowing only successful items to carry no share of the catalog's learning cost.",
        ],
      },
      {
        title: "Transaction and payment processing fees",
        paragraphs: [
          "Etsy's transaction fee and Etsy Payments processing fee are separate cost categories. Their calculation bases can include more than the displayed item price, such as shipping or other order amounts under the applicable policy. Payment processing terms vary by country and can contain both a percentage and a fixed component, which makes small orders especially sensitive to fees.",
          "Use the full modeled order amount that is subject to the fee, then enter the processing terms for the seller's market. If the shop lists in a currency different from the payment account currency, currency conversion may add another cost. Deposit fees or other location-specific charges can also matter. The Payment account provides the best evidence for how recent real orders were charged.",
        ],
        subsections: [
          {
            title: "Why fixed charges matter for low-priced products",
            paragraphs: [
              "A fixed payment component represents a larger percentage of a small order than a large order. Bundles or minimum order values can sometimes improve the fee structure, but they also change packaging, shipping, and buyer expectations. Test the entire order rather than optimizing one fee in isolation.",
            ],
          },
        ],
      },
      {
        title: "Shipping and production costs belong in the same analysis",
        paragraphs: [
          "Shipping charged to the buyer is not automatically profit. Record the amount collected and the actual cost of postage, packaging, labels, insurance, and handling separately. Free shipping moves the delivery burden into the item price, while undercharging shipping reduces the margin. International or oversized orders may need their own scenario because an average domestic shipping assumption can be misleading.",
          "For handmade goods, production cost should include materials, components, failed pieces, packaging, and a reasonable value for labor. Vintage and supply sellers should include acquisition, cleaning, inspection, photography, storage, and preparation. Digital products may have little fulfillment cost but still require design time, support, listing, payment, and advertising. A platform fee calculation without product economics is incomplete.",
        ],
      },
      {
        title: "Etsy Ads, Offsite Ads, discounts, and promotions",
        paragraphs: [
          "Etsy Ads and Offsite Ads work differently, so sellers should not merge them into one generic percentage. Etsy Ads uses a seller-controlled budget, while an Offsite Ads fee can apply to an attributed order under the current program rules. Whether participation is optional and which fee applies can depend on shop history and policy. Model attributed and non-attributed orders separately.",
          "Discounts reduce the amount collected while many costs stay unchanged. A sale event, coupon, or free-shipping offer can therefore remove more profit than expected. Before launching a promotion, calculate the discounted order with production, payment, marketplace, shipping, and advertising costs included. The right question is not whether the promotion increases orders, but whether those orders still support the seller's time and required margin.",
        ],
        subsections: [
          {
            title: "Use actual attribution instead of averaging every order",
            paragraphs: [
              "If only some orders incur an Offsite Ads fee, review them as a separate cohort. Averaging the fee across all sales can be useful for a monthly summary, but a listing-level decision is clearer when the seller can see both the ordinary and attributed order economics.",
            ],
          },
        ],
      },
      {
        title: "Build a repeatable Etsy pricing review",
        paragraphs: [
          "For each important listing, record item price, buyer-paid shipping, production cost, actual shipping expense, listing cost, transaction charge, payment processing, and advertising when applicable. Add expected returns, replacements, or custom-service time if those costs are material. Then compare net profit with the hours and cash required to create and deliver the order.",
          "Use the Etsy Fee Calculator to test the order, the Profit Margin Calculator to check the final margin, and the Markup Calculator when translating product cost into a possible price. Review the model whenever Etsy changes policy, material or postage costs move, or the shop joins a new promotion. This creates a practical pricing discipline without claiming that one example rate fits every seller.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the main Etsy fee categories?",
        answer:
          "Common categories include listing, transaction, Etsy Payments processing, advertising, currency conversion, deposit, regulatory, and optional service costs. The applicable mix varies by shop and location.",
      },
      {
        question: "Does Etsy charge fees on shipping?",
        answer:
          "Some Etsy fees can use an order base that includes shipping or other buyer-paid amounts. Check the current Etsy policy and your Payment account for the exact treatment that applies.",
      },
      {
        question: "Should every Etsy order include an Offsite Ads fee?",
        answer:
          "No. Model an Offsite Ads fee only for scenarios where the order is attributed under the program rules. It is useful to compare attributed and ordinary orders separately.",
      },
      {
        question: "How should handmade labor be included?",
        answer:
          "Assign a realistic labor cost to production, customization, packaging, and order handling. Without labor, a time-intensive product can appear profitable while underpaying the seller.",
      },
    ],
  },
  {
    slug: "amazon-fba-profit-calculator-guide",
    title: "Amazon FBA Profit Calculator Guide for 2026",
    seoTitle: "Amazon FBA Profit Calculator Guide for 2026",
    category: "Amazon",
    description:
      "Learn how to estimate Amazon FBA profit using selling price, referral fees, fulfillment, storage, inbound shipping, COGS, PPC, returns, margin, and ROI.",
    readTime: "13 min read",
    updatedAt: "June 6, 2026",
    relatedCalculatorSlugs: [
      "amazon-fba-profit-calculator",
      "roi-calculator",
      "break-even-calculator",
    ],
    relatedLinks: [
      {
        label: "Amazon FBA Profit Calculator",
        href: "/amazon-fba-profit-calculator",
        description:
          "Model SKU-level revenue, referral fees, fulfillment, storage, inbound freight, ads, profit, margin, and ROI.",
      },
      {
        label: "ROI Calculator",
        href: "/roi-calculator",
        description:
          "Compare estimated profit with the cost committed to inventory and selling activity.",
      },
      {
        label: "Break-even Calculator",
        href: "/break-even-calculator",
        description:
          "Estimate the units and revenue required to recover fixed launch or operating costs.",
      },
    ],
    sections: [
      {
        title: "What an Amazon FBA profit calculator should answer",
        paragraphs: [
          "An Amazon FBA profit calculator should show whether a specific SKU leaves enough money after the major costs of selling and fulfillment. It is not enough to subtract product cost from selling price. The model needs referral fees, FBA fulfillment, storage, inbound shipping, advertising, and other per-unit allowances. The result should include profit per unit, margin, and ROI so products with different prices and capital needs can be compared.",
          "Amazon's own pricing information explains that sellers can face selling-plan and referral fees, while optional programs such as FBA and Amazon Ads add other costs. Referral fees vary by category, and FBA estimates depend on product details. Use Seller Central, the Amazon Revenue Calculator, and current reports to obtain inputs. Third-party calculators are planning tools and should not be treated as official fee quotes.",
        ],
      },
      {
        title: "Define selling price and net order revenue",
        paragraphs: [
          "Start with the expected selling price after seller-funded discounts, coupons, and promotions. If the product regularly sells at a promotional price, using the full list price will overstate revenue. Keep taxes collected for authorities separate according to the accounting treatment used by the business. For multi-unit packs, make sure the selling price and every unit cost refer to the same sellable package.",
          "Do not assume the current Buy Box or launch price will remain stable. Test a normal case, a lower-price competitive case, and a higher-price case if the listing has room to move. Price changes affect revenue and percentage-based referral fees, while many fulfillment and product costs may remain fixed. Scenario testing shows whether the SKU has flexibility or depends on one fragile price point.",
        ],
      },
      {
        title: "Referral and FBA fulfillment fees",
        paragraphs: [
          "Referral fees commonly depend on the product category and may include tiered or minimum rules. Verify that the listing is in the expected category before using a percentage. A category change can alter the result even when the product and price stay the same. Use the current marketplace fee table and the SKU's actual order reports rather than copying an assumption from another product.",
          "FBA fulfillment cost depends on characteristics such as dimensions, shipping weight, size tier, marketplace, and program. Packaging changes can therefore affect more than inbound freight. A slightly larger box may move the product into a different fee tier. Before approving new packaging or a supplier revision, update dimensions and compare the resulting fee estimate with any savings in product cost.",
        ],
        subsections: [
          {
            title: "Treat each SKU as its own fee case",
            paragraphs: [
              "Storewide averages hide important differences. Two products with the same selling price can have different referral categories, fulfillment tiers, return rates, and ad costs. Model the exact SKU or sellable variation before placing a purchase order.",
            ],
          },
        ],
      },
      {
        title: "COGS, inbound shipping, and storage",
        paragraphs: [
          "Cost of goods sold should begin with the supplier or manufacturing cost and include preparation required to make the inventory sellable. Depending on the sourcing model, this can include labels, inspection, packaging, duties, freight, and prep services. Convert total shipment costs into a per-unit landed amount using the number of usable units received, not simply the number ordered.",
          "Inbound shipping to Amazon is separate from customer fulfillment and can change with shipment size, origin, carrier, placement options, and season. Storage also varies with inventory volume and time held. Use an average storage allowance for a quick model, then stress-test slow sell-through or seasonal inventory. A product can show attractive per-unit profit while tying up cash and accumulating storage risk.",
        ],
      },
      {
        title: "PPC, returns, and costs that are easy to miss",
        paragraphs: [
          "Amazon PPC should be converted into an average cost per unit for the sales period being evaluated. Use total relevant ad spend divided by units or attributed orders, then compare it with a blended advertising view. Launch campaigns often have a higher cost than mature campaigns, so calculate both. An estimate based only on mature advertising can make a new product launch look safer than it is.",
          "Returns, removals, disposal, refunds, promotions, reimbursements, aged inventory, subscriptions, and other account charges may need separate allowances. Not every returned unit can be sold again, and not every cost is fully recovered. Use the SKU's actual history when available. For a new product, run a conservative case instead of assuming perfect sell-through and zero operational loss.",
        ],
        subsections: [
          {
            title: "Separate contribution profit from cash flow",
            paragraphs: [
              "Per-unit profit does not show when cash is spent or recovered. Inventory may be paid for months before the sale, and advertising or freight can require additional working capital. Review ROI and cash timing together before deciding that a profitable SKU is affordable to scale.",
            ],
          },
        ],
      },
      {
        title: "Use margin, ROI, and break-even together",
        paragraphs: [
          "Profit margin shows how much of sales remains after the modeled costs. ROI compares profit with the costs committed. A SKU can have a reasonable margin but weak ROI if inventory and operating costs are high, or strong ROI but too little profit per unit to justify the work and risk. Use all three views: profit per unit, margin, and ROI.",
          "Break-even analysis is useful for launch expenses such as samples, photography, design, tooling, compliance, or initial creative. Divide those fixed costs by expected contribution per unit to estimate the sales required to recover them. If contribution is narrow or negative, more sales do not solve the problem. Revisit price, product cost, package size, fulfillment method, or advertising assumptions first.",
        ],
      },
      {
        title: "A disciplined FBA review before reordering",
        paragraphs: [
          "Before a purchase order, update selling price, referral category, dimensions, weight, fulfillment, landed cost, inbound shipping, storage, PPC, and other allowances. Run a base case and a downside case with lower price, higher ad cost, or slower sell-through. Compare the expected return with the cash that will be locked in inventory and the time needed to recover it.",
          "Use the Amazon FBA Profit Calculator for the SKU model, the ROI Calculator for return on committed cost, and the Break-even Calculator for launch investments. Save the date and source of each assumption. After sales occur, replace estimates with Seller Central and accounting data. The value of the process comes from repeated reconciliation, not from treating one forecast as guaranteed.",
        ],
      },
    ],
    faqs: [
      {
        question: "What costs belong in an Amazon FBA profit calculation?",
        answer:
          "Include product landed cost, referral fee, FBA fulfillment, storage, inbound shipping, advertising, returns or removals, promotions, and other SKU-level costs that materially affect the period.",
      },
      {
        question: "Are Amazon referral fees the same for every category?",
        answer:
          "No. Referral fees can vary by product category and may use tiered or minimum rules. Verify the current category and marketplace terms for the SKU.",
      },
      {
        question: "How should Amazon PPC be entered?",
        answer:
          "Use a per-unit or per-order advertising amount based on the sales period being modeled. Compare attributed campaign cost with blended total advertising spend.",
      },
      {
        question: "Why calculate both margin and ROI?",
        answer:
          "Margin measures profit relative to revenue, while ROI measures profit relative to cost. Together they provide a better view of pricing strength and capital efficiency.",
      },
    ],
  },
  {
    slug: "shopify-vs-etsy-fees",
    title: "Shopify vs Etsy Fees: Which Has Better Margins?",
    seoTitle: "Shopify vs Etsy Fees: Which Has Better Margins?",
    category: "Platform comparison",
    description:
      "Compare Shopify and Etsy fees, traffic, control, branding, advertising, beginner experience, and margin planning without assuming one platform is best for every seller.",
    readTime: "12 min read",
    updatedAt: "June 6, 2026",
    relatedCalculatorSlugs: [
      "shopify-profit-calculator",
      "etsy-fee-calculator",
      "profit-margin-calculator",
    ],
    relatedLinks: [
      {
        label: "Shopify Profit Calculator",
        href: "/shopify-profit-calculator",
        description:
          "Estimate direct-store profit after product, shipping, payment, app, and advertising assumptions.",
      },
      {
        label: "Etsy Fee Calculator",
        href: "/etsy-fee-calculator",
        description:
          "Estimate marketplace, payment, advertising, fulfillment, profit, and margin for an Etsy order.",
      },
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Compare both channels using the same revenue and cost definition.",
      },
    ],
    sections: [
      {
        title: "The fee comparison is not one percentage",
        paragraphs: [
          "Shopify and Etsy use different business models, so comparing one headline fee can produce the wrong conclusion. Shopify gives a merchant a controlled storefront and generally requires the seller to build or buy traffic. Etsy provides access to a marketplace where shoppers already browse, while charging marketplace-related fees and applying platform rules. The better margin depends on the product, order value, conversion, advertising, repeat purchase behavior, and operating workflow.",
          "A fair comparison uses the same order on both channels. Start with the price actually paid, then subtract product cost, shipping, payment processing, marketplace or platform charges, advertising, returns, subscriptions, and labor. Keep assumptions current and account-specific. Shopify plans and payment arrangements vary, while Etsy processing, advertising, currency, and regulatory costs can vary by seller location and order.",
        ],
      },
      {
        title: "Control and branding",
        paragraphs: [
          "Shopify usually gives a merchant more control over storefront design, navigation, merchandising, customer experience, and the tools connected to the store. That control can support a distinct brand and a direct relationship with returning customers. It also creates responsibility for site quality, policies, analytics, integrations, fraud management, and the cost of maintaining the software stack.",
          "Etsy gives sellers a standardized marketplace environment. The platform can make setup and buyer trust easier, but listings compete beside other products and the seller has less control over the overall shopping experience. Branding still matters through product photography, listing quality, packaging, and service, yet the marketplace remains prominent. The margin value of control depends on whether the seller can use it to improve conversion or repeat purchases.",
        ],
      },
      {
        title: "Fees and operating cost",
        paragraphs: [
          "A Shopify order may involve payment processing and, depending on the setup, platform transaction costs. The store also has recurring plan, app, domain, email, and other operating expenses that should be allocated across orders. These fixed costs can be efficient at higher volume but significant for a new store with few sales. Shipping, discounts, returns, and customer acquisition remain seller costs.",
          "An Etsy order can include listing, transaction, payment processing, and advertising-related costs, plus location-specific or optional charges. The platform fee stack may look higher on an individual order, but a seller should also consider the marketplace traffic and tools received in exchange. A channel is not automatically expensive merely because fees are visible, and a direct store is not automatically cheaper when traffic acquisition is omitted.",
        ],
        subsections: [
          {
            title: "Compare cost per completed order",
            paragraphs: [
              "Divide recurring store costs and channel-level marketing by realistic completed orders, then add order-specific charges. This creates a comparable cost per sale. Recalculate during slow months because fixed subscriptions spread across fewer orders and can materially change the result.",
            ],
          },
        ],
      },
      {
        title: "Traffic and advertising",
        paragraphs: [
          "Etsy can expose listings to shoppers already searching inside the marketplace, but visibility is not guaranteed. Sellers still compete on product fit, images, pricing, reviews, delivery, listing quality, and sometimes paid promotion. Offsite or onsite advertising can change order economics. Separate ordinary marketplace orders from orders with an advertising charge when evaluating a listing.",
          "A Shopify store typically needs its own traffic plan through search, social content, email, creators, partnerships, or paid advertising. That cost can exceed platform and payment fees. However, a direct store may provide more control over landing pages, bundles, email capture, and repeat purchase programs. Evaluate first-order acquisition separately from repeat orders because an owned audience can change long-term economics without guaranteeing profit.",
        ],
        subsections: [
          {
            title: "Do not compare Etsy fees with Shopify payment fees alone",
            paragraphs: [
              "The Shopify side must include traffic acquisition and store overhead, while the Etsy side must include marketplace and advertising costs. Leaving either out creates a biased comparison that favors the channel with less visible cost.",
            ],
          },
        ],
      },
      {
        title: "Beginner friendliness and operational workload",
        paragraphs: [
          "Etsy can be easier for a beginner who has a marketplace-appropriate product and wants to test demand without building a full standalone store. The standardized environment reduces some setup choices. The seller still needs compliant listings, clear policies, accurate production times, customer service, and careful fee planning. Competition and dependence on marketplace rules are part of the tradeoff.",
          "Shopify may suit a seller who wants a branded storefront, owns a traffic strategy, or already has an audience. The setup requires more decisions about design, payments, apps, analytics, shipping, and marketing. That work can create valuable control, but it can also add subscription cost and complexity before sales arrive. Beginner friendliness therefore depends on the seller's product, skills, audience, and willingness to manage a store.",
        ],
      },
      {
        title: "Which platform can produce better margins",
        paragraphs: [
          "Shopify may produce a stronger margin when the seller can acquire customers efficiently, spread recurring costs across enough orders, and generate repeat purchases through a controlled brand experience. Etsy may produce a stronger practical outcome when marketplace discovery lowers the cost and time required to reach buyers, even after marketplace fees. Neither result is guaranteed, and both can change by product.",
          "Many sellers use both channels for different roles. Etsy can validate products or reach marketplace demand, while Shopify supports a broader catalog, direct campaigns, and repeat customer workflows. Avoid forcing identical prices or promotions when channel costs differ. Instead, create a contribution model for each channel and review whether the price, service level, and advertising strategy make sense there.",
        ],
      },
      {
        title: "Run a neutral channel comparison",
        paragraphs: [
          "Choose one representative product and period. Enter the Shopify order in the Shopify Profit Calculator with allocated plan and app cost in the other-cost field. Enter the Etsy order in the Etsy Fee Calculator with listing, transaction, processing, shipping, and advertising assumptions. Then compare net profit, margin, time required, customer acquisition, and strategic value.",
          "Use actual reports after the test. A forecast cannot measure every return, support request, conversion difference, or repeat purchase. The best channel is the one that fits the product and produces acceptable economics under realistic operating conditions. A seller may prefer one channel for control, another for discovery, or a mixed approach that reduces dependence on any single source of demand.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Shopify always cheaper than Etsy?",
        answer:
          "No. Shopify can have lower visible order fees in some setups, but store subscriptions, apps, payment costs, and customer acquisition must also be included.",
      },
      {
        question: "Is Etsy better for beginners?",
        answer:
          "It can be easier for sellers with marketplace-appropriate products, but competition, platform rules, listing work, shipping, service, and fees still require careful management.",
      },
      {
        question: "Can sellers use Shopify and Etsy together?",
        answer:
          "Yes. Some sellers use Etsy for marketplace discovery and Shopify for a controlled storefront. Each channel should have its own cost and margin model.",
      },
      {
        question: "Should prices be identical on Shopify and Etsy?",
        answer:
          "Not automatically. Channel costs, customer expectations, promotions, and service can differ. Pricing decisions should follow applicable platform rules and a channel-specific profit analysis.",
      },
    ],
  },
  {
    slug: "best-free-ecommerce-spreadsheets",
    title: "Best Free Ecommerce Spreadsheets for Online Sellers",
    seoTitle: "Best Free Ecommerce Spreadsheets for Online Sellers",
    category: "Seller operations",
    description:
      "Learn which free ecommerce spreadsheets help sellers track profit, inventory, ad spend, product research, break-even targets, and monthly P&L.",
    readTime: "12 min read",
    updatedAt: "June 6, 2026",
    relatedCalculatorSlugs: [
      "profit-margin-calculator",
      "roi-calculator",
      "roas-calculator",
      "break-even-calculator",
    ],
    relatedLinks: [
      {
        label: "Free Ecommerce Profit Tracker",
        href: "/free-ecommerce-profit-tracker-spreadsheet",
        description:
          "Download a CSV template for revenue, costs, fees, ads, refunds, net profit, and margin.",
      },
      {
        label: "Profit Margin Calculator",
        href: "/profit-margin-calculator",
        description:
          "Check revenue, cost, profit, margin, and markup before adding a scenario to the tracker.",
      },
      {
        label: "ROI Calculator",
        href: "/roi-calculator",
        description:
          "Evaluate the return on inventory, campaign, or other seller investment.",
      },
      {
        label: "ROAS Calculator",
        href: "/roas-calculator",
        description:
          "Measure advertising revenue against spend and compare it with margin.",
      },
      {
        label: "Break-even Calculator",
        href: "/break-even-calculator",
        description:
          "Turn fixed cost and unit contribution into a required sales target.",
      },
    ],
    sections: [
      {
        title: "Why spreadsheets still work for ecommerce planning",
        paragraphs: [
          "A spreadsheet is useful because it makes assumptions visible. Sellers can see the columns, formulas, and source numbers instead of receiving one unexplained score. A simple sheet is often enough for a new store, a small catalog, or a product test. It can also bridge the gap between platform dashboards, ad reports, shipping bills, and accounting records before the business needs more specialized software.",
          "The limitation is equally important: a spreadsheet is only as accurate as its inputs and maintenance. It does not automatically reconcile payouts, categorize every fee, or replace bookkeeping, tax advice, inventory systems, or professional financial review. Use a clear structure, define each field, protect formulas, and update records on a regular schedule. Simplicity is valuable only when the sheet remains understandable and current.",
        ],
      },
      {
        title: "Profit tracker spreadsheet",
        paragraphs: [
          "A profit tracker records date, platform, product, SKU, units, selling price, gross revenue, product cost, shipping, marketplace fees, payment fees, advertising, refunds, other costs, net profit, and margin. This creates a transaction or period-level view of what the seller kept after the costs being tracked. The most useful sheet separates cost categories rather than using one miscellaneous deduction.",
          "Decide whether each row represents an order, SKU-day, weekly product total, or monthly channel total and remain consistent. Order-level data is detailed but time-consuming. Weekly or monthly summaries are easier but can hide variation. Reconcile the sheet against platform payouts and bank or accounting records. A free template can start the process, but the seller should adapt categories to match the actual business.",
        ],
      },
      {
        title: "Inventory tracker spreadsheet",
        paragraphs: [
          "An inventory tracker should include SKU, product name, supplier, unit cost, quantity on hand, quantity committed, reorder point, lead time, incoming purchase orders, and storage location. Sellers with variants need a separate row for each sellable SKU. The goal is to reduce stockouts and excess inventory while keeping the cash tied up in products visible.",
          "Add a simple reorder flag based on expected demand during lead time plus a safety allowance. Avoid treating the flag as an automatic purchase decision. Advertising plans, seasonality, supplier reliability, cash position, returns, and discontinuation risk can change the right reorder quantity. Compare inventory investment with expected profit and sell-through rather than ordering only because units are low.",
        ],
        subsections: [
          {
            title: "Track landed cost changes by purchase order",
            paragraphs: [
              "Supplier price, freight, duties, and preparation costs can change between shipments. Recording landed cost by purchase order helps explain why the same SKU produces a different margin over time and prevents an old cost assumption from controlling a new pricing decision.",
            ],
          },
        ],
      },
      {
        title: "Ad spend and ROAS tracker",
        paragraphs: [
          "An advertising sheet can track date, channel, campaign, product, spend, attributed revenue, orders, clicks, and reported ROAS. Add contribution margin or estimated profit so a high-revenue campaign is not mistaken for a profitable one. Platform attribution differs, so avoid adding reported revenue from several channels without checking overlap and the attribution windows used.",
          "Include a blended view that compares total advertising spend with total store revenue, then compare it with campaign-level reports. The blended number captures spend that may not be perfectly attributed, while campaign detail helps identify creative and targeting differences. Use the ROAS Calculator for a quick check, but set targets from margin and business costs rather than copying a generic benchmark.",
        ],
      },
      {
        title: "Product research and break-even sheets",
        paragraphs: [
          "A product research sheet can compare supplier, sample status, landed cost, target price, platform fees, fulfillment, expected ad cost, margin, competition notes, compliance needs, and differentiation. Keep estimates labeled clearly. Research numbers are not sales forecasts, and supplier quotes may exclude important freight, duties, preparation, or minimum order requirements.",
          "A break-even sheet converts launch costs into a required sales target. List photography, samples, tooling, design, setup, software, and initial creative as fixed costs. Then calculate contribution per unit after variable product, fulfillment, fee, and ad costs. Divide fixed costs by contribution to estimate required units. If contribution is zero or negative, the product cannot recover fixed cost under those assumptions.",
        ],
        subsections: [
          {
            title: "Use downside scenarios before committing cash",
            paragraphs: [
              "Add a second case with lower selling price, higher advertising, slower sales, or higher freight. A product that works only in the optimistic case may not provide enough room for ordinary execution problems, returns, or market changes.",
            ],
          },
        ],
      },
      {
        title: "Monthly P&L spreadsheet",
        paragraphs: [
          "A monthly profit and loss sheet summarizes revenue, cost of goods, gross profit, platform and payment fees, fulfillment, advertising, payroll or contractor cost, software, rent or storage, professional services, and other operating expenses. It provides a business-level view that product calculators cannot. Use categories that align with the bookkeeping system so monthly review does not create a second conflicting set of records.",
          "A spreadsheet P&L is useful for management planning, but it is not automatically compliant accounting. Timing, inventory accounting, taxes, accruals, depreciation, and owner transactions may require professional treatment. Reconcile the sheet with financial records and ask an accountant when decisions depend on formal statements. The seller-facing value is the monthly habit of explaining changes rather than simply observing a bank balance.",
        ],
      },
      {
        title: "Build a spreadsheet workflow that stays usable",
        paragraphs: [
          "Start with the smallest sheet that answers a real question. Use one header row, consistent dates and currencies, data validation where helpful, protected formula columns, and a notes field for unusual orders. Store source exports in dated folders. Avoid merging cells inside data tables or hiding the meaning of a formula behind manual formatting.",
          "Update the profit tracker weekly, reconcile monthly, and archive a period snapshot before changing formulas. Use the related calculators to test individual scenarios, then record approved assumptions in the spreadsheet. The free ecommerce profit tracker provides a Google Sheets-compatible CSV starting point. As the store grows, the same categories can guide migration to accounting, inventory, or analytics software.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a free spreadsheet replace ecommerce accounting software?",
        answer:
          "Usually not. A spreadsheet is useful for planning and management tracking, but bookkeeping, tax, inventory accounting, reconciliation, and formal reporting may require dedicated software or professional support.",
      },
      {
        question: "Should each spreadsheet row represent an order?",
        answer:
          "It can, but consistency matters more than one format. Small sellers may use order rows, while larger datasets may use daily, weekly, SKU, or channel summaries.",
      },
      {
        question: "What is the most important ecommerce spreadsheet?",
        answer:
          "For many sellers, a profit tracker is the best starting point because it connects revenue with product, shipping, fee, advertising, refund, and other costs.",
      },
      {
        question: "How often should ecommerce spreadsheets be updated?",
        answer:
          "Operational sheets may need weekly updates, while profit and P&L records should be reconciled at least monthly and whenever major cost or pricing assumptions change.",
      },
    ],
  },
];

export function getFeaturedGuide(slug: string): FeaturedGuide {
  const guide = featuredGuides.find((item) => item.slug === slug);

  if (!guide) {
    throw new Error(`Featured guide not found: ${slug}`);
  }

  return guide;
}
