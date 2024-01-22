import { Skeleton } from "&/components/ui/Skeletons";
import { VideoGallery } from "&/components/videos";
const youtubeVideoIds = [
  "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
  "C0DPdy98e4c", // Example Video 2
  "tAGnKpE4NCI", // Example Video 3
  "3JZ_D3ELwOQ", // Example Video 4
  "fJ9rUzIMcZQ", // Example Video 5
];

export const Page = () => {
  return (
    <div className="container flex flex-col pt-16 w-full gap-8">
      <h1 className="mt-8 text-lg font-bold">Ressources</h1>
      <VideoGallery videoIds={youtubeVideoIds} />
    </div>
  );
};

export default Page;
