import { describe, expect, it } from "vitest";
import * as calculators from "./calc";

const testedCalculatorFunctions = [
  "calculateAmazonFbaProfit",
  "calculateBreakEven",
  "calculateEbayFee",
  "calculateEtsyFee",
  "calculateMarkup",
  "calculatePayPalFee",
  "calculateProfitMargin",
  "calculateRoas",
  "calculateRoi",
  "calculateShopifyProfit",
  "calculateStripeFee",
  "calculateTikTokShopProfit",
  "calculateWooCommerceProfit",
];

describe("calculator test coverage guard", () => {
  it("lists every exported calculator function with a corresponding test suite", () => {
    const exportedCalculatorFunctions = Object.keys(calculators)
      .filter((name) => name.startsWith("calculate"))
      .sort();

    expect(exportedCalculatorFunctions).toEqual(
      [...testedCalculatorFunctions].sort(),
    );
  });
});

describe("calculateShopifyProfit", () => {
  it("calculates revenue, selling costs, profit, and rates", () => {
    const result = calculators.calculateShopifyProfit({
      sellingPrice: 50,
      productCost: 18,
      shippingCost: 4,
      adCost: 5,
      otherCost: 2,
      paymentFeePercentage: 2.9,
      fixedTransactionFee: 0.3,
      numberOfOrders: 10,
    });

    expect(result.revenue).toBeCloseTo(500);
    expect(result.totalProductCost).toBeCloseTo(180);
    expect(result.totalShippingCost).toBeCloseTo(40);
    expect(result.totalAdCost).toBeCloseTo(50);
    expect(result.totalFees).toBeCloseTo(17.5);
    expect(result.totalCost).toBeCloseTo(307.5);
    expect(result.netProfit).toBeCloseTo(192.5);
    expect(result.profitMargin).toBeCloseTo(38.5);
    expect(result.roi).toBeCloseTo(62.601626);
    expect(result.breakEvenRoas).toBeCloseTo(10);
  });

  it("handles zero orders and zero denominators without throwing", () => {
    const input = {
      sellingPrice: 0,
      productCost: 0,
      shippingCost: 0,
      adCost: 0,
      otherCost: 0,
      paymentFeePercentage: 0,
      fixedTransactionFee: 0,
      numberOfOrders: 0,
    };

    expect(() => calculators.calculateShopifyProfit(input)).not.toThrow();
    expect(calculators.calculateShopifyProfit(input)).toEqual({
      revenue: 0,
      totalProductCost: 0,
      totalShippingCost: 0,
      totalAdCost: 0,
      totalFees: 0,
      totalCost: 0,
      netProfit: 0,
      profitMargin: null,
      roi: null,
      breakEvenRoas: null,
    });
  });
});

describe("calculateEtsyFee", () => {
  it("calculates marketplace fees and profit", () => {
    const result = calculators.calculateEtsyFee({
      itemPrice: 40,
      shippingCharged: 5,
      itemCost: 12,
      shippingCost: 4,
      listingFee: 0.2,
      transactionFeePercentage: 6.5,
      processingPercentage: 3,
      processingFixedFee: 0.25,
      offsiteAdsFeePercentage: 15,
    });

    expect(result.totalRevenue).toBeCloseTo(45);
    expect(result.transactionFee).toBeCloseTo(2.925);
    expect(result.processingFee).toBeCloseTo(1.6);
    expect(result.offsiteAdsFee).toBeCloseTo(6.75);
    expect(result.totalFees).toBeCloseTo(11.475);
    expect(result.totalCost).toBeCloseTo(27.475);
    expect(result.netProfit).toBeCloseTo(17.525);
    expect(result.profitMargin).toBeCloseTo(38.944444);
  });

  it("handles a zero-value sale without attempting an invalid margin", () => {
    const input = {
      itemPrice: 0,
      shippingCharged: 0,
      itemCost: 0,
      shippingCost: 0,
      listingFee: 0,
      transactionFeePercentage: 0,
      processingPercentage: 0,
      processingFixedFee: 0,
      offsiteAdsFeePercentage: 0,
    };

    expect(() => calculators.calculateEtsyFee(input)).not.toThrow();
    expect(calculators.calculateEtsyFee(input).profitMargin).toBeNull();
    expect(calculators.calculateEtsyFee(input).netProfit).toBeCloseTo(0);
  });
});

