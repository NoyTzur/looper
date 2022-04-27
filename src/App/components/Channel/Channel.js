import React, {useCallback, useMemo} from "react";
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import "./Channel.css";

const Channel = (props) => {
  const {shouldPlay, setShouldPlay} = props;

  const toggleMute = useCallback(() => {
    setShouldPlay(!shouldPlay);
  }, [shouldPlay, setShouldPlay]);

  const wrapperStyle = useMemo(() => {
    return {backgroundColor: props.backgroundColor};
  }, [props.backgroundColor]);

  return (
    <div className={'channel'} style={wrapperStyle}>
      {props.trackName}
      <button className="button_mute" onClick={toggleMute}>
        {!shouldPlay ? <GoMute size={20} /> : <GoUnmute size={20} />}
      </button>
    </div>
  );
};

export default Channel;
