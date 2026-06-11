import type { CalculatorSlug } from "@/data/calculators";

interface FieldGuideItem {
  label: string;
  explanation: string;
}

interface ResultGuideItem {
  label: string;
  explanation: string;
}

export interface CoreCalculatorContent {
  decisions: string[];
  inputGuide: FieldGuideItem[];
  resultGuide: ResultGuideItem[];
  lastUpdated: string;
  disclaimer: string;
}

export const coreCalculatorContent: Partial<
  Record<CalculatorSlug, CoreCalculatorContent>
> = {
  "shopify-profit-calculator": {
    decisions: [
      "Whether a product price can cover landed product cost, delivery, payment processing, paid acquisition, and other order-level expenses.",
      "How much room a store has for a discount, free-shipping offer, bundle, or higher customer acquisition cost before contribution profit becomes too narrow.",
      "Whether a campaign or product should be tested, maintained, repriced, or paused before the seller commits more inventory or advertising budget.",
    ],
    inputGuide: [
      {
        label: "Selling price",
        explanation:
          "Use the average amount collected for one order after seller-funded discounts. Do not use a list price that customers rarely pay.",
      },
      {
        label: "Product cost",
        explanation:
          "Enter landed cost per order, including the items in the order and any inbound freight, duty, labeling, or preparation allocated to them.",
      },
      {
        label: "Shipping and other costs",
        explanation:
          "Include the amount your business pays for fulfillment, postage, packaging, apps, returns allowance, or other costs that belong to an average order.",
      },
      {
        label: "Ad cost",
        explanation:
          "Use average acquisition cost per completed order for the channel or campaign being reviewed, not total account spend unless it is divided by the same orders.",
      },
      {
        label: "Payment fees and orders",
        explanation:
          "Enter the percentage and fixed processing charge that apply to your checkout, then use completed orders from the same period as the other assumptions.",
      },
    ],
    resultGuide: [
      {
        label: "Net profit",
        explanation:
          "A positive estimate means entered revenue exceeded entered costs. It is not final accounting profit if taxes, refunds, subscriptions, payroll, or overhead were omitted.",
      },
      {
        label: "Profit margin",
        explanation:
          "Use margin to compare products and scenarios with different prices. A lower margin after a promotion shows how much pricing room the offer consumed.",
      },
      {
        label: "ROI",
        explanation:
          "ROI compares estimated profit with entered cost. Review it with cash timing because inventory may be paid for well before orders are completed.",
      },
      {
        label: "Break-even ROAS",
        explanation:
          "Treat this as a planning boundary, not a campaign target. A sustainable target normally needs additional room for overhead, returns, and uncertainty.",
      },
    ],
    lastUpdated: "June 11, 2026",
    disclaimer:
      "This calculator provides an educational planning estimate and is not an official Shopify fee statement, accounting record, tax calculation, or financial recommendation. Verify payment terms, platform charges, taxes, and actual order costs in your own Shopify and provider reports.",
  },
  "etsy-fee-calculator": {
    decisions: [
      "Whether the item price and buyer-paid shipping leave enough profit after listing, transaction, payment processing, production, and delivery costs.",
      "How an Offsite Ads-attributed order, free-shipping offer, coupon, or low-priced listing changes the amount the seller keeps.",
      "Whether a physical, vintage, supply, or digital listing should be repriced, bundled, or reviewed for production and fulfillment efficiency.",
    ],
    inputGuide: [
      {
        label: "Item price and shipping charged",
        explanation:
          "Enter what the buyer pays for the item and shipping separately. The calculator combines them as collected order revenue for the modeled fee base.",
      },
      {
        label: "Item and shipping cost",
        explanation:
          "Item cost should include materials, acquisition, packaging, and labor allowances that belong to the order. Shipping cost is what the seller actually pays.",
      },
      {
        label: "Listing and transaction fees",
        explanation:
          "Use the listing amount and transaction percentage currently applicable to your shop. Account for renewals separately when one sale requires more than one listing cycle.",
      },
      {
        label: "Payment processing",
        explanation:
          "Enter the percentage and fixed component shown for the seller's country and payment setup; these terms are not identical in every market.",
      },
      {
        label: "Offsite Ads fee",
        explanation:
          "Use zero for an ordinary scenario and the applicable percentage only when modeling an attributed Offsite Ads order.",
      },
    ],
    resultGuide: [
      {
        label: "Total fees",
        explanation:
          "Compare this with the payment account for completed orders. Differences may come from country-specific, tax, currency, regulatory, renewal, or advertising charges.",
      },
      {
        label: "Net profit",
        explanation:
          "This is the amount left after the entered order costs. It can still overstate profit when maker time, returns, packaging, or business overhead are missing.",
      },
      {
        label: "Profit margin",
        explanation:
          "Use margin to compare a regular order with discounted, free-shipping, and Offsite Ads cases. A popular listing can still be weak if its margin is too narrow.",
      },
    ],
    lastUpdated: "June 11, 2026",
    disclaimer:
      "This tool is an independent educational estimate, not an official Etsy calculator or fee quote. Etsy fees and payment terms can vary by country, currency, account, advertising attribution, tax treatment, and policy. Confirm current charges in Etsy's official documentation and your Payment account.",
  },
  "amazon-fba-profit-calculator": {
    decisions: [
      "Whether an FBA SKU supports enough per-unit profit, margin, and ROI after referral, fulfillment, landed inventory, storage, inbound freight, and advertising costs.",
      "Whether a supplier quote, packaging change, size tier, price adjustment, or higher PPC cost improves or weakens the product economics.",
      "Whether a seller should launch, reorder, reduce exposure, or investigate a cost line before committing additional working capital.",
    ],
    inputGuide: [
      {
        label: "Selling price and units sold",
        explanation:
          "Use the expected price after coupons and promotions, then enter units for the same period represented by ad and storage assumptions.",
      },
      {
        label: "Product and inbound cost",
        explanation:
          "Product cost should be landed per unit. Add freight, duty, inspection, labels, and preparation where they are not already included.",
      },
      {
        label: "Referral and fulfillment fees",
        explanation:
          "Use the current category percentage and SKU-specific FBA amount for the correct marketplace, dimensions, weight, and size tier.",
      },
      {
        label: "Storage and advertising",
        explanation:
          "Convert storage and PPC into realistic per-unit averages. Model launch and mature advertising separately when their costs differ materially.",
      },
      {
        label: "Other cost",
        explanation:
          "Use this field for a per-unit allowance such as returns, removals, coupons, prep, or other costs not represented elsewhere.",
      },
    ],
    resultGuide: [
      {
        label: "Profit per unit",
        explanation:
          "Use this to compare SKUs and supplier scenarios. A small positive amount may not provide enough room for returns, storage changes, or price competition.",
      },
      {
        label: "Profit margin",
        explanation:
          "Margin shows resilience relative to sales. Stress-test a lower price, higher PPC cost, and higher fulfillment fee before relying on the base result.",
      },
      {
        label: "ROI",
        explanation:
          "ROI helps compare the return on costs entered, but it does not show inventory age, payment timing, or how long cash remains tied up.",
      },
    ],
    lastUpdated: "June 11, 2026",
    disclaimer:
      "This independent calculator is for educational planning and is not affiliated with Amazon or a substitute for Seller Central reports. Referral, FBA, storage, inbound, advertising, return, and other charges vary by SKU, marketplace, program, and date. Verify material decisions with current Amazon tools and account data.",
  },
  "profit-margin-calculator": {
    decisions: [
      "Whether the revenue and cost assigned to a product, order group, channel, or period produce a positive profit and an acceptable margin.",
      "How a price increase, supplier saving, shipping change, discount, return allowance, or additional fee affects the share of revenue the business keeps.",
      "Which products or channels deserve deeper review when their dollar profit looks reasonable but their margin is weak.",
    ],
    inputGuide: [
      {
        label: "Revenue",
        explanation:
          "Use net sales for the scope being reviewed: customer revenue after seller-funded discounts and refunded sales, with taxes handled consistently.",
      },
      {
        label: "Cost",
        explanation:
          "Include all costs relevant to that same scope. For product contribution this may be variable cost; for business net margin it should also include allocated operating expenses.",
      },
    ],
    resultGuide: [
      {
        label: "Profit",
        explanation:
          "Profit is revenue minus entered cost. A positive number is only as complete as the cost categories included in the input.",
      },
      {
        label: "Profit margin",
        explanation:
          "Margin expresses profit as a percentage of revenue, making differently priced products easier to compare. There is no universal good margin for every category.",
      },
      {
        label: "Markup",
        explanation:
          "Markup compares profit with cost, not revenue. Do not use margin and markup interchangeably when setting prices.",
      },
    ],
    lastUpdated: "June 11, 2026",
    disclaimer:
      "This calculator is a general educational tool. It does not determine whether a margin is commercially sufficient and does not replace bookkeeping, tax advice, or a complete profit and loss statement. Use consistent revenue and cost definitions and reconcile estimates with actual records.",
  },
  "roas-calculator": {
    decisions: [
      "How much tracked revenue an advertising campaign generated for each dollar of ad spend under one defined attribution method.",
      "Whether reported campaign efficiency is above a margin-based break-even threshold before the seller increases budget.",
      "Which campaign, product, audience, or period should be investigated when revenue grows but store-level contribution profit does not.",
    ],
    inputGuide: [
      {
        label: "Ad spend",
        explanation:
          "Use spend from one campaign, channel, or clearly defined period. Include related fees or creator costs separately if they are part of the acquisition decision.",
      },
      {
        label: "Revenue from ads",
        explanation:
          "Use revenue attributed under a consistent window and source. Avoid mixing gross platform revenue with net store revenue or adding overlapping channel claims.",
      },
    ],
    resultGuide: [
      {
        label: "ROAS",
        explanation:
          "A 4.00x result means four dollars of attributed revenue per advertising dollar. It does not mean four dollars of profit.",
      },
      {
        label: "Revenue less ad spend",
        explanation:
          "This amount still must cover product, fulfillment, payment, marketplace, discount, return, and operating costs before net profit exists.",
      },
      {
        label: "Decision threshold",
        explanation:
          "Compare actual ROAS with a target derived from contribution margin. Keep a buffer above mathematical break even for overhead and measurement uncertainty.",
      },
    ],
    lastUpdated: "June 11, 2026",
    disclaimer:
      "ROAS is an advertising revenue ratio, not a profit calculation or guarantee of incremental sales. Attribution systems can double count or misassign revenue. Use this estimate with store-level profit, customer acquisition cost, margin, and actual order data before changing campaign budgets.",
  },
  "break-even-calculator": {
    decisions: [
      "How many units and how much sales revenue are required for unit contribution to recover a defined amount of fixed cost.",
      "Whether a launch, equipment purchase, creative project, software commitment, or other upfront expense is realistic at expected volume.",
      "How price, variable cost, marketplace fees, fulfillment, or acquisition cost must change when the current scenario has no workable break-even point.",
    ],
    inputGuide: [
      {
        label: "Fixed costs",
        explanation:
          "Enter costs committed for the modeled launch or period that do not normally increase with each additional unit, such as setup, photography, or base software.",
      },
      {
        label: "Price per unit",
        explanation:
          "Use the amount collected per unit after expected seller-funded discounts, using the same product and currency as the cost input.",
      },
      {
        label: "Variable cost per unit",
        explanation:
          "Include landed product cost, fulfillment, payment and marketplace fees, packaging, shipping subsidy, and expected per-sale advertising or return cost.",
      },
    ],
    resultGuide: [
      {
        label: "Contribution margin per unit",
        explanation:
          "This is the amount one additional sale contributes toward fixed cost. If it is zero or negative, more volume cannot create break even under the entered assumptions.",
      },
      {
        label: "Break-even units",
        explanation:
          "Round a fractional result up to the next whole sellable unit. Treat the number as a minimum modeled threshold, not a sales forecast.",
      },
      {
        label: "Break-even revenue",
        explanation:
          "This converts required units into sales value. Actual break even can move when product mix, returns, discounts, fees, or unit costs change.",
      },
    ],
    lastUpdated: "June 11, 2026",
    disclaimer:
      "This calculator provides a simplified planning estimate based on constant price and cost assumptions. It does not forecast demand or account automatically for taxes, financing, inventory timing, stepped costs, product mix, or changing fees. Validate significant investments with complete financial records.",
  },
};
