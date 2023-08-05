import { useEffect, useState } from "react";
import BallsAbsent from "../../features/main/components/BallsAbsent";
import BallsPresent from "../../features/main/components/BallsPresent";
import banger from "../../assets/audio/banger2.mp3";
import { useAudio } from "../../services/hooks/useAudio";
import { noBallsDate } from "../../services/consts/consts";

const Main = () => {
  const { play, audio } = useAudio(banger);

  const [showNoBalls, setShowNoBalls] = useState(false);
  useEffect(() => {
    if (!audio) {
      return;
    }

    if (noBallsDate.getTime() < new Date().getTime()) {
      audio.addEventListener("canplaythrough", () => {
        audio.play().catch((e) => {
          window.addEventListener(
            "click",
            () => {
              play(41.5);
            },
            { once: true }
          );
        });
      });
    } else if (noBallsDate.getTime() > new Date().getTime()) {
      setTimeout(() => {
        audio.volume = 0;

        play(32);

        let fadeout = setInterval(function () {
          // Reduce volume by 0.05 as long as it is above 0
          // This works as long as you start with a multiple of 0.05!

          if (audio.volume + 0.01 < 1) {
            audio.volume = audio.volume + 0.01;
          } else {
            // Stop the setInterval when 0 is reached
            clearInterval(fadeout);
          }
        }, 100);
      }, noBallsDate.getTime() - new Date().getTime() - 8500);
    }
  }, [audio]);

  useEffect(() => {
    if (noBallsDate.getTime() > new Date().getTime()) {
      setTimeout(() => {
        setShowNoBalls(true);
      }, noBallsDate.getTime() - new Date().getTime());
    } else {
      setShowNoBalls(true);
    }
  }, []);

  return (
    <>
      {!showNoBalls && <BallsPresent />}
      {showNoBalls && <BallsAbsent />}
    </>
  );
};

export default Main;
