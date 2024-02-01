import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface Funnel {
  path: string;
  order: number;
  name: string;
}

export interface FunnelReturnValue {
  currentStep: Funnel;
}

export const useFunnel = (funnel: Funnel[]): FunnelReturnValue => {
  const pathname = usePathname();
  const [currentStep, setCurrentStep] = useState<Funnel>(funnel[0]);

  useEffect(() => {
    const step = funnel.find((step) => step.path === pathname);
    if (step) {
      setCurrentStep(step);
    }
  }, [pathname, funnel]);

  return {
    currentStep,
  };
};
