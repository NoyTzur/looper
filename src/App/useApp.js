import { useCallback, useState, useRef, useMemo, useEffect } from "react";
import { tracksConfig } from "../constants/tracksConfig.js";
import { useAudio } from "./useAudio";

export const useApp = () => {
  const audio0 = useAudio({ track: tracksConfig[0].track });
  const audio1 = useAudio({ track: tracksConfig[1].track });
  const audio2 = useAudio({ track: tracksConfig[2].track });
  const audio3 = useAudio({ track: tracksConfig[3].track });
  const audio4 = useAudio({ track: tracksConfig[4].track });
  const audio5 = useAudio({ track: tracksConfig[5].track });
  const audio6 = useAudio({ track: tracksConfig[6].track });
  const audio7 = useAudio({ track: tracksConfig[7].track });
  const audio8 = useAudio({ track: tracksConfig[8].track });

  const audios = useMemo(() => {
    return [
      audio0,
      audio1,
      audio2,
      audio3,
      audio4,
      audio5,
      audio6,
      audio7,
      audio8,
    ];
  }, [audio0, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8]);

  const [isPlaying, setIsPlaying] = useState(false);
  const cursorRef = useRef();

  const playAllChannels = useCallback(() => {
    setIsPlaying(true);
    audios.forEach((audio) => audio.play());
  }, [audios]);

  const stopAllChannels = useCallback(() => {
    setIsPlaying(false);
    audios.forEach((audio) => audio.stop());
  }, [audios]);

  const setLoop = useCallback(
    (val) => {
      audios.forEach((audio) => audio.setLoop(val));
    },
    [audios]
  );

  const stopPlay = useCallback(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    audios.forEach((audio) => audio.setOnStop(stopPlay));
  }, [audios, stopPlay]);

  return {
    audios,
    isPlaying,
    cursorRef,
    playAllChannels,
    stopAllChannels,
    setLoop,
  };
};
