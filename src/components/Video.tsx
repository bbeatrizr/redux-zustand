import ReactPlayer from "react-player";
import { Loader } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Video() {
  const { currentLesson } = useCurrentLesson();
  const { isLoading, next } = useStore((state) => {
    return {
      isLoading: state.isLoading,
      next: state.next,
    };
  });

  function handleNexVideo() {
    next();
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex =hfull items-center justify-center">
          <Loader className="w-6 h-6 text-zinc animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handleNexVideo}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
