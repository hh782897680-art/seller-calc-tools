export type CalculatorSlug =
  | "shopify-profit-calculator"
  | "etsy-fee-calculator"
  | "amazon-fba-profit-calculator"
  | "profit-margin-calculator"
  | "markup-calculator"
  | "roi-calculator"
  | "roas-calculator"
  | "break-even-calculator"
  | "paypal-fee-calculator"
  | "stripe-fee-calculator"
  | "ebay-fee-calculator"
  | "tiktok-shop-profit-calculator"
  | "woocommerce-profit-calculator"
  | "shopify-fee-calculator"
  | "etsy-profit-calculator"
  | "amazon-referral-fee-calculator"
  | "ebay-promoted-listing-fee-calculator"
  | "tiktok-shop-fee-calculator";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CalculatorData {
  slug: CalculatorSlug;
  name: string;
  shortDescription: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  formula: string[];
  example: string;
  faqs: FAQItem[];
  relatedSlugs: CalculatorSlug[];
  whatIs: string[];
  whoShouldUse: string;
  howToCalculate: string[];
  whyItMatters: string[];
  howToUse: string[];
  commonMistakes: string[];
  affiliateMessage: string;
}

export const calculators: CalculatorData[] = [
  {
    slug: "shopify-profit-calculator",
    name: "Shopify Profit Calculator",
    category: "Ecommerce Profit",
    shortDescription:
      "Estimate Shopify store revenue, fees, advertising cost, net profit, margin, ROI, and break-even ROAS.",
    seoTitle: "Shopify Profit Calculator | EcomProfitTools",
    seoDescription:
      "Calculate Shopify profit, margin, ROI, fees, and break-even ROAS from product, shipping, ad, and payment costs with this free seller tool.",
    formula: [
      "Revenue = Selling price x Number of orders",
      "Payment fees = (Revenue x Payment fee percentage) + (Fixed transaction fee x Orders)",
      "Total cost = ((Product cost + Shipping cost + Ad cost + Other cost) x Orders) + Payment fees",
      "Net profit = Revenue - Total cost",
      "Profit margin = Net profit / Revenue x 100",
      "ROI = Net profit / Total cost x 100",
      "Break-even ROAS = Revenue / Ad cost",
    ],
    example:
      "Suppose a store sells 100 items at $45 each. Each order costs $16 for the product, $5 for shipping, $8 in ads, and $1 in other costs. A 2.9% payment fee plus $0.30 per order makes revenue $4,500, total cost $3,160.50, and net profit $1,339.50. Profit margin is 29.77% and ROI is 42.38%.",
    faqs: [
      {
        question: "Does this include Shopify subscription or app fees?",
        answer:
          "Enter recurring platform or app costs in Other cost after allocating an amount per order. For a monthly view, divide the monthly cost by expected monthly orders.",
      },
      {
        question: "What should I enter for payment fees?",
        answer:
          "Use the percentage and fixed charge charged by your payment arrangement. Rates differ by plan, payment provider, currency, and whether extra transaction charges apply.",
      },
      {
        question: "Why is break-even ROAS shown as N/A?",
        answer:
          "ROAS requires ad cost as a denominator. When ad cost is zero, there is no meaningful advertising return ratio to display.",
      },
    ],
    relatedSlugs: [
      "profit-margin-calculator",
      "roas-calculator",
      "break-even-calculator",
    ],
    whatIs: [
      "A Shopify profit calculator is a planning tool for understanding what remains after an online store makes sales and pays the costs needed to deliver those orders. Revenue alone can look healthy while product purchases, shipping, payment processing, advertising, packaging, apps, and returns quietly reduce the amount a seller keeps.",
      "This calculator works at the order level and scales the figures by the number of orders. Enter the selling price and costs that apply to one average order, plus payment charges. It then provides an estimated period total. This approach is useful before launching a product, when reviewing a campaign, or when setting a price for a new bundle.",
    ],
    whoShouldUse:
      "Shopify merchants can use this tool when pricing a new item, reviewing a bundle, comparing shipping offers, or checking whether paid traffic still leaves enough margin. It is especially useful for store owners who know their typical order costs and want a quick scenario before changing a price or campaign.",
    howToCalculate: [
      "Start with gross sales: selling price multiplied by completed orders. Multiply each per-order operating cost by the same order count. Payment processing has two parts: a percentage applied to revenue and a fixed charge applied once for each order. Add all costs before subtracting them from revenue.",
      "Margin answers how much of each sales dollar remains as profit. ROI compares profit with the money spent to generate and fulfill sales. Break-even ROAS in this simplified view compares revenue with ad cost; it helps you spot whether advertising is consuming too large a share of sales, but it should be reviewed with all non-ad costs in mind.",
    ],
    whyItMatters: [
      "Shopify merchants usually make decisions across products, channels, and campaigns. A product with a high order value can still lose money if acquisition cost rises or shipping is underestimated. Checking profit rather than only revenue helps prevent scaling an offer that becomes more expensive with every order.",
      "Use the output to test pricing changes, free-shipping thresholds, bundles, discount campaigns, and target customer acquisition costs. The calculation is an estimate rather than an accounting statement: taxes, refunds, chargebacks, subscriptions, and region-specific fees may need separate tracking. Regularly replace assumptions with actual store reports for better decisions.",
    ],
    howToUse: [
      "Enter the average selling price and each per-order product, shipping, advertising, and other cost.",
      "Add the payment percentage and fixed transaction charge that apply to your checkout payments.",
      "Set the expected or actual number of orders for the period you want to review.",
      "Review net profit, margin, ROI, and break-even ROAS, then copy the result for your planning notes.",
    ],
    commonMistakes: [
      "Treating gross sales or an estimated payout as profit before product, shipping, and advertising costs.",
      "Leaving out fixed payment charges, allocated app costs, discounts, returns, or packaging when they apply.",
      "Increasing ad spend from revenue alone without checking margin and break-even ROAS assumptions.",
    ],
    affiliateMessage:
      "Want to start or optimize your Shopify store? Compare ecommerce tools here.",
  },
  {
    slug: "etsy-fee-calculator",
    name: "Etsy Fee Calculator",
    category: "Marketplace Fees",
    shortDescription:
      "Estimate Etsy transaction, payment processing, listing, and optional offsite ad fees alongside your net profit.",
    seoTitle: "Etsy Fee Calculator | EcomProfitTools",
    seoDescription:
      "Estimate Etsy listing, transaction, payment processing, and offsite ads fees, then calculate net profit and margin for an Etsy sale.",
    formula: [
      "Total revenue = Item price + Shipping charged to buyer",
      "Transaction fee = Total revenue x Transaction fee percentage",
      "Payment processing fee = (Total revenue x Processing percentage) + Fixed payment fee",
      "Offsite ads fee = Total revenue x Offsite ads percentage",
      "Total fees = Listing fee + Transaction fee + Payment processing fee + Offsite ads fee",
      "Net profit = Total revenue - Item cost - Shipping cost - Total fees",
      "Profit margin = Net profit / Total revenue x 100",
    ],
    example:
      "For a $40 item with $5 charged for shipping, $12 item cost, and $6 delivery cost, use a $0.20 listing fee, 6.5% transaction fee, and 3% plus $0.25 payment processing fee. With no offsite ad fee, total revenue is $45, fees are $4.73, and estimated profit is $22.28, a 49.50% margin.",
    faqs: [
      {
        question: "Are the default Etsy fee rates always correct?",
        answer:
          "No. Defaults are convenient starting assumptions only. Etsy payment, regulatory, advertising, currency, and tax treatment can differ by country or account, so confirm rates applicable to your shop.",
      },
      {
        question: "Should shipping charged to the buyer be included?",
        answer:
          "Yes. Marketplace transaction and processing fees may apply to amounts collected for shipping, so revenue includes shipping charged and your actual shipping expense is entered separately.",
      },
      {
        question: "When should I use an offsite ads fee?",
        answer:
          "Enter the applicable percentage when an order is attributed to Etsy Offsite Ads. Leave it at zero when estimating a sale that is not subject to that advertising fee.",
      },
    ],
    relatedSlugs: [
      "profit-margin-calculator",
      "markup-calculator",
      "shopify-profit-calculator",
    ],
    whatIs: [
      "An Etsy fee calculator estimates how a single order turns into take-home profit after marketplace charges and fulfillment costs. Handmade, vintage, craft supply, and digital product sellers commonly price an item based on materials and time, but platform fees can change the amount earned from each order.",
      "This tool separates collected revenue from costs. Revenue includes both the listed item amount and any shipping amount paid by the customer. Expenses include your item cost, the delivery cost you pay, a listing fee, transaction fees, payment processing, and an optional offsite advertising fee. Because fee programs vary, every fee field is editable.",
    ],
    whoShouldUse:
      "Etsy sellers preparing or revising a listing can use this estimate before choosing a price, shipping charge, or promotion. It supports handmade makers, vintage resellers, craft supply shops, and digital-product sellers who want to understand a representative order without assuming that every sale has identical fees.",
    howToCalculate: [
      "First add item price and customer shipping charge to find total revenue. Percentage-based transaction fees and payment processing are applied to that collected amount in this estimate. Payment processing also includes a fixed charge. Add a listing charge and, when relevant, the offsite advertising percentage.",
      "Total fees are added to product and shipping expense. The difference between collected revenue and the resulting total cost is net profit. Divide net profit by total revenue to see margin. Taxes, VAT collection, currency conversion, refunds, multi-quantity listings, and location-specific charges are not automatically inferred; enter or account for them separately.",
    ],
    whyItMatters: [
      "Small marketplace charges have a large effect on low-priced products, especially when a fixed payment charge applies. Checking one representative order helps a seller decide whether to raise a price, adjust shipping, build the fee into a bundle, or avoid a discount that would remove the intended profit.",
      "The calculator is also helpful when comparing Etsy sales with an independent storefront or an in-person channel. Use current Etsy documentation and shop statements to validate actual charges. Treat the result as a pricing estimate, then measure real margins from completed orders to account for advertising attribution and unexpected shipping expense.",
    ],
    howToUse: [
      "Enter the item price, shipping paid by your customer, your item cost, and your actual shipping cost.",
      "Check the editable listing, transaction, and payment processing assumptions against your location and shop settings.",
      "Add an offsite ads percentage only when you want to model a sale that incurs that charge.",
      "Compare net profit and margin under different prices or shipping charges before publishing a listing.",
    ],
    commonMistakes: [
      "Applying percentage fees only to item price when the modeled fee base includes collected shipping.",
      "Adding an offsite ads charge to every scenario, or omitting it from an attributed sale.",
      "Assuming example listing and processing inputs match the seller's country and payment terms.",
    ],
    affiliateMessage:
      "Selling on Etsy? Discover tools to improve your store workflow.",
  },
  {
    slug: "amazon-fba-profit-calculator",
    name: "Amazon FBA Profit Calculator",
    category: "Marketplace Profit",
    shortDescription:
      "Model Amazon FBA revenue, referral and fulfillment fees, inventory costs, advertising, margin, and ROI.",
    seoTitle: "Amazon FBA Profit Calculator | EcomProfitTools",
    seoDescription:
      "Calculate estimated Amazon FBA profit, referral fees, fulfillment costs, margin, ROI, and profit per unit for your product.",
    formula: [
      "Revenue = Selling price x Units sold",
      "Referral fees = Revenue x Referral fee percentage",
      "FBA fees = Fulfillment fee per unit x Units sold",
      "Total costs = Referral fees + FBA fees + (Product, storage, inbound shipping, ad, and other cost per unit x Units sold)",
      "Net profit = Revenue - Total costs",
      "Profit per unit = Net profit / Units sold",
      "Profit margin = Net profit / Revenue x 100",
      "ROI = Net profit / Total costs x 100",
    ],
    example:
      "A product selling for $34.99 over 100 units produces $3,499 revenue. If product cost is $9, referral fee is 15%, fulfillment is $5, storage is $0.35, inbound shipping is $0.80, ads are $4, and other cost is $0.30 per unit, total cost is $2,469.85. Net profit is $1,029.15 or $10.29 per unit, with a 29.41% margin.",
    faqs: [
      {
        question: "Are all cost inputs per unit?",
        answer:
          "Selling price and every non-percentage cost field in this calculator are modeled per unit. Enter average per-unit advertising or storage cost when reviewing multiple units.",
      },
      {
        question: "Does this find Amazon fees automatically?",
        answer:
          "No. Referral and fulfillment charges depend on category, size tier, weight, program, and policy changes. Enter rates and charges from your current seller information.",
      },
      {
        question: "What is not covered in this estimate?",
        answer:
          "Possible removals, returns, aged inventory surcharges, promotions, taxes, reimbursements, account subscription fees, and currency effects should be separately considered where relevant.",
      },
    ],
    relatedSlugs: [
      "profit-margin-calculator",
      "roi-calculator",
      "roas-calculator",
    ],
    whatIs: [
      "An Amazon FBA profit calculator estimates whether a Fulfillment by Amazon product leaves a viable profit after the marketplace and fulfillment process are paid. FBA can simplify delivery and customer service, but the selling price must support referral fees, fulfillment charges, inventory acquisition, shipping into Amazon, storage, and promotion.",
      "The calculator models a set of units sold, while most cost entries are averages for one unit. That makes the output useful for product research and for reviewing an existing SKU over a week or month. It reports total profit together with profit per unit, margin, and ROI, because an attractive sales total does not automatically indicate an attractive product.",
    ],
    whoShouldUse:
      "Amazon FBA sellers can use this model while researching a possible product, choosing a reorder quantity, or reviewing an established SKU after advertising costs change. It is designed for sellers who can provide category, size-tier, landed-cost, storage, and promotion assumptions for the product being evaluated.",
    howToCalculate: [
      "Multiply item price by units sold to establish revenue. Apply the referral percentage to revenue. Multiply fulfillment fee and other unit-level costs by units sold, including product purchase cost, storage, inbound shipping, ads, and miscellaneous costs. Subtract their sum from revenue.",
      "Profit per unit makes it easier to compare products at different prices. Margin measures profit as a share of revenue, while ROI compares profit with costs committed. Fee schedules and size tiers can change, so the accuracy of this forecast depends on entering the correct fulfillment and referral assumptions for the specific SKU.",
    ],
    whyItMatters: [
      "Amazon sellers can encounter a product that appears profitable in sourcing research but underperforms after fulfillment and ad spend are included. Before ordering inventory, test changes in sale price, landed cost, conversion advertising expense, and fee tier. A narrow margin may not provide room for returns, coupons, or storage increases.",
      "For operating products, update the calculator with actual average ad cost and inventory expense rather than relying on a launch estimate. It can support reorder decisions and identify which cost reduction has the greatest value. It remains an educational estimator; reconcile decisions against Seller Central reports and professional tax or accounting guidance where needed.",
    ],
    howToUse: [
      "Enter a selling price, estimated units, and your product landed costs expressed per unit.",
      "Add the referral percentage and current FBA fulfillment amount for the product's category and size tier.",
      "Include per-unit storage, inbound shipping, advertising, and other operating allowances.",
      "Test different scenarios and use per-unit profit, margin, and ROI when evaluating inventory decisions.",
    ],
    commonMistakes: [
      "Using a fulfillment amount from the wrong size tier, weight, category, or marketplace.",
      "Omitting inbound freight, storage, advertising, returns, or other unit-level allowances.",
      "Reading revenue after one Amazon fee as final profit before inventory and fulfillment expense.",
    ],
    affiliateMessage:
      "Need better Amazon seller tools? Compare research and profit tools here.",
  },
  {
    slug: "profit-margin-calculator",
    name: "Profit Margin Calculator",
    category: "Business Fundamentals",
    shortDescription:
      "Turn revenue and cost into gross profit, profit margin, and markup for fast pricing analysis.",
    seoTitle: "Profit Margin Calculator | EcomProfitTools",
    seoDescription:
      "Calculate gross profit, profit margin, and markup from revenue and cost with a free tool for ecommerce sellers and small businesses.",
    formula: [
      "Gross profit = Revenue - Cost",
      "Profit margin = Gross profit / Revenue x 100",
      "Markup = Gross profit / Cost x 100",
    ],
    example:
      "If a product generates $125 in revenue and its applicable costs total $80, gross profit is $45. Profit margin is $45 divided by $125, or 36.00%. Markup is $45 divided by $80, or 56.25%. The two percentages answer different questions and should not be substituted for one another.",
    faqs: [
      {
        question: "Is profit margin the same as markup?",
        answer:
          "No. Margin uses revenue as the denominator and shows the portion of selling price kept as profit. Markup uses cost as the denominator and shows how much was added above cost.",
      },
      {
        question: "Which costs should be entered?",
        answer:
          "Use costs appropriate to the decision. For product contribution margin, include variable selling and fulfillment costs. For a broader business view, allocate overhead as well.",
      },
      {
        question: "What happens if revenue or cost is zero?",
        answer:
          "When a required denominator is zero, that percentage is displayed as N/A instead of presenting a misleading or undefined value.",
      },
    ],
    relatedSlugs: [
      "markup-calculator",
      "shopify-profit-calculator",
      "break-even-calculator",
    ],
    whatIs: [
      "A profit margin calculator shows how efficiently revenue turns into profit after selected costs are deducted. Sellers can calculate margin for one item, one order, a product category, or an entire reporting period, as long as revenue and cost cover the same scope. The result is a percentage of sales rather than only a dollar amount.",
      "Margin is often confused with markup. A margin of 36% means 36 cents of each sales dollar remains as profit under the included costs. A markup percentage instead compares that profit with what the item cost. The distinction matters when using a target percentage to determine price or when comparing results with marketplace dashboards.",
    ],
    whoShouldUse:
      "Sellers on any channel can use this calculator when comparing products, reviewing a discount, or checking whether a fee or shipping increase has reduced retained profit. It also suits small businesses that need a simple, consistently scoped margin check before moving to a fuller income statement.",
    howToCalculate: [
      "Subtract cost from revenue to obtain gross profit. Then divide gross profit by revenue and multiply by 100 to get profit margin. The calculator also divides profit by cost to give markup. If you are comparing several products, be consistent about whether fees, shipping, ad acquisition, labor, or overhead are included.",
      "A negative output means costs exceeded revenue for the scope entered. A high margin may still omit fixed business costs if only variable product costs were used. Use an input definition that matches the question: pricing an order, assessing an ad-supported item, or reviewing overall operations are different analyses.",
    ],
    whyItMatters: [
      "Ecommerce sellers face discounts, marketplace fees, shipping changes, and paid traffic costs that can rapidly reduce margin. Knowing the margin before launching a discount or paid campaign helps protect the profit that supports inventory, support work, and future growth. It is also easier to compare products using a percentage than dollar profit alone.",
      "Small business owners can use margin trends to see where pricing or purchasing needs attention. This simple calculation is not a full income statement and does not decide what a good margin should be; industry, product type, risk, and operating costs all matter. Use actual records and verify important financial decisions with qualified advice.",
    ],
    howToUse: [
      "Enter revenue or selling price for the product, order, or period you are analyzing.",
      "Enter total cost covering that same scope, using consistent inclusions across comparisons.",
      "Review gross profit and margin first, then use markup when considering cost-based pricing.",
      "Change revenue or cost to model discounts, supplier savings, or increasing fulfillment fees.",
    ],
    commonMistakes: [
      "Confusing margin, which is based on revenue, with markup, which is based on cost.",
      "Comparing products when one cost figure includes fees and ads while another does not.",
      "Treating gross margin as complete business profit when overhead and returns remain excluded.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "markup-calculator",
    name: "Markup Calculator",
    category: "Pricing",
    shortDescription:
      "Set a markup above cost and see the resulting selling price, dollar profit, and profit margin.",
    seoTitle: "Markup Calculator | EcomProfitTools",
    seoDescription:
      "Calculate a selling price, profit, and margin from product cost and markup percentage for ecommerce and small business pricing.",
    formula: [
      "Selling price = Cost x (1 + Markup percentage / 100)",
      "Profit = Selling price - Cost",
      "Profit margin = Profit / Selling price x 100",
    ],
    example:
      "A product with a fully included cost of $28 and a 75% markup would sell for $49. Profit before any omitted expenses is $21. That profit represents a 42.86% margin on the selling price. A 75% markup therefore does not mean a 75% profit margin.",
    faqs: [
      {
        question: "Should markup be applied only to product purchase cost?",
        answer:
          "It can be, but a price is more useful when cost includes the expenses you need the sale to recover, such as packaging, fees, and expected shipping or acquisition costs.",
      },
      {
        question: "Why is margin lower than my markup percentage?",
        answer:
          "Markup divides profit by cost, while margin divides it by the higher selling price. They have different denominators, so their percentages are normally different.",
      },
      {
        question: "Can this calculate a target margin price?",
        answer:
          "This version calculates from markup. For a margin target, you can test markup values until the resulting margin reaches the level appropriate for your costs and market.",
      },
    ],
    relatedSlugs: [
      "profit-margin-calculator",
      "break-even-calculator",
      "etsy-fee-calculator",
    ],
    whatIs: [
      "A markup calculator helps a seller establish a selling price by adding a chosen percentage above cost. Cost-based pricing is a practical starting point for wholesale products, handmade goods, services with direct materials, and early product research, because it ensures a planned amount is added to known expense.",
      "Markup is expressed relative to cost. If cost is $20 and the markup is 50%, the selling price becomes $30 and profit before omitted costs is $10. The resulting margin is only 33.33% because margin is measured against the selling price. Seeing both values avoids a common pricing misunderstanding.",
    ],
    whoShouldUse:
      "This tool is useful for makers, resellers, wholesalers, and online store owners establishing an initial price from known cost. It is a starting point when purchasing stock or planning a new item, before the seller checks the resulting price against platform fees, advertising, customer demand, and target margin.",
    howToCalculate: [
      "Choose a cost figure that represents the expense your price must recover. Multiply that amount by one plus the markup percentage expressed as a decimal. Subtract original cost from calculated price to find profit. Finally, divide profit by price to calculate margin.",
      "The arithmetic is simple, but cost definition is important. A markup built only on factory cost may be insufficient for a web sale after payment processing, delivery, marketplace commission, returns, advertising, or time spent fulfilling an order. Include relevant expenses or run a profit calculator after setting price.",
    ],
    whyItMatters: [
      "Sellers frequently need a quick first price for a new item or wholesale catalog. A repeatable markup rule can create consistency, but it should be checked against customer demand, competitors, taxes, channel charges, and target margin. A price that cannot cover true channel costs will not become viable merely because sales volume grows.",
      "Use this calculator to compare supplier quotes, evaluate bundle costs, or see how a price changes when inputs rise. After choosing a candidate price, check it with the Shopify, Etsy, Amazon, or profit margin calculator using channel-specific expenses. Calculations are for planning and education; final pricing remains a business decision.",
    ],
    howToUse: [
      "Enter the per-unit cost you want recovered through the sale.",
      "Enter the markup percentage you plan to apply above that cost.",
      "Review calculated selling price, profit, and the equivalent margin percentage.",
      "Test costs and markup levels, then validate the price using all selling-channel expenses.",
    ],
    commonMistakes: [
      "Applying markup only to purchase cost while ignoring shipping, fees, packaging, or labor.",
      "Expecting a markup percentage to equal the resulting profit margin percentage.",
      "Publishing the calculated price without checking channel-specific selling and advertising costs.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "roi-calculator",
    name: "ROI Calculator",
    category: "Performance",
    shortDescription:
      "Measure net return and return on investment for inventory, software, promotions, or business projects.",
    seoTitle: "ROI Calculator | EcomProfitTools",
    seoDescription:
      "Calculate net return and ROI percentage from investment cost and return amount for ecommerce and small business decisions.",
    formula: [
      "Net return = Return amount - Investment cost",
      "ROI = Net return / Investment cost x 100",
    ],
    example:
      "A seller spends $2,500 on inventory and directly attributable launch work and receives $3,400 in return under the chosen measurement. Net return is $900. Dividing $900 by $2,500 produces an ROI of 36.00%. The comparison is meaningful only if both figures use consistent costs and returns.",
    faqs: [
      {
        question: "What counts as investment cost?",
        answer:
          "Include costs directly relevant to the decision being evaluated, such as inventory, implementation, campaign spend, or contractor cost. Consistent scope makes comparisons more useful.",
      },
      {
        question: "Is revenue the same as return amount?",
        answer:
          "Not always. For some decisions, gross revenue overstates return because fulfillment or operating costs remain. Use a return measure that fits the analysis and label it clearly.",
      },
      {
        question: "Can ROI be compared across different periods?",
        answer:
          "Be careful. ROI alone does not reflect time. A 20% return over one month and over two years are not economically equivalent without considering duration and risk.",
      },
    ],
    relatedSlugs: [
      "roas-calculator",
      "amazon-fba-profit-calculator",
      "profit-margin-calculator",
    ],
    whatIs: [
      "Return on investment, usually shortened to ROI, compares the net gain from an activity with the amount invested in that activity. An ecommerce owner might use it for a new product order, packaging equipment, a subscription that saves labor, a website redesign, or a broader promotion where the relevant return can be estimated.",
      "ROI provides a percentage that makes differently sized projects easier to compare. It does not automatically define which revenue or cost belongs in the comparison. The usefulness of the output depends on including realistic expenses and choosing a return amount that reflects the same period and decision as the investment cost.",
    ],
    whoShouldUse:
      "Online sellers and small business owners can use ROI when weighing inventory purchases, store improvements, operating tools, or a defined promotion. It works best when each option has a clearly documented cost and return over the same period, so the percentage supports a decision rather than hiding different assumptions.",
    howToCalculate: [
      "Subtract investment cost from return amount to find net return. Divide that net return by investment cost, then multiply by 100. A positive result indicates the entered return exceeded investment, while a negative result indicates the project has not recovered its entered cost.",
      "When investment cost is zero, ROI cannot be defined and the tool displays N/A. If a project continues producing benefits for many months, calculate using a clearly stated period or use more detailed finance methods where time, cash flow timing, risk, taxes, and residual value are material.",
    ],
    whyItMatters: [
      "Sellers make tradeoffs with limited cash: reorder a product, test a sales channel, improve creative, or pay for operations software. ROI creates a common starting measure for those options. It is particularly useful when a high revenue project also requires a high upfront commitment and cannot be judged on sales alone.",
      "ROI should not replace cash-flow planning, margin analysis, or ad-specific ROAS. An inventory investment may have acceptable ROI but tie up funds too long; an ad campaign may have positive ROAS but lose money after product cost. Use the calculator as an estimate, document assumptions, and verify substantial decisions against reliable financial records.",
    ],
    howToUse: [
      "Enter the full investment cost for the project, stock purchase, tool, or initiative under review.",
      "Enter the return amount attributable to the same decision and measurement period.",
      "Read the dollar net return and ROI percentage; a negative value warrants review of assumptions.",
      "Keep the same cost and time definitions when comparing several potential investments.",
    ],
    commonMistakes: [
      "Using gross revenue as the return amount even though delivery and selling costs remain.",
      "Comparing ROI figures measured over very different time periods without noting that difference.",
      "Omitting implementation cost, recurring cost, risk, or cash tied up in inventory.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "roas-calculator",
    name: "ROAS Calculator",
    category: "Advertising",
    shortDescription:
      "Calculate return on ad spend and revenue after advertising cost for ecommerce campaign review.",
    seoTitle: "ROAS Calculator | EcomProfitTools",
    seoDescription:
      "Calculate ROAS from advertising spend and attributed revenue, with a clear view of revenue less ad spend for ecommerce campaigns.",
    formula: [
      "ROAS = Revenue from ads / Ad spend",
      "Profit before product cost = Revenue from ads - Ad spend",
    ],
    example:
      "An advertising campaign spends $600 and attributes $2,400 in revenue. The ROAS is 4.00x, meaning four dollars of tracked revenue for each advertising dollar. Revenue less ad spend is $1,800, but this is not net profit because product, delivery, platform, discount, and payment expenses still apply.",
    faqs: [
      {
        question: "What is a good ROAS?",
        answer:
          "There is no universal target. Your required ROAS depends on gross margin, repeat purchases, fees, attribution quality, overhead, and business goals. Calculate your break-even position first.",
      },
      {
        question: "Is ROAS the same as ROI?",
        answer:
          "No. ROAS compares attributed revenue with advertising spend. ROI compares net return with an investment and can account for more of the costs needed to deliver a sale.",
      },
      {
        question: "Why is ROAS N/A when spend is zero?",
        answer:
          "A return ratio cannot be calculated without advertising spend as its denominator. Organic revenue should not be presented as an infinite ad return.",
      },
    ],
    relatedSlugs: [
      "shopify-profit-calculator",
      "roi-calculator",
      "profit-margin-calculator",
    ],
    whatIs: [
      "ROAS means return on ad spend. It is a campaign efficiency ratio that divides revenue attributed to advertising by the advertising cost used to produce that revenue. Ecommerce advertisers see it in platforms such as paid social and search, where quick comparisons across ads, audiences, products, and time periods are needed.",
      "A ROAS calculator does not claim the campaign made a net profit. The revenue still needs to cover product costs, delivery, seller fees, payment processing, returns, discounts, overhead, and sometimes agency or creative expense. Attribution settings can also overstate or understate what the ad truly caused. ROAS is one useful lens, not a complete income statement.",
    ],
    whoShouldUse:
      "Ecommerce sellers running paid search, social advertising, marketplace ads, or creator-supported campaigns can use ROAS to compare attributed revenue with spend. It is most useful alongside a known contribution margin, because the revenue ratio must still be high enough to pay for products, delivery, fees, and returns.",
    howToCalculate: [
      "Enter the ad spend for a defined campaign and the revenue attributed over the matching period and attribution rule. Divide revenue by spend. A value of 3.00x means three dollars of attributed sales per dollar spent. The secondary result subtracts only ad spend from revenue to make the remaining amount visible before other costs.",
      "To find a workable performance target, consider contribution margin. If only 30% of a sale remains before ads, a campaign generally needs more than 3.33x revenue-to-spend merely to cover advertising under that simplified assumption. Use a profit calculator to incorporate actual product and selling expenses.",
    ],
    whyItMatters: [
      "Advertising can grow sales quickly while hiding poor economics. Sellers who monitor revenue without required ROAS may increase spend on products whose margin cannot pay for acquisition. Reviewing ROAS with margin supports decisions about budget, creative tests, landing pages, offers, and which products deserve promotion.",
      "Keep attribution comparisons consistent: platforms, windows, currencies, and inclusion of tax or shipping may differ. A strong reported ROAS can also reflect customers who would have purchased without an ad. Combine the output with store-level profit trends, customer acquisition cost, and repeat-purchase evidence before making large budget changes.",
    ],
    howToUse: [
      "Choose one campaign or reporting period and enter its advertising spend.",
      "Enter revenue attributed to that spend using a consistent platform report or analytics rule.",
      "Review ROAS as a revenue ratio and remember that revenue less ads is not full profit.",
      "Compare the ratio with your margin-based break-even target before adjusting budgets.",
    ],
    commonMistakes: [
      "Calling a high ROAS profitable without subtracting product, fulfillment, payment, and return costs.",
      "Comparing campaigns that use different attribution windows, currencies, or revenue definitions.",
      "Scaling spend toward the highest revenue ratio without checking break-even margin requirements.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "break-even-calculator",
    name: "Break Even Calculator",
    category: "Planning",
    shortDescription:
      "Find contribution margin, units needed to recover fixed costs, and the revenue required to break even.",
    seoTitle: "Break Even Calculator | EcomProfitTools",
    seoDescription:
      "Calculate break-even units and revenue from fixed costs, price per unit, and variable unit cost for ecommerce planning.",
    formula: [
      "Contribution margin per unit = Price per unit - Variable cost per unit",
      "Break-even units = Fixed costs / Contribution margin per unit",
      "Break-even revenue = Break-even units x Price per unit",
    ],
    example:
      "A product sells for $50, has $30 in variable cost per unit, and must recover $4,000 of fixed launch and operating cost. Its contribution margin is $20 per unit. The business must sell 200 units to cover fixed cost, representing $10,000 in revenue before profit begins under these assumptions.",
    faqs: [
      {
        question: "What are fixed costs?",
        answer:
          "Fixed costs are expenses that do not normally increase with each unit in the modeled range, such as setup work, rent, base software plans, or committed campaign creative.",
      },
      {
        question: "What belongs in variable cost per unit?",
        answer:
          "Include costs that occur when a unit is sold, such as product cost, transaction fee estimate, fulfillment, packaging, shipping subsidies, and per-sale advertising assumptions.",
      },
      {
        question: "Why is break-even not calculated for my inputs?",
        answer:
          "If variable cost is equal to or greater than price, each unit has no positive contribution to recover fixed cost. Price or variable costs must change before a break-even volume exists.",
      },
    ],
    relatedSlugs: [
      "profit-margin-calculator",
      "markup-calculator",
      "shopify-profit-calculator",
    ],
    whatIs: [
      "A break-even calculator estimates how many units a business must sell before the contribution from sales recovers fixed costs. Before reaching that point, the modeled activity has not covered its fixed commitment; after reaching it, additional contribution may become profit, assuming price and costs stay consistent.",
      "This analysis separates costs into fixed and variable groups. Fixed costs are committed for the project or period regardless of each sale. Variable costs rise with each unit sold. Price minus variable cost is contribution margin per unit, the amount available from one additional sale to recover fixed expense.",
    ],
    whoShouldUse:
      "Sellers planning a new product, launch campaign, wholesale order, pop-up offer, or store investment can use break-even analysis to turn upfront cost into a sales target. It is helpful before committing cash, provided the variable cost per sale includes the costs that genuinely rise with each order.",
    howToCalculate: [
      "Subtract variable unit cost from unit price. If the result is positive, divide total fixed cost by that contribution to find the exact break-even quantity. Multiply quantity by price for break-even revenue. In practice, products cannot usually be sold in fractional units, so round the unit result upward when setting a sales target.",
      "When contribution is zero or negative, selling more does not pay down fixed cost under the entered assumptions. The calculator therefore does not show a break-even quantity. Reassess selling price, purchase and fulfillment expense, marketplace fees, discounting, or paid acquisition cost before planning volume.",
    ],
    whyItMatters: [
      "An online seller may pay for product photography, store subscriptions, tooling, brand design, or initial campaign work before the first sale. Break-even analysis turns those commitments into a practical sales requirement. It can reveal whether a launch target is plausible and whether an additional fixed investment has enough expected volume to be supported.",
      "The calculation depends on stable assumptions. Shipping changes, returns, advertising cost, sales mix, and tiered fees can move the true break-even point. Use several scenarios rather than treating one result as certainty, and update the analysis with actual order costs after launch. It is a planning estimate, not financial or tax advice.",
    ],
    howToUse: [
      "Enter total fixed costs attributable to the product, project, or period you want to model.",
      "Enter selling price per unit and variable expense incurred for each unit sold.",
      "Review contribution margin and break-even units; round required units up for a real sales target.",
      "Model price or cost changes to see what improves the required sales volume.",
    ],
    commonMistakes: [
      "Leaving transaction fees, packaging, shipping subsidy, or per-sale advertising out of variable cost.",
      "Rounding a fractional break-even result down even though an additional full sale is required.",
      "Assuming price and unit cost will remain stable across discounts, returns, and volume changes.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "paypal-fee-calculator",
    name: "PayPal Fee Calculator",
    category: "Payment Fees",
    shortDescription:
      "Estimate a PayPal transaction fee, the amount you keep, and the effective fee rate from a payment received.",
    seoTitle: "PayPal Fee Calculator | EcomProfitTools",
    seoDescription:
      "Estimate PayPal payment fees and net amount received using an editable percentage and fixed fee for ecommerce payment planning.",
    formula: [
      "PayPal fee = Amount received x Fee percentage / 100 + Fixed fee",
      "Net amount = Amount received - PayPal fee",
      "Fee rate = PayPal fee / Amount received x 100",
    ],
    example:
      "If you receive $100 and enter a 3.49% percentage fee plus a $0.49 fixed fee, the estimated PayPal fee is $3.98. The net amount remaining is $96.02, and the effective fee rate is 3.98% because the fixed charge increases the percentage paid on this particular transaction.",
    faqs: [
      {
        question: "Are the default PayPal fee fields guaranteed to match my account?",
        answer:
          "No. The defaults are editable planning inputs. Rates can vary by product, country, currency, transaction type, and account agreement, so confirm the rate that applies to your payment.",
      },
      {
        question: "Why is the effective fee rate higher than the percentage field?",
        answer:
          "The effective fee rate includes the fixed fee as well as the percentage fee. Fixed charges have a larger impact on lower-value payments.",
      },
      {
        question: "Does this include currency conversion, disputes, or refunds?",
        answer:
          "No. This is a simple transaction-fee estimate. Include additional charges separately when they are relevant to your sales.",
      },
    ],
    relatedSlugs: [
      "stripe-fee-calculator",
      "woocommerce-profit-calculator",
      "profit-margin-calculator",
    ],
    whatIs: [
      "A PayPal fee calculator estimates how much of an incoming payment is deducted as a processing charge and how much remains available to the seller. For an online merchant, payment fees are easy to overlook when reviewing gross sales, especially when products have low prices or narrow margins. A fixed amount on every payment can materially affect small orders.",
      "This tool is intended for planning a single received payment. You can change both the percentage and fixed fee rather than relying on one universal rate. That matters because payment arrangements can differ by market, currency, checkout product, seller location, nonprofit or micropayment program, and other account terms.",
    ],
    whoShouldUse:
      "Sellers accepting PayPal payments through invoices, direct checkout, or an online store can use this calculator when estimating the amount retained from one transaction. It is particularly helpful for low-value orders or pricing comparisons where the fixed charge materially changes the effective percentage of the payment.",
    howToCalculate: [
      "Enter the gross amount received from the customer. Multiply it by the fee percentage divided by 100, then add the fixed fee. Subtract that estimated charge from the gross payment to see the net amount. The tool also shows an effective fee rate by dividing the full estimated fee by the amount received.",
      "The effective rate makes transaction size easier to compare. A fixed fee contributes a smaller portion of a large order and a larger portion of a small one. When the received amount is zero, an effective percentage cannot be calculated, so the output is shown as N/A rather than a misleading value.",
    ],
    whyItMatters: [
      "Ecommerce sellers need payment cost included in pricing, promotion, and channel comparisons. If a low-priced product looks profitable before processing charges, several small payments may produce less margin than a bundle or higher minimum order. Checking net receipts supports more realistic profitability estimates.",
      "Use this result alongside product, shipping, advertising, marketplace, tax, and refund assumptions rather than calling the net payment full profit. Review actual transaction statements before making major pricing changes. This calculator provides an editable educational estimate and does not determine the fees charged by PayPal.",
    ],
    howToUse: [
      "Enter the payment amount you expect to receive from a customer.",
      "Confirm or edit the percentage and fixed fee assumptions for your transaction type.",
      "Review the fee, net amount, and effective rate, then copy results for a pricing note.",
      "Compare order sizes or payment options using consistent rate assumptions.",
    ],
    commonMistakes: [
      "Leaving default rate inputs unchanged without checking the applicable market and transaction type.",
      "Treating the amount retained after PayPal fees as profit before order costs are deducted.",
      "Forgetting possible currency conversion, dispute, refund, tax, or cross-border effects.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "stripe-fee-calculator",
    name: "Stripe Fee Calculator",
    category: "Payment Fees",
    shortDescription:
      "Estimate a Stripe transaction fee and net payout amount using editable processing fee assumptions.",
    seoTitle: "Stripe Fee Calculator | EcomProfitTools",
    seoDescription:
      "Estimate Stripe processing fees, net payment amount, and effective fee rate with an editable fee calculator for online sellers.",
    formula: [
      "Stripe fee = Amount received x Fee percentage / 100 + Fixed fee",
      "Net amount = Amount received - Stripe fee",
      "Fee rate = Stripe fee / Amount received x 100",
    ],
    example:
      "For a $100 payment using a 2.9% percentage fee and a $0.30 fixed fee, the estimated Stripe fee is $3.20. The remaining net amount is $96.80. Because the fixed fee is included, the effective fee rate for this order is 3.20%, rather than simply the entered percentage.",
    faqs: [
      {
        question: "Does Stripe charge the same rate for every payment?",
        answer:
          "Not necessarily. The editable defaults are an estimate. Pricing can vary by country, payment method, currency conversion, international card use, billing product, or custom agreement.",
      },
      {
        question: "Should I enter sales tax or shipping in amount received?",
        answer:
          "Enter the payment total that the fee is calculated on for your scenario. Check your processing reports and applicable checkout setup to confirm the correct base amount.",
      },
      {
        question: "Is net amount the same as product profit?",
        answer:
          "No. Net amount here means the payment after the modeled Stripe fee; product, fulfillment, advertising, tax, refund, and overhead costs may still apply.",
      },
    ],
    relatedSlugs: [
      "paypal-fee-calculator",
      "woocommerce-profit-calculator",
      "shopify-profit-calculator",
    ],
    whatIs: [
      "A Stripe fee calculator helps an online seller estimate processing cost before evaluating a direct-to-consumer payment. Stores that use a hosted ecommerce checkout, custom website, subscription flow, invoice, or payment link may collect revenue through Stripe while still needing to account for the portion removed before funds are available.",
      "This calculator accepts a gross amount, percentage charge, and fixed charge. Those fee inputs remain editable because payment method and account pricing are not identical for every merchant or transaction. It is useful as a quick estimate during product pricing, checkout planning, or comparison between direct-store and marketplace sales.",
    ],
    whoShouldUse:
      "Direct-to-consumer store owners, subscription sellers, and merchants using payment links or invoices can use this calculator to model payment processing for an order value. It is useful when comparing checkout methods or setting a minimum order amount, especially when a fixed transaction charge is important to margin.",
    howToCalculate: [
      "Multiply the amount received by the entered percentage fee divided by 100. Add the fixed processing charge to produce an estimated Stripe fee. Subtract the fee from the payment amount to obtain net amount. Dividing fee by payment amount produces the effective rate shown in the results.",
      "An effective rate is helpful when fixed charges matter. For example, breaking a purchase into several small payments may cost more than processing a single equivalent order. A zero-dollar payment has no meaningful effective rate, so the calculator safely presents N/A in that case.",
    ],
    whyItMatters: [
      "Direct store owners may avoid some marketplace charges but they do not avoid payment processing. A fee estimate helps merchants price add-ons, choose minimum order thresholds, judge discount offers, and incorporate processing expense into a fuller profit model. It also prevents reporting gross checkout totals as money retained.",
      "The result should be combined with cost of goods, delivery, paid acquisition, apps, hosting, fraud, disputes, and returns where applicable. Use editable inputs drawn from your own account terms and actual statements. The calculation is for general planning and is not a statement of current Stripe pricing or financial advice.",
    ],
    howToUse: [
      "Enter the gross checkout payment or invoice amount being evaluated.",
      "Use the editable default percentage and fixed fee or replace them with your applicable terms.",
      "Review estimated Stripe fee, amount retained, and effective cost percentage.",
      "Copy the result or test different order values before setting prices or discounts.",
    ],
    commonMistakes: [
      "Using a domestic card assumption for a payment method or international transaction with different terms.",
      "Ignoring how a fixed processing fee affects smaller orders or split payments.",
      "Calling net payment product profit before fulfillment, marketing, refund, and overhead costs.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "ebay-fee-calculator",
    name: "eBay Fee Calculator",
    category: "Marketplace Fees",
    shortDescription:
      "Estimate eBay final value and optional promoted listing fees, then calculate order profit and margin.",
    seoTitle: "eBay Fee Calculator | EcomProfitTools",
    seoDescription:
      "Estimate eBay final value fees, promoted listing charges, total cost, net profit, and margin for a seller order.",
    formula: [
      "Total revenue = Sale price + Shipping charged",
      "eBay fee = Total revenue x Final value fee percentage / 100 + Fixed order fee",
      "Promoted listing fee = Total revenue x Promoted listing ad rate / 100",
      "Total cost = Item cost + Shipping cost + eBay fee + Promoted listing fee",
      "Net profit = Total revenue - Total cost",
      "Profit margin = Net profit / Total revenue x 100",
    ],
    example:
      "A $60 sale that charges $8 shipping produces $68 total revenue. With $24 item cost, $7 shipping cost, a 13.25% final value fee plus $0.30 order fee, and a 5% promoted listing rate, estimated eBay fee is $9.31 and promoted fee is $3.40. Total cost is $43.71, leaving $24.29 profit and a 35.72% margin.",
    faqs: [
      {
        question: "Is the default final value fee right for every eBay category?",
        answer:
          "No. Fees can differ by category, store plan, seller status, country, order value, and policy. Replace the default with the rate relevant to your listing.",
      },
      {
        question: "When should promoted listing ad rate be zero?",
        answer:
          "Leave it at zero if you are modeling an order without a promoted listing charge. Enter your assumed ad rate when you want to test an attributed promoted sale.",
      },
      {
        question: "Does this include every possible eBay charge?",
        answer:
          "No. Taxes, regulatory charges, international fees, optional upgrades, returns, discounts, and other account-specific costs may need separate consideration.",
      },
    ],
    relatedSlugs: [
      "etsy-fee-calculator",
      "amazon-fba-profit-calculator",
      "profit-margin-calculator",
    ],
    whatIs: [
      "An eBay fee calculator estimates the money remaining from a marketplace order after the seller pays item cost, delivery cost, final value fees, and an optional promoted listing charge. Buyers may pay shipping in addition to item price, while seller fees may be calculated using the collected order amount, so both revenue fields are included.",
      "The calculator focuses on a representative order rather than trying to infer a seller account or category automatically. Fee schedules and advertising participation vary, so its rate and fixed-order fields are deliberately editable. This makes it useful for preparing a listing, evaluating a promotion, or reviewing whether an item still works at a discounted price.",
    ],
    whoShouldUse:
      "eBay resellers and small shops can use this tool before listing an item, changing shipping, accepting an offer, or testing promoted listings. It helps sellers whose product cost and delivery expense are known but whose retained margin may shift because of category fees or an optional advertising charge.",
    howToCalculate: [
      "Add sale price and shipping collected to determine modeled revenue. Multiply that revenue by the entered final value fee percentage, then add the fixed order charge. When modeling promoted listings, apply the advertising percentage to revenue as a separate fee. Add both fees to the item and shipping costs you pay.",
      "Subtract total cost from total revenue for net profit. Divide that profit by revenue for margin. A negative result indicates that the listed cost and fee assumptions exceed the amount collected. The formula does not infer taxes, return losses, optional listing upgrades, or seller-specific fee adjustments.",
    ],
    whyItMatters: [
      "Marketplace sellers often compare items by sale price while overlooking how shipping collections, advertising, and category fees influence the final margin. Modeling the order first can prevent promoting a listing whose additional visibility produces revenue but insufficient profit. It can also help decide whether to bundle items or revise shipping strategy.",
      "Use actual category fees and order reports whenever available, especially before increasing inventory or advertising. Results are educational estimates rather than a fee quote from eBay or professional accounting advice. Profit decisions should incorporate refunds, taxes, labor, packaging, overhead, and other relevant business costs.",
    ],
    howToUse: [
      "Enter the sale amount, shipping collected, item cost, and shipping expense for one modeled order.",
      "Replace the final value percentage and fixed fee with assumptions applicable to your listing.",
      "Enter a promoted listing rate only if the scenario should include that charge.",
      "Review profit and margin, then test price or promotion changes before publishing.",
    ],
    commonMistakes: [
      "Ignoring shipping collected when it forms part of the modeled final value fee base.",
      "Using a rate from another category, selling program, store plan, or country.",
      "Including promoted listing fees inconsistently when comparing promoted and unpromoted orders.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "tiktok-shop-profit-calculator",
    name: "TikTok Shop Profit Calculator",
    category: "Social Commerce",
    shortDescription:
      "Model TikTok Shop revenue, seller fees, campaign costs, per-unit profit, margin, and ROI.",
    seoTitle: "TikTok Shop Profit Calculator | EcomProfitTools",
    seoDescription:
      "Calculate estimated TikTok Shop profit, seller fees, cost, profit per unit, margin, and ROI from your sales assumptions.",
    formula: [
      "Revenue = Selling price x Units sold",
      "TikTok fees = Revenue x TikTok fee percentage / 100",
      "Total cost = (Product cost x Units sold) + (Shipping cost x Units sold) + TikTok fees + Ad cost + Other cost",
      "Net profit = Revenue - Total cost",
      "Profit per unit = Net profit / Units sold",
      "Profit margin = Net profit / Revenue x 100",
      "ROI = Net profit / Total cost x 100",
    ],
    example:
      "If 10 units sell for $32 each, revenue is $320. With $10 product cost and $4 shipping cost per unit, a 6% fee, $35 total ad cost, and $5 total other cost, TikTok fees are $19.20 and total cost is $199.20. Net profit is $120.80, or $12.08 per unit, with a 37.75% margin and 60.64% ROI.",
    faqs: [
      {
        question: "Is the default TikTok Shop fee percentage always applicable?",
        answer:
          "No. Use it as an editable estimate only. Seller fees can depend on market, category, promotion, program terms, and policy changes.",
      },
      {
        question: "Are ad cost and other cost entered per unit?",
        answer:
          "In this calculator, product and shipping costs are per unit. Ad cost and other cost are entered as totals for the units sold in the modeled period.",
      },
      {
        question: "Does this include creator commissions or returns?",
        answer:
          "Only if you include them in Other cost. Add commissions, samples, refunds, packaging, discounts, or other expenses that apply to your analysis.",
      },
    ],
    relatedSlugs: [
      "shopify-profit-calculator",
      "roas-calculator",
      "profit-margin-calculator",
    ],
    whatIs: [
      "A TikTok Shop profit calculator estimates whether social-commerce orders remain profitable after products are fulfilled and platform-related expenses are considered. Video-driven discovery can produce rapid order volume, but revenue can be reduced by seller fees, paid promotion, shipping subsidies, creator arrangements, samples, and other operating costs.",
      "This tool models multiple units in one scenario. Selling price, product cost, and shipping cost are applied per unit. Advertising and other cost fields are period totals, making it practical to enter a campaign spend or combined allowance associated with the units sold. The results show total and per-unit performance.",
    ],
    whoShouldUse:
      "TikTok Shop sellers can use this estimate before joining a promotion, increasing live-shopping inventory, testing paid traffic, or setting a creator budget. It supports merchants who need unit economics for a social-commerce campaign rather than relying on views, gross sales, or order count alone.",
    howToCalculate: [
      "Multiply selling price by units sold to find revenue. Apply the entered TikTok fee percentage to that revenue. Multiply per-unit product and shipping expense by units, then add fee expense, total ad cost, and total other cost. Revenue minus this sum is net profit.",
      "Profit per unit supports comparisons between products or creator offers. Margin expresses profit relative to sales, while ROI expresses profit relative to entered cost. If no units or revenue are entered, percentage outputs that require division show N/A to avoid presenting undefined performance.",
    ],
    whyItMatters: [
      "A social commerce campaign can appear successful from sales counts and views while losing money after promotion and fulfillment. Estimating profit before raising spend helps sellers decide on price, free shipping, affiliate commission allowances, sample budgets, and the amount they can afford to pay to generate orders.",
      "The model is only as accurate as its assumptions. Replace general fee inputs with current terms applicable to your market, and compare estimates with actual order and campaign reports. Returns, taxes, creator commissions, discounts, and overhead should be included where relevant. Results are planning information, not financial advice.",
    ],
    howToUse: [
      "Enter sale price, per-unit product expense, per-unit shipping expense, and units sold.",
      "Set an estimated TikTok seller fee percentage for the relevant market or program.",
      "Enter total advertising and other costs allocated to those sales.",
      "Review profit, unit economics, margin, and ROI before changing your campaign plan.",
    ],
    commonMistakes: [
      "Omitting creator commission, samples, discounts, returns, or shipping subsidies from modeled costs.",
      "Mixing per-unit product inputs with total campaign costs when entering a scenario.",
      "Assuming a fee percentage from one market or program applies to another campaign.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "woocommerce-profit-calculator",
    name: "WooCommerce Profit Calculator",
    category: "Independent Store",
    shortDescription:
      "Estimate WooCommerce order profit after inventory, shipping, payment processing, hosting, plugins, and advertising.",
    seoTitle: "WooCommerce Profit Calculator | EcomProfitTools",
    seoDescription:
      "Calculate WooCommerce store profit, payment fees, profit per unit, margin, and ROI with hosting, plugins, and ad costs included.",
    formula: [
      "Revenue = Selling price x Units sold",
      "Payment fees = Revenue x Payment fee percentage / 100 + Fixed transaction fee x Units sold",
      "Total cost = (Product cost x Units sold) + (Shipping cost x Units sold) + Payment fees + Plugin or hosting cost + Ad cost",
      "Net profit = Revenue - Total cost",
      "Profit per unit = Net profit / Units sold",
      "Profit margin = Net profit / Revenue x 100",
      "ROI = Net profit / Total cost x 100",
    ],
    example:
      "A WooCommerce store selling 10 units at $50 creates $500 revenue. With $18 product cost and $5 shipping cost per unit, 2.9% plus $0.30 payment fees, $20 allocated plugin or hosting cost, and $60 advertising spend, payment fees are $17.50. Total cost is $327.50, leaving $172.50 net profit, $17.25 per unit, 34.50% margin, and 52.67% ROI.",
    faqs: [
      {
        question: "Does WooCommerce itself determine the payment fee?",
        answer:
          "Payment processing depends on the gateway and account terms you use with the store. Edit the percentage and fixed transaction fee to reflect the scenario you want to model.",
      },
      {
        question: "How should I enter plugin or hosting costs?",
        answer:
          "Allocate the portion of recurring or one-time store costs relevant to the units or period being measured. Keep that allocation consistent when comparing scenarios.",
      },
      {
        question: "What other costs might need inclusion?",
        answer:
          "Consider taxes, returns, packaging, labor, subscriptions, gateway add-ons, chargebacks, discounts, and any advertising or affiliate costs relevant to your store.",
      },
    ],
    relatedSlugs: [
      "stripe-fee-calculator",
      "paypal-fee-calculator",
      "shopify-profit-calculator",
    ],
    whatIs: [
      "A WooCommerce profit calculator estimates earnings for an independent online store built on WordPress and WooCommerce. Owning the storefront can provide control over checkout and customer relationships, but it does not remove product, fulfillment, payment gateway, marketing, hosting, and plugin expenses.",
      "This tool measures a set of units sold. Selling price, product cost, shipping cost, and fixed transaction fee scale with unit count. Payment percentage applies to revenue, while allocated plugin or hosting cost and advertising spend are entered as totals for the scenario. This gives sellers a convenient period or campaign estimate.",
    ],
    whoShouldUse:
      "WooCommerce store owners can use this calculator when setting prices, changing gateways, buying plugins, budgeting hosting, or reviewing an ad-supported product. It is also useful when comparing an independent storefront scenario with a marketplace option, provided costs are entered consistently for both channels.",
    howToCalculate: [
      "Multiply price by units for revenue. Payment fees consist of a percentage of revenue plus the fixed transaction charge for each sale. Multiply inventory and shipping expenses by unit count, then add payment fees, allocated plugin or hosting expense, and advertising cost. Subtract total cost from revenue for profit.",
      "The result also provides profit per unit, margin, and ROI. These measures answer different questions: retained dollars per item, profit as a percentage of sales, and profit compared with modeled costs. Division-dependent values show N/A when there is no meaningful denominator.",
    ],
    whyItMatters: [
      "Independent-store sellers sometimes compare WooCommerce with hosted or marketplace platforms using only headline fees. A realistic comparison also needs hosting, premium plugins, payment processing, acquisition cost, shipping, support, and ongoing maintenance. Modeling these expenses helps reveal whether a product price supports the channel.",
      "Use this calculator before promotions, paid traffic increases, subscription purchases, or pricing decisions, then replace estimates with real gateway, advertising, and expense reports. Not every store has the same plugins or processing arrangement, so all fee assumptions should be verified. Outputs are educational estimates rather than accounting, legal, or tax guidance.",
    ],
    howToUse: [
      "Enter your per-unit selling price, product cost, shipping cost, and number of units.",
      "Set payment processing assumptions using the applicable percentage and fixed charge.",
      "Allocate plugin or hosting expense and advertising cost for the modeled sales period.",
      "Evaluate net profit, per-unit profit, margin, and ROI before changing pricing or spend.",
    ],
    commonMistakes: [
      "Forgetting to allocate hosting, paid extensions, maintenance, or checkout-related subscription costs.",
      "Using payment gateway assumptions that do not match the selected method or merchant terms.",
      "Comparing gross direct-store sales with marketplace profit after fees instead of like-for-like cost scope.",
    ],
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "shopify-fee-calculator",
    name: "Shopify Fee Calculator",
    category: "Storefront Fees",
    shortDescription:
      "Estimate Shopify payment processing and applicable additional transaction fees from sales and order volume.",
    seoTitle: "Shopify Fee Calculator | EcomProfitTools",
    seoDescription:
      "Estimate Shopify payment processing fees, additional transaction charges, payout, and effective fee rate with editable seller assumptions.",
    formula: [
      "Payment processing fee = (Total sales x Payment fee percentage) + (Fixed transaction fee x Orders)",
      "Additional transaction fee = Total sales x Additional transaction fee percentage",
      "Total estimated fees = Payment processing fee + Additional transaction fee",
      "Estimated payout = Total sales - Total estimated fees",
      "Effective fee rate = Total estimated fees / Total sales x 100",
      "Fee per order = Total estimated fees / Number of orders",
    ],
    example:
      "Suppose a store models $2,500 in sales across 50 orders, using a 2.9% payment charge and $0.30 fixed charge with no additional transaction fee. The payment processing estimate is $87.50, leaving an estimated payout of $2,412.50 before product, shipping, advertising, subscription, refund, or tax costs. The effective payment fee rate is 3.50%, or $1.75 per order.",
    faqs: [
      {
        question: "Does this calculator determine my Shopify fees automatically?",
        answer:
          "No. Plans, payment arrangements, markets, currencies, and provider choices can affect charges. Enter the payment percentage, fixed charge, and any applicable additional transaction percentage from your current store terms.",
      },
      {
        question: "Should I enter an additional transaction fee?",
        answer:
          "Only when your modeled checkout arrangement applies one. If it does not apply, leave that field at zero rather than treating it as a standard charge.",
      },
      {
        question: "Is the estimated payout the same as store profit?",
        answer:
          "No. The payout shown removes only modeled transaction fees. Profit must also account for inventory, fulfillment, ads, apps, returns, taxes, discounts, and other operating expenses.",
      },
    ],
    relatedSlugs: [
      "shopify-profit-calculator",
      "stripe-fee-calculator",
      "profit-margin-calculator",
    ],
    whatIs: [
      "A Shopify fee calculator helps an online seller isolate checkout-related deductions before evaluating wider store profit. When orders are processed, a percentage charge and a fixed per-transaction amount can make the amount retained different from the headline sales total. Some payment arrangements may also involve an additional percentage transaction charge. Because those terms vary, this calculator does not prescribe a plan rate: it lets the seller enter the assumptions relevant to the store being reviewed.",
      "This tool is useful for pricing a product, comparing payment arrangements, or reviewing how average order value changes payment cost. A fixed charge usually represents a larger share of a small order than of a larger basket, so fee per order and effective percentage can reveal a cost that gross revenue alone hides. The output estimates payment-related deductions only, keeping it separate from the full Shopify profit tool that includes merchandise, fulfillment, and advertising costs.",
    ],
    whoShouldUse:
      "Shopify merchants reviewing payment arrangements, average order value, or checkout costs can use this focused fee estimator before running a complete profit model. It is useful for comparing order scenarios when the seller knows the relevant processing terms and whether an additional transaction charge applies.",
    howToCalculate: [
      "Begin with sales collected during the period and the number of paid orders. Apply the editable processing percentage to sales, then add the fixed charge once per order. If the checkout arrangement being evaluated has a separate transaction percentage, calculate it against sales as a second fee. Add both figures to find total estimated transaction fees and subtract that amount from sales for an estimated payout before non-payment expenses.",
      "Dividing total fees by order count gives a practical per-order estimate for pricing reviews. Dividing fees by sales produces an effective fee rate, which is helpful when comparing different basket sizes or payment scenarios. A zero-dollar or zero-order scenario has no meaningful rate or per-order cost, so the tool displays N/A rather than an invalid ratio. Verify actual statements and plan terms before decisions.",
    ],
    whyItMatters: [
      "Payment fees are rarely the largest store cost, but they apply whenever modeled sales are collected and can narrow the available contribution on inexpensive products or discounted bundles. Testing sales and order assumptions lets a merchant see whether increasing average order value, reducing unnecessary checkout charges, or allowing more room in price would materially improve retained revenue.",
    ],
    howToUse: [
      "Enter the gross sales and order count for the period or scenario you want to model.",
      "Add the payment processing percentage and fixed per-transaction charge applicable to that scenario.",
      "Enter an additional transaction fee percentage only when it applies to your selected payment arrangement.",
      "Review estimated payout, fee per order, and effective fee rate before analyzing complete store profit.",
    ],
    commonMistakes: [
      "Entering an additional transaction fee by default when the modeled payment setup does not apply one.",
      "Treating estimated payout after checkout fees as complete Shopify store profit.",
      "Modeling gross sales without an accurate order count when a fixed per-transaction amount applies.",
    ],
    affiliateMessage:
      "Running a Shopify store? Compare seller tools that support pricing and checkout decisions.",
  },
  {
    slug: "etsy-profit-calculator",
    name: "Etsy Profit Calculator",
    category: "Marketplace Profit",
    shortDescription:
      "Estimate Etsy profit across multiple modeled orders after product, delivery, listing, payment, transaction, and optional ad fees.",
    seoTitle: "Etsy Profit Calculator | EcomProfitTools",
    seoDescription:
      "Calculate estimated Etsy revenue, fees, cost, profit per order, and margin across multiple sales with editable assumptions.",
    formula: [
      "Revenue per order = Item price + Shipping charged to buyer",
      "Total revenue = Revenue per order x Orders",
      "Transaction fees = Total revenue x Transaction fee percentage",
      "Payment processing fees = (Total revenue x Processing percentage) + (Fixed processing fee x Orders)",
      "Total fees = Listing fees + Transaction fees + Processing fees + Optional offsite ads fees",
      "Net profit = Total revenue - Product and shipping costs - Total fees",
      "Profit margin = Net profit / Total revenue x 100",
    ],
    example:
      "For 10 modeled orders, suppose each item sells for $40 with $5 shipping collected, $12 product cost, and $6 shipping expense. Using a $0.20 listing amount, 6.5% transaction assumption, and 3% plus $0.25 processing assumption with no offsite ads, total revenue is $450.00, modeled fees are $47.25, total cost is $227.25, and estimated profit is $222.75, or $22.28 per order.",
    faqs: [
      {
        question: "How is this different from an Etsy fee calculator?",
        answer:
          "This version scales an average order across a chosen number of orders and emphasizes net profit, profit per order, and margin after entered fulfillment cost as well as fees.",
      },
      {
        question: "Are Etsy fee assumptions the same for every seller?",
        answer:
          "No. Location, payment processing terms, advertising attribution, currency, taxes, and current program rules may affect actual charges. Replace the example assumptions with terms that apply to your shop.",
      },
      {
        question: "Do I include offsite ads for every order?",
        answer:
          "Only model an offsite ads percentage when the group of orders being reviewed is expected to incur that cost. You can compare zero and non-zero scenarios separately.",
      },
    ],
    relatedSlugs: [
      "etsy-fee-calculator",
      "profit-margin-calculator",
      "ebay-fee-calculator",
    ],
    whatIs: [
      "An Etsy profit calculator turns an average listing sale into a period-level earnings estimate. Etsy sellers often know the price shown to a customer but need a clearer picture after product materials or purchase cost, shipping paid by the seller, listing amounts, marketplace transaction fees, processing charges, and optional advertising deductions are considered. By including order count, this tool can model a small product launch, a seasonal batch, or a representative month without entering every sale individually.",
    ],
    whoShouldUse:
      "Etsy shops that sell repeated or similar orders can use this calculator to model a launch batch, seasonal run, or typical month. It is intended for makers and resellers choosing price, delivery, and promotion assumptions when they need profit per order and total estimated profit together.",
    howToCalculate: [
      "Add item price and any shipping amount charged to the buyer to establish revenue per modeled order, then multiply by order count. Multiply product and delivery expense by that same order count. Fees are modeled separately: listing amount occurs once for each modeled order, transaction and optional advertising percentages apply to collected revenue, and payment processing combines a revenue percentage with a fixed amount for each order.",
      "After adding expenses and fees, subtract total cost from total revenue for net profit. Divide profit by order count to estimate earnings per representative order, and divide profit by revenue for margin. If no orders or revenue are entered, the ratio metrics are not meaningful and appear as N/A. The calculation is suitable for scenario planning; completed-sales reports remain the evidence for actual performance.",
    ],
    whyItMatters: [
      "Marketplaces make it easy to focus on order volume, but profitable volume depends on what remains from each order. Fixed fees and delivery expense can matter sharply for low-priced goods, while optional advertising charges may change the outcome of a promoted sale. A multi-order model makes it easier to ask whether a planned discount, shipping offer, or production batch leaves enough room for time and overhead.",
    ],
    howToUse: [
      "Enter the average item price, customer shipping charge, product cost, shipping expense, and number of orders.",
      "Enter listing, transaction, and payment processing assumptions appropriate to your modeled shop scenario.",
      "Add an offsite ads percentage only for orders that you want to model as subject to that charge.",
      "Review net profit, per-order profit, and margin as you compare prices, fulfillment costs, or promotion choices.",
    ],
    commonMistakes: [
      "Changing order count without scaling recurring listing, product, delivery, and fixed payment costs correctly.",
      "Applying an offsite ads assumption across all modeled orders without a matching attribution scenario.",
      "Omitting materials, packaging, labor allowance, refunds, or other expenses needed for a realistic profit review.",
    ],
    affiliateMessage:
      "Growing an Etsy shop? Explore tools that support listings, fulfillment, and pricing reviews.",
  },
  {
    slug: "amazon-referral-fee-calculator",
    name: "Amazon Referral Fee Calculator",
    category: "Marketplace Fees",
    shortDescription:
      "Estimate Amazon referral fees using an editable category percentage and optional minimum fee per unit.",
    seoTitle: "Amazon Referral Fee Calculator | EcomProfitTools",
    seoDescription:
      "Estimate Amazon referral fee per unit, total referral fees, proceeds after fees, and effective rate with editable category assumptions.",
    formula: [
      "Percentage referral fee per unit = Selling price x Referral fee percentage",
      "Applied referral fee per unit = Greater of percentage fee or entered minimum fee",
      "Total revenue = Selling price x Units sold",
      "Total referral fees = Applied fee per unit x Units sold",
      "Proceeds after referral fees = Total revenue - Total referral fees",
      "Effective fee rate = Total referral fees / Total revenue x 100",
    ],
    example:
      "Suppose 20 units sell for $35 each and the seller models a 15% referral percentage with a $0.30 minimum per unit. The percentage fee is $5.25 per unit, which is greater than the entered minimum. Estimated revenue is $700.00, total referral fees are $105.00, and proceeds after referral fees are $595.00 before fulfillment, storage, advertising, product cost, returns, or other expenses.",
    faqs: [
      {
        question: "Which referral fee percentage should I enter?",
        answer:
          "Enter the percentage applicable to the product category and selling program you are evaluating. Categories and policies can change, so confirm the current official terms rather than relying on a generic example.",
      },
      {
        question: "What does the minimum referral fee field do?",
        answer:
          "When you enter a minimum, the calculator applies the greater of the percentage result or that minimum for each unit. Enter zero when you do not need to model a minimum.",
      },
      {
        question: "Does this estimate Amazon FBA profit?",
        answer:
          "No. It isolates referral fees only. Fulfillment, storage, inbound freight, advertising, returns, subscription charges, tax treatment, and inventory cost require separate analysis.",
      },
    ],
    relatedSlugs: [
      "amazon-fba-profit-calculator",
      "profit-margin-calculator",
      "etsy-fee-calculator",
    ],
    whatIs: [
      "An Amazon referral fee calculator focuses on one marketplace deduction: the sales-based amount a seller models for allowing a product to be sold through a category on Amazon. This narrow calculation is useful during product research because a candidate item's price may look attractive before marketplace deductions are considered. The referral fee is separate from fulfillment and inventory economics, allowing a seller to understand the category charge before building a complete landed-cost model.",
      "The editable percentage and minimum fee inputs matter because products do not necessarily share the same assumptions. A category may use a different percentage, and the seller may need to account for an applicable per-item minimum under current terms. Rather than asserting a rate, the tool asks for the assumptions the seller has verified. It then applies the greater of the modeled percentage amount and entered minimum per unit.",
    ],
    whoShouldUse:
      "Amazon sellers can use this focused tool during early product research or category comparisons before moving to full FBA or merchant-fulfilled profit modeling. It is most useful when a seller wants to isolate referral fee impact using a verified category percentage and any applicable minimum amount.",
    howToCalculate: [
      "Multiply selling price by the entered referral percentage to find a percentage-based fee for one unit. Compare that amount with the optional minimum fee per unit and apply whichever is larger. Multiplying the applied unit fee by units sold provides total referral fees; multiplying price by units provides modeled sales revenue. Subtract referral fees from revenue for proceeds after this single fee category.",
      "The effective rate shows total referral fees as a share of modeled revenue, which can rise above the entered percentage when a minimum fee controls low-priced items. When revenue is zero, no meaningful effective percentage can be reported, so the calculator presents N/A. The proceeds result is not profit because no product, fulfillment, advertising, refund, tax, or operating costs have been deducted.",
    ],
    whyItMatters: [
      "Referral fees can affect price research, particularly when comparing products in different categories or evaluating low-price items where a minimum may matter. Testing a unit price, rate, minimum, and expected volume lets a seller see the deduction before investing in inventory or selecting a marketplace price. It can also reveal whether a price increase meaningfully improves retained proceeds after referral fees.",
    ],
    howToUse: [
      "Enter the selling price and expected number of units for the scenario being reviewed.",
      "Enter the referral fee percentage for the relevant category using current terms.",
      "Enter a per-unit minimum fee when applicable, or use zero to model percentage-only charges.",
      "Review applied fee per unit, total referral fee, and effective rate before completing a full profit estimate.",
    ],
    commonMistakes: [
      "Treating referral fee proceeds as profit before fulfillment, inventory, storage, and ad costs.",
      "Applying a generic percentage without confirming the relevant product category and current terms.",
      "Ignoring an applicable minimum fee when modeling low-price items or many units.",
    ],
    affiliateMessage:
      "Researching Amazon products? Compare seller tools for sourcing and fee planning.",
  },
  {
    slug: "ebay-promoted-listing-fee-calculator",
    name: "eBay Promoted Listing Fee Calculator",
    category: "Advertising Fees",
    shortDescription:
      "Estimate an eBay promoted listing ad fee across attributed sales using an editable ad rate assumption.",
    seoTitle: "eBay Promoted Listing Fee Calculator | EcomProfitTools",
    seoDescription:
      "Estimate eBay promoted listing fees, proceeds after the promoted fee, fee per order, and effective ad fee rate.",
    formula: [
      "Sale amount per attributed order = Sale price + Shipping charged",
      "Total attributed sale amount = Sale amount per order x Attributed orders",
      "Promoted listing fee = Total attributed sale amount x Promoted listing ad rate",
      "Proceeds after promoted listing fee = Total attributed sale amount - Promoted listing fee",
      "Fee per attributed order = Promoted listing fee / Attributed orders",
      "Effective ad fee rate = Promoted listing fee / Total attributed sale amount x 100",
    ],
    example:
      "Suppose a seller models 10 promoted orders with a $60 sale price, $8 shipping charged to the buyer, and a 5% promoted listing rate. The modeled attributed sale amount is $680.00 and the promoted listing fee is $34.00. That leaves $646.00 after the promoted fee alone, or $3.40 in promoted listing fee per attributed order, before final value fees, item cost, delivery, returns, or other expenses.",
    faqs: [
      {
        question: "Does this calculator include standard eBay selling fees?",
        answer:
          "No. It is focused on a modeled promoted listing fee. Use a broader eBay fee or profit calculation to include final value fees, fixed order charges, fulfillment, and product cost.",
      },
      {
        question: "Which promoted listing rate should I use?",
        answer:
          "Enter the ad rate and attribution scenario you want to evaluate. Campaign settings and applicable advertising terms may vary, so review the current terms and your campaign reports.",
      },
      {
        question: "Does a promoted listing fee prove the promotion was profitable?",
        answer:
          "No. An attributed sale can still be unprofitable after product cost, delivery, marketplace fees, returns, discounts, and other advertising or operating expense are included.",
      },
    ],
    relatedSlugs: [
      "ebay-fee-calculator",
      "roas-calculator",
      "profit-margin-calculator",
    ],
    whatIs: [
      "An eBay promoted listing fee calculator helps a marketplace seller model the advertising charge associated with sales attributed to a promoted campaign. Promotion can increase visibility for a listing, but the relevant decision is not simply whether an item sells. A seller also needs to know how the advertising deduction changes the amount available to cover merchandise, shipping, standard marketplace fees, returns, and eventual profit.",
      "This calculator deliberately isolates the promoted fee from other eBay charges. Enter a sale price, any shipping charged in the modeled order amount, the count of attributed orders, and an advertising rate assumption. The result shows the total promoted fee and fee per order without claiming that the entered rate or attribution rules apply universally. Current campaign terms and actual reports remain the appropriate source for a completed-sales review.",
    ],
    whoShouldUse:
      "eBay sellers using or considering promoted listings can use this tool to review advertising cost per attributed order before adjusting a campaign rate. It is suitable for sellers who already understand an item's normal margin and want to isolate the additional promoted listing deduction.",
    howToCalculate: [
      "First add the modeled item sale price and shipping charged to the buyer, then multiply by attributed orders to establish the sale amount being reviewed. Multiply that amount by the entered promoted listing percentage to estimate the promoted fee. Subtract the result from attributed sale amount to see proceeds remaining after this advertising charge alone. The rate field is intentionally editable so different campaign assumptions can be compared.",
      "Fee per attributed order provides a direct way to consider whether advertising cost fits the expected margin on an item. Effective rate repeats the selected ad percentage when the modeled base is consistent, while making the dollar impact visible at volume. If there are no attributed orders or no sale amount, per-order and rate outputs have no meaningful denominator and are shown as N/A.",
    ],
    whyItMatters: [
      "A promoted listing may produce sales while reducing already narrow contribution margin. Before increasing a campaign rate or including more listings, estimate the fee under realistic prices and order volume, then compare it with product-level profit. A seller may discover that promotion is manageable for high-margin goods but leaves little room on items with expensive delivery or heavy discounts.",
    ],
    howToUse: [
      "Enter the item sale price, shipping charged, and number of attributed promoted orders to model.",
      "Enter the promoted listing ad rate for the campaign scenario you are considering.",
      "Review total promoted fee and fee per attributed order to understand advertising cost.",
      "Compare the fee with complete product margin and current reports before adjusting campaign settings.",
    ],
    commonMistakes: [
      "Applying the promoted percentage to every sale instead of the attributed orders being modeled.",
      "Reading proceeds after the promoted charge as profit before standard fees and fulfillment cost.",
      "Changing the ad rate without comparing the added fee with item margin and actual campaign reports.",
    ],
    affiliateMessage:
      "Managing marketplace ads? Explore tools that help sellers review promotion and margin.",
  },
  {
    slug: "tiktok-shop-fee-calculator",
    name: "TikTok Shop Fee Calculator",
    category: "Social Commerce Fees",
    shortDescription:
      "Estimate TikTok Shop platform, affiliate commission, and optional fixed per-order fees from gross sales.",
    seoTitle: "TikTok Shop Fee Calculator | EcomProfitTools",
    seoDescription:
      "Estimate TikTok Shop platform fees, affiliate commission, proceeds after fees, and effective fee rate with editable assumptions.",
    formula: [
      "Platform fee = Gross sales x Platform fee percentage",
      "Affiliate commission = Gross sales x Affiliate commission percentage",
      "Fixed order fees = Fixed fee per order x Orders",
      "Total estimated fees = Platform fee + Affiliate commission + Fixed order fees",
      "Proceeds after fees = Gross sales - Total estimated fees",
      "Effective fee rate = Total estimated fees / Gross sales x 100",
      "Fee per order = Total estimated fees / Orders",
    ],
    example:
      "Suppose a seller models $1,500 in gross sales across 40 orders with a 6% platform fee assumption, no affiliate commission, and no other fixed order fee. The estimated platform fee is $90.00 and proceeds after modeled fees are $1,410.00 before product cost, shipping, samples, discounts, advertising, returns, taxes, or other operating expense. The modeled effective fee rate is 6.00%, or $2.25 per order.",
    faqs: [
      {
        question: "Are the default TikTok Shop fee assumptions official rates?",
        answer:
          "No. The starting values are editable examples for scenario planning. Market, program, promotion, category, and policy changes may affect charges, so confirm current terms relevant to the seller account.",
      },
      {
        question: "When should affiliate commission be entered?",
        answer:
          "Enter a commission assumption when modeling sales connected to an affiliate or creator arrangement that would incur that cost. Leave it at zero for scenarios where it does not apply.",
      },
      {
        question: "Is proceeds after fees the same as profit?",
        answer:
          "No. It removes the fee assumptions entered here only. Product, shipping, promotion, sample, return, discount, tax, and overhead costs still affect profit.",
      },
    ],
    relatedSlugs: [
      "tiktok-shop-profit-calculator",
      "roas-calculator",
      "profit-margin-calculator",
    ],
    whatIs: [
      "A TikTok Shop fee calculator estimates how selected platform and creator-related charges may reduce gross social-commerce sales. A short video or live shopping event can produce a rapid number of orders, but top-line sales do not show the deductions that must be covered before profit is evaluated. This tool provides a focused fee view for sellers planning a campaign, reviewing an offer, or comparing an affiliate-assisted scenario with sales that do not include commission.",
      "The calculator accepts gross sales and order count rather than requesting account access or transaction data. Fee structures and promotional arrangements can differ across markets, programs, and periods, so platform percentage, affiliate commission, and any other fixed per-order assumption remain editable. Use verified current terms for the scenario; the default numbers exist only to illustrate how the calculation behaves.",
    ],
    whoShouldUse:
      "TikTok Shop merchants planning creator collaborations, live offers, or general shop sales can use this tool to compare fee scenarios before calculating full profit. It helps sellers separate platform and affiliate deductions from product and fulfillment expenses while reviewing commission choices or average order value.",
    howToCalculate: [
      "Multiply gross sales by the platform percentage to estimate the platform fee. If an affiliate or creator commission is being modeled, multiply gross sales by that entered percentage separately. Multiply any additional fixed per-order assumption by order count. Adding these deductions gives total estimated fees, which can then be subtracted from gross sales to show proceeds after the chosen fees alone.",
      "Divide total fees by gross sales for an effective rate and by order count for estimated fee per order. Those outputs support comparisons between scenarios with different commission arrangements or average order values. When sales or orders are zero, the corresponding ratio is undefined and the tool displays N/A rather than generating a misleading result. It does not infer fees or retrieve account data.",
    ],
    whyItMatters: [
      "Creator commission and platform charges can be a meaningful portion of revenue in a social-commerce offer, especially when discounts, free shipping, or samples are also used to attract customers. Modeling these fees before committing inventory or campaign budget helps a seller decide whether a planned selling price and commission structure can leave room for fulfillment and expected profit.",
    ],
    howToUse: [
      "Enter gross sales and number of orders for the event, period, or offer you want to model.",
      "Enter a platform fee percentage consistent with the relevant current terms.",
      "Add affiliate commission and optional fixed per-order cost only when those assumptions apply.",
      "Review total estimated fees, proceeds after fees, fee per order, and effective rate before calculating full profit.",
    ],
    commonMistakes: [
      "Adding affiliate commission when a sale does not involve it, or omitting it when it does.",
      "Interpreting proceeds after selected fees as profit before stock, shipping, ads, and returns.",
      "Assuming platform and campaign terms are identical across markets, categories, or promotion periods.",
    ],
    affiliateMessage:
      "Selling through social commerce? Compare tools for creator, campaign, and product planning.",
  },
];

export const homeFaqs: FAQItem[] = [
  {
    question: "Are Ecom Profit Tools calculators free to use?",
    answer:
      "Yes. The calculators are free, work in your browser, and do not require an account.",
  },
  {
    question: "Do you store the numbers I enter?",
    answer:
      "No. The current calculators run in your browser and do not send entries to a database.",
  },
  {
    question: "Are the calculations financial or tax advice?",
    answer:
      "No. Results are general estimates for education and planning. Verify rates and costs, and consult qualified advisers when necessary.",
  },
  {
    question: "Which calculator should an ecommerce seller start with?",
    answer:
      "Use a marketplace-specific profit tool when selling on Shopify, Etsy, or Amazon FBA. Use margin, ROI, ROAS, and break-even tools for broader pricing and performance decisions.",
  },
];

export function getCalculator(slug: CalculatorSlug): CalculatorData {
  const calculator = calculators.find((item) => item.slug === slug);

  if (!calculator) {
    throw new Error(`Calculator data was not found for ${slug}.`);
  }

  return calculator;
}
