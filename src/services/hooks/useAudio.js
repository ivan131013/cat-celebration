import { useEffect, useState } from "react";

export const useAudio = (audioUrl, looped) => {
  const [audio] = useState(new Audio(audioUrl));
  const [playing, setPlaying] = useState(false);

  const play = (position) => {
    if (position) {
      audio.currentTime = position;
    }
    setPlaying(true);
  };

  const stop = () => {
    setPlaying(false);
  };

  const pause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();

    if (looped) {
      audio.loop = true;
    } else {
      audio.loop = false;
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return {
    audio,
    play,
    stop,
    pause,
  };
};
