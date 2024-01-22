"use client";

import React from "react";
import YouTube from "react-youtube";

interface videoGalleryProps {
  videoIds: string[];
}

export const VideoGallery: React.FC<videoGalleryProps> = ({ videoIds }) => {
  return (
    <div className="flex gap-8 flex-wrap">
      {videoIds.map((id) => (
        <YouTube videoId={id} key={id} className="w-[400px]" />
      ))}
    </div>
  );
};
