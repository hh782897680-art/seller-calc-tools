export type CalculatedRate = number | null;

function divideOrNull(numerator: number, denominator: number): CalculatedRate {
  return denominator === 0 ? null : numerator / denominator;
}

export interface ShopifyProfitInput {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  adCost: number;
  otherCost: number;
  paymentFeePercentage: number;
  fixedTransactionFee: number;
  numberOfOrders: number;
}

export interface ShopifyProfitResult {
  revenue: number;
  totalProductCost: number;
  totalShippingCost: number;
  totalAdCost: number;
  totalFees: number;
  totalCost: number;
  netProfit: number;
  profitMargin: CalculatedRate;
  roi: CalculatedRate;
  breakEvenRoas: CalculatedRate;
}

export function calculateShopifyProfit(
  input: ShopifyProfitInput,
): ShopifyProfitResult {
  const revenue = input.sellingPrice * input.numberOfOrders;
  const totalProductCost = input.productCost * input.numberOfOrders;
  const totalShippingCost = input.shippingCost * input.numberOfOrders;
  const totalAdCost = input.adCost * input.numberOfOrders;
  const totalOtherCost = input.otherCost * input.numberOfOrders;
  const totalFees =
    revenue * (input.paymentFeePercentage / 100) +
    input.fixedTransactionFee * input.numberOfOrders;
  const totalCost =
    totalProductCost +
    totalShippingCost +
    totalAdCost +
    totalOtherCost +
    totalFees;
  const netProfit = revenue - totalCost;

  return {
    revenue,
    totalProductCost,
    totalShippingCost,
    totalAdCost,
    totalFees,
    totalCost,
    netProfit,
    profitMargin: divideOrNull(netProfit * 100, revenue),
    roi: divideOrNull(netProfit * 100, totalCost),
    breakEvenRoas: divideOrNull(revenue, totalAdCost),
  };
}

export interface EtsyFeeInput {
  itemPrice: number;
  shippingCharged: number;
  itemCost: number;
  shippingCost: number;
  listingFee: number;
  transactionFeePercentage: number;
  processingPercentage: number;
  processingFixedFee: number;
  offsiteAdsFeePercentage: number;
}

export interface EtsyFeeResult {
  totalRevenue: number;
  transactionFee: number;
  processingFee: number;
  offsiteAdsFee: number;
  totalFees: number;
  totalCost: number;
  netProfit: number;
  profitMargin: CalculatedRate;
}

export function calculateEtsyFee(input: EtsyFeeInput): EtsyFeeResult {
  const totalRevenue = input.itemPrice + input.shippingCharged;
  const transactionFee =
    totalRevenue * (input.transactionFeePercentage / 100);
  const processingFee =
    totalRevenue * (input.processingPercentage / 100) +
    input.processingFixedFee;
  const offsiteAdsFee =
    totalRevenue * (input.offsiteAdsFeePercentage / 100);
  const totalFees =
    input.listingFee + transactionFee + processingFee + offsiteAdsFee;
  const totalCost = input.itemCost + input.shippingCost + totalFees;
  const netProfit = totalRevenue - totalCost;

  return {
    totalRevenue,
    transactionFee,
    processingFee,
    offsiteAdsFee,
    totalFees,
    totalCost,
    netProfit,
    profitMargin: divideOrNull(netProfit * 100, totalRevenue),
  };
}

export interface AmazonFbaProfitInput {
  sellingPrice: number;
  productCost: number;
  referralFeePercentage: number;
  fulfillmentFee: number;
  storageCost: number;
  shippingToAmazon: number;
  adCost: number;
  otherCost: number;
  unitsSold: number;
}

export interface AmazonFbaProfitResult {
  revenue: number;
  referralFees: number;
  fbaFees: number;
  totalCosts: number;
  netProfit: number;
  profitPerUnit: CalculatedRate;
  profitMargin: CalculatedRate;
  roi: CalculatedRate;
}

