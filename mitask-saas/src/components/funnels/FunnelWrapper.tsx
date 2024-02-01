import React from "react";
import BreadCrumbs from "../ui/breadCrumbs";
import { Funnel, useFunnel } from "&/hooks/useFunnel";

interface FunnelWrapperProps {
  children?: React.ReactNode;
  funnel: Funnel[];
  currentStep: Funnel;
}

export const FunnelWrapper: React.FC<FunnelWrapperProps> = ({
  children,
  funnel,
  currentStep,
}) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <BreadCrumbs currentStep={currentStep} steps={funnel} />
      {children}
    </div>
  );
};
