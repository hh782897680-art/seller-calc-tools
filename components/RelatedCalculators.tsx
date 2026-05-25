import CalculatorCard from "@/components/CalculatorCard";
import { getCalculator, type CalculatorSlug } from "@/data/calculators";

interface RelatedCalculatorsProps {
  slugs: CalculatorSlug[];
}

export default function RelatedCalculators({ slugs }: RelatedCalculatorsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {slugs.map((slug) => (
        <CalculatorCard calculator={getCalculator(slug)} key={slug} />
      ))}
    </div>
  );
}