export function calculateAmazonFbaProfit(
  input: AmazonFbaProfitInput,
): AmazonFbaProfitResult {
  const revenue = input.sellingPrice * input.unitsSold;
  const referralFees = revenue * (input.referralFeePercentage / 100);
  const fbaFees = input.fulfillmentFee * input.unitsSold;
  const inventoryAndOperatingCosts =
    (input.productCost +
      input.storageCost +
      input.shippingToAmazon +
      input.adCost +
      input.otherCost) *
    input.unitsSold;
  const totalCosts = referralFees + fbaFees + inventoryAndOperatingCosts;
  const netProfit = revenue - totalCosts;

  return {
    revenue,
    referralFees,
    fbaFees,
    totalCosts,
    netProfit,
    profitPerUnit: divideOrNull(netProfit, input.unitsSold),
    profitMargin: divideOrNull(netProfit * 100, revenue),
    roi: divideOrNull(netProfit * 100, totalCosts),
  };
}

export interface ProfitMarginInput {
  revenue: number;
  cost: number;
}

export function calculateProfitMargin(input: ProfitMarginInput) {
  const grossProfit = input.revenue - input.cost;

  return {
    grossProfit,
    profitMargin: divideOrNull(grossProfit * 100, input.revenue),
    markup: divideOrNull(grossProfit * 100, input.cost),
  };
}

export interface MarkupInput {
  cost: number;
  markupPercentage: number;
}

export function calculateMarkup(input: MarkupInput) {
  const sellingPrice = input.cost * (1 + input.markupPercentage / 100);
  const profit = sellingPrice - input.cost;

  return {
    sellingPrice,
    profit,
    profitMargin: divideOrNull(profit * 100, sellingPrice),
  };
}

export interface RoiInput {
  investmentCost: number;
  returnAmount: number;
}

export function calculateRoi(input: RoiInput) {
  const netReturn = input.returnAmount - input.investmentCost;

  return {
    netReturn,
    roiPercentage: divideOrNull(netReturn * 100, input.investmentCost),
  };
}

export interface RoasInput {
  adSpend: number;
  revenueFromAds: number;
}

export function calculateRoas(input: RoasInput) {
  return {
    roas: divideOrNull(input.revenueFromAds, input.adSpend),
    revenue: input.revenueFromAds,
    adSpend: input.adSpend,
    profitBeforeProductCost: input.revenueFromAds - input.adSpend,
  };
}

export interface BreakEvenInput {
  fixedCosts: number;
  pricePerUnit: number;
  variableCostPerUnit: number;
}

export function calculateBreakEven(input: BreakEvenInput) {
  const contributionMarginPerUnit =
    input.pricePerUnit - input.variableCostPerUnit;
  const canBreakEven = contributionMarginPerUnit > 0;
  const breakEvenUnits = canBreakEven
    ? input.fixedCosts / contributionMarginPerUnit
    : null;
  const breakEvenRevenue =
    breakEvenUnits === null ? null : breakEvenUnits * input.pricePerUnit;

  return {
    contributionMarginPerUnit,
    breakEvenUnits,
    breakEvenRevenue,
  };
}

export interface PaymentFeeInput {
  amountReceived: number;
  feePercentage: number;
  fixedFee: number;
}

function calculatePaymentFee(input: PaymentFeeInput) {
  const fee =
    input.amountReceived * (input.feePercentage / 100) + input.fixedFee;
  const netAmount = input.amountReceived - fee;

  return {
    fee,
    netAmount,
    feeRate: divideOrNull(fee * 100, input.amountReceived),
  };
}

export function calculatePayPalFee(input: PaymentFeeInput) {
  return calculatePaymentFee(input);
}

export function calculateStripeFee(input: PaymentFeeInput) {
  return calculatePaymentFee(input);
}

export interface EbayFeeInput {
  salePrice: number;
  shippingCharged: number;
  itemCost: number;
  shippingCost: number;
  finalValueFeePercentage: number;
  fixedOrderFee: number;
  promotedListingAdRate: number;
}

