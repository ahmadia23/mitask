import Settings from "&/components/settings";

export const Page = () => {
  return (
    <div className="container flex flex-col gap-8 w-full pt-14">
      <h1 className="mt-8 text-2xl font-bold">Settings</h1>

      <Settings />
    </div>
  );
};

export default Page;