describe("calculateAmazonFbaProfit", () => {
  it("calculates FBA costs and per-unit profit", () => {
    const result = calculators.calculateAmazonFbaProfit({
      sellingPrice: 60,
      productCost: 20,
      referralFeePercentage: 15,
      fulfillmentFee: 5,
      storageCost: 1,
      shippingToAmazon: 2,
      adCost: 6,
      otherCost: 1,
      unitsSold: 5,
    });

    expect(result.revenue).toBeCloseTo(300);
    expect(result.referralFees).toBeCloseTo(45);
    expect(result.fbaFees).toBeCloseTo(25);
    expect(result.totalCosts).toBeCloseTo(220);
    expect(result.netProfit).toBeCloseTo(80);
    expect(result.profitPerUnit).toBeCloseTo(16);
    expect(result.profitMargin).toBeCloseTo(26.666667);
    expect(result.roi).toBeCloseTo(36.363636);
  });

  it("returns null rates for zero units instead of throwing", () => {
    const input = {
      sellingPrice: 0,
      productCost: 0,
      referralFeePercentage: 0,
      fulfillmentFee: 0,
      storageCost: 0,
      shippingToAmazon: 0,
      adCost: 0,
      otherCost: 0,
      unitsSold: 0,
    };

    expect(() => calculators.calculateAmazonFbaProfit(input)).not.toThrow();
    const result = calculators.calculateAmazonFbaProfit(input);
    expect(result.netProfit).toBeCloseTo(0);
    expect(result.profitPerUnit).toBeNull();
    expect(result.profitMargin).toBeNull();
    expect(result.roi).toBeNull();
  });
});

describe("calculateProfitMargin", () => {
  it("calculates gross profit, margin, and markup", () => {
    const result = calculators.calculateProfitMargin({
      revenue: 250,
      cost: 150,
    });

    expect(result.grossProfit).toBeCloseTo(100);
    expect(result.profitMargin).toBeCloseTo(40);
    expect(result.markup).toBeCloseTo(66.666667);
  });

  it("does not throw when both margin denominators are zero", () => {
    expect(() =>
      calculators.calculateProfitMargin({ revenue: 0, cost: 0 }),
    ).not.toThrow();
    expect(calculators.calculateProfitMargin({ revenue: 0, cost: 0 })).toEqual({
      grossProfit: 0,
      profitMargin: null,
      markup: null,
    });
  });
});

describe("calculateMarkup", () => {
  it("calculates the selling price and resulting margin", () => {
    const result = calculators.calculateMarkup({
      cost: 80,
      markupPercentage: 50,
    });

    expect(result.sellingPrice).toBeCloseTo(120);
    expect(result.profit).toBeCloseTo(40);
    expect(result.profitMargin).toBeCloseTo(33.333333);
  });

  it("handles a zero selling price without throwing", () => {
    expect(() =>
      calculators.calculateMarkup({ cost: 0, markupPercentage: 0 }),
    ).not.toThrow();
    expect(
      calculators.calculateMarkup({ cost: 0, markupPercentage: 0 }),
    ).toEqual({
      sellingPrice: 0,
      profit: 0,
      profitMargin: null,
    });
  });
});

describe("calculateRoi", () => {
  it("calculates investment return percentage", () => {
    const result = calculators.calculateRoi({
      investmentCost: 400,
      returnAmount: 540,
    });

    expect(result.netReturn).toBeCloseTo(140);
    expect(result.roiPercentage).toBeCloseTo(35);
  });

  it("does not throw when investment cost is zero", () => {
    expect(() =>
      calculators.calculateRoi({ investmentCost: 0, returnAmount: 0 }),
    ).not.toThrow();
    expect(
      calculators.calculateRoi({ investmentCost: 0, returnAmount: 0 }),
    ).toEqual({
      netReturn: 0,
      roiPercentage: null,
    });
  });
});