export function calculateEbayFee(input: EbayFeeInput) {
  const totalRevenue = input.salePrice + input.shippingCharged;
  const ebayFee =
    totalRevenue * (input.finalValueFeePercentage / 100) +
    input.fixedOrderFee;
  const promotedListingFee =
    totalRevenue * (input.promotedListingAdRate / 100);
  const totalCost =
    input.itemCost + input.shippingCost + ebayFee + promotedListingFee;
  const netProfit = totalRevenue - totalCost;

  return {
    totalRevenue,
    ebayFee,
    promotedListingFee,
    totalCost,
    netProfit,
    profitMargin: divideOrNull(netProfit * 100, totalRevenue),
  };
}

export interface TikTokShopProfitInput {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  tiktokFeePercentage: number;
  adCost: number;
  otherCost: number;
  unitsSold: number;
}

export function calculateTikTokShopProfit(input: TikTokShopProfitInput) {
  const revenue = input.sellingPrice * input.unitsSold;
  const tiktokFees = revenue * (input.tiktokFeePercentage / 100);
  const totalCost =
    input.productCost * input.unitsSold +
    input.shippingCost * input.unitsSold +
    tiktokFees +
    input.adCost +
    input.otherCost;
  const netProfit = revenue - totalCost;

  return {
    revenue,
    tiktokFees,
    totalCost,
    netProfit,
    profitPerUnit: divideOrNull(netProfit, input.unitsSold),
    profitMargin: divideOrNull(netProfit * 100, revenue),
    roi: divideOrNull(netProfit * 100, totalCost),
  };
}

export interface WooCommerceProfitInput {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  paymentFeePercentage: number;
  fixedTransactionFee: number;
  pluginOrHostingCost: number;
  adCost: number;
  unitsSold: number;
}

export function calculateWooCommerceProfit(input: WooCommerceProfitInput) {
  const revenue = input.sellingPrice * input.unitsSold;
  const paymentFees =
    revenue * (input.paymentFeePercentage / 100) +
    input.fixedTransactionFee * input.unitsSold;
  const totalCost =
    input.productCost * input.unitsSold +
    input.shippingCost * input.unitsSold +
    paymentFees +
    input.pluginOrHostingCost +
    input.adCost;
  const netProfit = revenue - totalCost;

  return {
    revenue,
    paymentFees,
    totalCost,
    netProfit,
    profitPerUnit: divideOrNull(netProfit, input.unitsSold),
    profitMargin: divideOrNull(netProfit * 100, revenue),
    roi: divideOrNull(netProfit * 100, totalCost),
  };
}

export interface ShopifyFeeInput {
  totalSales: number;
  numberOfOrders: number;
  paymentFeePercentage: number;
  fixedTransactionFee: number;
  thirdPartyTransactionFeePercentage: number;
}

export function calculateShopifyFee(input: ShopifyFeeInput) {
  const paymentProcessingFee =
    input.totalSales * (input.paymentFeePercentage / 100) +
    input.fixedTransactionFee * input.numberOfOrders;
  const thirdPartyTransactionFee =
    input.totalSales * (input.thirdPartyTransactionFeePercentage / 100);
  const totalFees = paymentProcessingFee + thirdPartyTransactionFee;
  const estimatedPayout = input.totalSales - totalFees;

  return {
    totalSales: input.totalSales,
    paymentProcessingFee,
    thirdPartyTransactionFee,
    totalFees,
    estimatedPayout,
    feePerOrder: divideOrNull(totalFees, input.numberOfOrders),
    effectiveFeeRate: divideOrNull(totalFees * 100, input.totalSales),
  };
}

export interface EtsyProfitInput {
  itemPrice: number;
  shippingCharged: number;
  itemCost: number;
  shippingCost: number;
  listingFee: number;
  transactionFeePercentage: number;
  processingPercentage: number;
  processingFixedFee: number;
  offsiteAdsFeePercentage: number;
  orders: number;
}

