import React, { useState, useCallback } from "react";
import {
  BsFillPlayFill,
  BsFillStopFill,
  BsFillPauseFill,
} from "react-icons/bs";
import { MdLoop } from "react-icons/md";
import "./ButtonsSection.css";

const ButtonsSection = (props) => {
  const { setLoop } = props;
  const [isLoop, setIsLoop] = useState(false);
  const toggleLoop = useCallback(() => {
    setLoop(!isLoop);
    setIsLoop(!isLoop);
  }, [isLoop, setLoop]);

  return (
    <div className="buttons_wrapper">
      <div className="buttons_container">
        {props.isPlaying ? (
          <button className="button" onClick={props.onStop}>
            <BsFillPauseFill size={20} />
          </button>
        ) : (
          <button className="button" onClick={props.onPlay}>
            <BsFillPlayFill size={20} />
          </button>
        )}
        <button className="button" onClick={props.onStop}>
          <BsFillStopFill size={20} />
        </button>
        <button className="button" onClick={toggleLoop}>
          {isLoop ? <MdLoop size={20} color="red" /> : <MdLoop size={20} />}
        </button>
      </div>
    </div>
  );
};

export default ButtonsSection;
