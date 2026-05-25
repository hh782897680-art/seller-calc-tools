export type CalculatorSlug =
  | "shopify-profit-calculator"
  | "etsy-fee-calculator"
  | "amazon-fba-profit-calculator"
  | "profit-margin-calculator"
  | "markup-calculator"
  | "roi-calculator"
  | "roas-calculator"
  | "break-even-calculator";

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
  howToCalculate: string[];
  whyItMatters: string[];
  howToUse: string[];
  affiliateMessage: string;
}

export const calculators: CalculatorData[] = [
  {
    slug: "shopify-profit-calculator",
    name: "Shopify Profit Calculator",
    category: "Ecommerce Profit",
    shortDescription:
      "Estimate Shopify store revenue, fees, advertising cost, net profit, margin, ROI, and break-even ROAS.",
    seoTitle: "Shopify Profit Calculator - Free Store Profit Tool | SellerCalcTools",
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
    affiliateMessage:
      "Want to start or optimize your Shopify store? Compare ecommerce tools here.",
  },
  {
    slug: "etsy-fee-calculator",
    name: "Etsy Fee Calculator",
    category: "Marketplace Fees",
    shortDescription:
      "Estimate Etsy transaction, payment processing, listing, and optional offsite ad fees alongside your net profit.",
    seoTitle: "Etsy Fee Calculator - Estimate Seller Profit | SellerCalcTools",
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
    affiliateMessage:
      "Selling on Etsy? Discover tools to improve your store workflow.",
  },
  {
    slug: "amazon-fba-profit-calculator",
    name: "Amazon FBA Profit Calculator",
    category: "Marketplace Profit",
    shortDescription:
      "Model Amazon FBA revenue, referral and fulfillment fees, inventory costs, advertising, margin, and ROI.",
    seoTitle: "Amazon FBA Profit Calculator - Free Seller Tool | SellerCalcTools",
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
    affiliateMessage:
      "Need better Amazon seller tools? Compare research and profit tools here.",
  },
  {
    slug: "profit-margin-calculator",
    name: "Profit Margin Calculator",
    category: "Business Fundamentals",
    shortDescription:
      "Turn revenue and cost into gross profit, profit margin, and markup for fast pricing analysis.",
    seoTitle: "Profit Margin Calculator for Sellers | SellerCalcTools",
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
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "markup-calculator",
    name: "Markup Calculator",
    category: "Pricing",
    shortDescription:
      "Set a markup above cost and see the resulting selling price, dollar profit, and profit margin.",
    seoTitle: "Markup Calculator - Price Products from Cost | SellerCalcTools",
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
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "roi-calculator",
    name: "ROI Calculator",
    category: "Performance",
    shortDescription:
      "Measure net return and return on investment for inventory, software, promotions, or business projects.",
    seoTitle: "ROI Calculator - Return on Investment Tool | SellerCalcTools",
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
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "roas-calculator",
    name: "ROAS Calculator",
    category: "Advertising",
    shortDescription:
      "Calculate return on ad spend and revenue after advertising cost for ecommerce campaign review.",
    seoTitle: "ROAS Calculator for Ecommerce Ads | SellerCalcTools",
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
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
  {
    slug: "break-even-calculator",
    name: "Break Even Calculator",
    category: "Planning",
    shortDescription:
      "Find contribution margin, units needed to recover fixed costs, and the revenue required to break even.",
    seoTitle: "Break Even Calculator for Small Business | SellerCalcTools",
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
    affiliateMessage:
      "Need better tools for your business? Explore recommended seller tools.",
  },
];

export const homeFaqs: FAQItem[] = [
  {
    question: "Are SellerCalcTools calculators free to use?",
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