describe("calculateRoas", () => {
  it("calculates advertising return and pre-product-cost profit", () => {
    const result = calculators.calculateRoas({
      adSpend: 250,
      revenueFromAds: 1000,
    });

    expect(result.roas).toBeCloseTo(4);
    expect(result.revenue).toBeCloseTo(1000);
    expect(result.adSpend).toBeCloseTo(250);
    expect(result.profitBeforeProductCost).toBeCloseTo(750);
  });

  it("returns a null ratio when advertising spend is zero", () => {
    expect(() =>
      calculators.calculateRoas({ adSpend: 0, revenueFromAds: 0 }),
    ).not.toThrow();
    expect(
      calculators.calculateRoas({ adSpend: 0, revenueFromAds: 0 }),
    ).toEqual({
      roas: null,
      revenue: 0,
      adSpend: 0,
      profitBeforeProductCost: 0,
    });
  });
});

describe("calculateBreakEven", () => {
  it("calculates break-even units and revenue", () => {
    const result = calculators.calculateBreakEven({
      fixedCosts: 1000,
      pricePerUnit: 40,
      variableCostPerUnit: 15,
    });

    expect(result.contributionMarginPerUnit).toBeCloseTo(25);
    expect(result.breakEvenUnits).toBeCloseTo(40);
    expect(result.breakEvenRevenue).toBeCloseTo(1600);
  });

  it("does not divide by zero when a sale has no contribution margin", () => {
    const input = {
      fixedCosts: 0,
      pricePerUnit: 0,
      variableCostPerUnit: 0,
    };

    expect(() => calculators.calculateBreakEven(input)).not.toThrow();
    expect(calculators.calculateBreakEven(input)).toEqual({
      contributionMarginPerUnit: 0,
      breakEvenUnits: null,
      breakEvenRevenue: null,
    });
  });
});

describe("calculatePayPalFee", () => {
  it("calculates payment fees and received amount", () => {
    const result = calculators.calculatePayPalFee({
      amountReceived: 100,
      feePercentage: 3.49,
      fixedFee: 0.49,
    });

    expect(result.fee).toBeCloseTo(3.98);
    expect(result.netAmount).toBeCloseTo(96.02);
    expect(result.feeRate).toBeCloseTo(3.98);
  });

  it("returns a null effective fee rate for a zero payment", () => {
    const input = { amountReceived: 0, feePercentage: 0, fixedFee: 0 };

    expect(() => calculators.calculatePayPalFee(input)).not.toThrow();
    expect(calculators.calculatePayPalFee(input)).toEqual({
      fee: 0,
      netAmount: 0,
      feeRate: null,
    });
  });
});

describe("calculateStripeFee", () => {
  it("calculates payment fees and received amount", () => {
    const result = calculators.calculateStripeFee({
      amountReceived: 100,
      feePercentage: 2.9,
      fixedFee: 0.3,
    });

    expect(result.fee).toBeCloseTo(3.2);
    expect(result.netAmount).toBeCloseTo(96.8);
    expect(result.feeRate).toBeCloseTo(3.2);
  });

  it("returns a null effective fee rate for a zero payment", () => {
    const input = { amountReceived: 0, feePercentage: 0, fixedFee: 0 };

    expect(() => calculators.calculateStripeFee(input)).not.toThrow();
    expect(calculators.calculateStripeFee(input)).toEqual({
      fee: 0,
      netAmount: 0,
      feeRate: null,
    });
  });
});