export function calculateEtsyProfit(input: EtsyProfitInput) {
  const revenuePerOrder = input.itemPrice + input.shippingCharged;
  const totalRevenue = revenuePerOrder * input.orders;
  const productAndShippingCost =
    (input.itemCost + input.shippingCost) * input.orders;
  const listingFees = input.listingFee * input.orders;
  const transactionFees =
    totalRevenue * (input.transactionFeePercentage / 100);
  const paymentProcessingFees =
    totalRevenue * (input.processingPercentage / 100) +
    input.processingFixedFee * input.orders;
  const offsiteAdsFees =
    totalRevenue * (input.offsiteAdsFeePercentage / 100);
  const totalFees =
    listingFees + transactionFees + paymentProcessingFees + offsiteAdsFees;
  const totalCost = productAndShippingCost + totalFees;
  const netProfit = totalRevenue - totalCost;

  return {
    totalRevenue,
    listingFees,
    transactionFees,
    paymentProcessingFees,
    offsiteAdsFees,
    totalFees,
    totalCost,
    netProfit,
    profitPerOrder: divideOrNull(netProfit, input.orders),
    profitMargin: divideOrNull(netProfit * 100, totalRevenue),
  };
}

export interface AmazonReferralFeeInput {
  sellingPrice: number;
  unitsSold: number;
  referralFeePercentage: number;
  minimumReferralFee: number;
}

export function calculateAmazonReferralFee(input: AmazonReferralFeeInput) {
  const percentageFeePerUnit =
    input.sellingPrice * (input.referralFeePercentage / 100);
  const appliedFeePerUnit = Math.max(
    percentageFeePerUnit,
    input.minimumReferralFee,
  );
  const totalRevenue = input.sellingPrice * input.unitsSold;
  const totalReferralFees = appliedFeePerUnit * input.unitsSold;
  const proceedsAfterReferralFees = totalRevenue - totalReferralFees;

  return {
    totalRevenue,
    percentageFeePerUnit,
    appliedFeePerUnit,
    totalReferralFees,
    proceedsAfterReferralFees,
    effectiveFeeRate: divideOrNull(totalReferralFees * 100, totalRevenue),
  };
}

export interface EbayPromotedListingFeeInput {
  salePrice: number;
  shippingCharged: number;
  orders: number;
  promotedListingAdRate: number;
}

export function calculateEbayPromotedListingFee(
  input: EbayPromotedListingFeeInput,
) {
  const totalRevenue =
    (input.salePrice + input.shippingCharged) * input.orders;
  const promotedListingFee =
    totalRevenue * (input.promotedListingAdRate / 100);
  const proceedsAfterPromotedListingFee =
    totalRevenue - promotedListingFee;

  return {
    totalRevenue,
    promotedListingFee,
    proceedsAfterPromotedListingFee,
    feePerOrder: divideOrNull(promotedListingFee, input.orders),
    effectiveFeeRate: divideOrNull(promotedListingFee * 100, totalRevenue),
  };
}

export interface TikTokShopFeeInput {
  grossSales: number;
  orders: number;
  platformFeePercentage: number;
  affiliateCommissionPercentage: number;
  fixedFeePerOrder: number;
}

export function calculateTikTokShopFee(input: TikTokShopFeeInput) {
  const platformFee =
    input.grossSales * (input.platformFeePercentage / 100);
  const affiliateCommission =
    input.grossSales * (input.affiliateCommissionPercentage / 100);
  const fixedOrderFees = input.fixedFeePerOrder * input.orders;
  const totalFees = platformFee + affiliateCommission + fixedOrderFees;
  const proceedsAfterFees = input.grossSales - totalFees;

  return {
    grossSales: input.grossSales,
    platformFee,
    affiliateCommission,
    fixedOrderFees,
    totalFees,
    proceedsAfterFees,
    feePerOrder: divideOrNull(totalFees, input.orders),
    effectiveFeeRate: divideOrNull(totalFees * 100, input.grossSales),
  };
}
