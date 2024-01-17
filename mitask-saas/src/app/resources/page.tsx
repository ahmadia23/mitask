import { Skeleton } from "&/components/ui/Skeletons";

export const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="mt-8 text-lg font-bold">Ressources</h1>
      <Skeleton className="w-[400px] h-[20px] rounded-full"></Skeleton>
      <Skeleton className="w-[400px] h-[20px] rounded-full"></Skeleton>
      <Skeleton className="w-[400px] h-[20px] rounded-full"></Skeleton>
    </div>
  );
};

export default Page;