describe("calculateEbayFee", () => {
  it("calculates final value, promoted listing, and profit amounts", () => {
    const result = calculators.calculateEbayFee({
      salePrice: 80,
      shippingCharged: 10,
      itemCost: 25,
      shippingCost: 8,
      finalValueFeePercentage: 13.25,
      fixedOrderFee: 0.3,
      promotedListingAdRate: 4,
    });

    expect(result.totalRevenue).toBeCloseTo(90);
    expect(result.ebayFee).toBeCloseTo(12.225);
    expect(result.promotedListingFee).toBeCloseTo(3.6);
    expect(result.totalCost).toBeCloseTo(48.825);
    expect(result.netProfit).toBeCloseTo(41.175);
    expect(result.profitMargin).toBeCloseTo(45.75);
  });

  it("returns null margin for a zero-value sale without throwing", () => {
    const input = {
      salePrice: 0,
      shippingCharged: 0,
      itemCost: 0,
      shippingCost: 0,
      finalValueFeePercentage: 0,
      fixedOrderFee: 0,
      promotedListingAdRate: 0,
    };

    expect(() => calculators.calculateEbayFee(input)).not.toThrow();
    expect(calculators.calculateEbayFee(input).netProfit).toBeCloseTo(0);
    expect(calculators.calculateEbayFee(input).profitMargin).toBeNull();
  });
});

describe("calculateTikTokShopProfit", () => {
  it("calculates marketplace profit and return rates", () => {
    const result = calculators.calculateTikTokShopProfit({
      sellingPrice: 30,
      productCost: 10,
      shippingCost: 3,
      tiktokFeePercentage: 6,
      adCost: 35,
      otherCost: 7,
      unitsSold: 10,
    });

    expect(result.revenue).toBeCloseTo(300);
    expect(result.tiktokFees).toBeCloseTo(18);
    expect(result.totalCost).toBeCloseTo(190);
    expect(result.netProfit).toBeCloseTo(110);
    expect(result.profitPerUnit).toBeCloseTo(11);
    expect(result.profitMargin).toBeCloseTo(36.666667);
    expect(result.roi).toBeCloseTo(57.894737);
  });

  it("returns null rates for zero units and zero costs without throwing", () => {
    const input = {
      sellingPrice: 0,
      productCost: 0,
      shippingCost: 0,
      tiktokFeePercentage: 0,
      adCost: 0,
      otherCost: 0,
      unitsSold: 0,
    };

    expect(() => calculators.calculateTikTokShopProfit(input)).not.toThrow();
    const result = calculators.calculateTikTokShopProfit(input);
    expect(result.profitPerUnit).toBeNull();
    expect(result.profitMargin).toBeNull();
    expect(result.roi).toBeNull();
  });
});

describe("calculateWooCommerceProfit", () => {
  it("calculates payment fees, profit, and rates", () => {
    const result = calculators.calculateWooCommerceProfit({
      sellingPrice: 50,
      productCost: 15,
      shippingCost: 5,
      paymentFeePercentage: 2.9,
      fixedTransactionFee: 0.3,
      pluginOrHostingCost: 10,
      adCost: 20,
      unitsSold: 4,
    });

    expect(result.revenue).toBeCloseTo(200);
    expect(result.paymentFees).toBeCloseTo(7);
    expect(result.totalCost).toBeCloseTo(117);
    expect(result.netProfit).toBeCloseTo(83);
    expect(result.profitPerUnit).toBeCloseTo(20.75);
    expect(result.profitMargin).toBeCloseTo(41.5);
    expect(result.roi).toBeCloseTo(70.940171);
  });

  it("returns null rates for zero units and zero costs without throwing", () => {
    const input = {
      sellingPrice: 0,
      productCost: 0,
      shippingCost: 0,
      paymentFeePercentage: 0,
      fixedTransactionFee: 0,
      pluginOrHostingCost: 0,
      adCost: 0,
      unitsSold: 0,
    };

    expect(() => calculators.calculateWooCommerceProfit(input)).not.toThrow();
    const result = calculators.calculateWooCommerceProfit(input);
    expect(result.profitPerUnit).toBeNull();
    expect(result.profitMargin).toBeNull();
    expect(result.roi).toBeNull();
  });
});
