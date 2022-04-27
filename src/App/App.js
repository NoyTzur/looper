import React from "react";
import "./App.css";
import Channel from "./components/Channel/Channel.js";
import ButtonsSection from "./components/ButtonsSection/ButtonsSection.js";
import { tracksConfig } from "../constants/tracksConfig.js";
import { useApp } from "./useApp";

const App = () => {
  const { audios, isPlaying, playAllChannels, stopAllChannels, setLoop } =
    useApp();

  return (
    <div className="App">
      <h1>Loop Machine</h1>
      <div className="channels_container">
        {audios.map((audio, index) => (
          <Channel
            key={tracksConfig[index].trackName}
            {...tracksConfig[index]}
            shouldPlay={audio.shouldPlay}
            setShouldPlay={audio.setShouldPlay}
          />
        ))}
      </div>
      <ButtonsSection
        isPlaying={isPlaying}
        onPlay={playAllChannels}
        onStop={stopAllChannels}
        setLoop={setLoop}
      />
    </div>
  );
};

export default App;
