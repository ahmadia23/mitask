import { Funnel } from "&/hooks/useFunnel";
import Link from "next/link";

interface BreadCrumbsProps {
  steps: Funnel[];
  currentStep: Funnel;
}

export default function BreadCrumbs(props: BreadCrumbsProps) {
  const { steps, currentStep } = props;

  return (
    <div className="flex items-center justify-center space-x-4 py-4 px-6 w-full">
      {steps.map((step: Funnel) => {
        return (
          <>
            <div className="flex items-center space-x-2">
              <div
                className={`h-4 w-4 rounded-full ${
                  step.path === currentStep.path
                    ? "bg-gray-900"
                    : "border border-border"
                }`}
              />
              <Link
                className="text-sm font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                href="#"
              >
                {step.name}
              </Link>
            </div>
            {step.order !== steps.length && (
              <div className="h-1 w-8 bg-gray-300 dark:bg-gray-700" />
            )}
          </>
        );
      })}
    </div>
  );
}
