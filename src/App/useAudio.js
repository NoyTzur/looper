import { useState, useMemo, useCallback, useEffect } from "react";

export const useAudio = (props) => {
  const [shouldPlay, setShouldPlay] = useState(true);

  const audioElement = useMemo(() => {
    return new Audio(props.track);
  }, [props.track]);

  const play = useCallback(() => {
    audioElement.play();
  }, [audioElement]);

  const stop = useCallback(() => {
    audioElement.pause();
    audioElement.currentTime = 0;
  }, [audioElement]);

  const setLoop = useCallback(
    (val) => {
      audioElement.loop = val;
    },
    [audioElement]
  );

  const setOnStop = useCallback(
    (handler) => {
      audioElement.onpause = handler;
    },
    [audioElement]
  );

  useEffect(() => {
    audioElement.volume = shouldPlay ? 1 : 0;
  }, [audioElement, shouldPlay]);

  return {
    shouldPlay,
    setShouldPlay,
    play,
    stop,
    setLoop,
    setOnStop,
  };
};
