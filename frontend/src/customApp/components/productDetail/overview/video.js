import React, { Component } from "react";
import styled from "styled-components";

const PlayButton = styled.img`
  position: absolute;
  left: 40%;
  top: 40%;
  width: 20%;
  height: 20%;
  display: ${props => (props.playing ? "none" : "block")};
`;

class Video extends Component {
  state = {
    playing: false
  };

  onClick = () => {
    const video = this.refs.videoRef;
    if (video.paused || video.ended) {
      this.setState({ playing: true });
      video.play();
    } else {
      this.setState({ playing: false });
      video.pause();
    }
  };

  render() {
    const { url, poster } = this.props;
    return (
      <div>
        <video
          src={url}
          poster={poster}
          type="video/mp4"
          preload="none"
          muted
          ref="videoRef"
          onClick={this.onClick}
          style={{ width: "100%" }}
        />
        <PlayButton
          src="https://www.muji.net/img/store/common/play.svg"
          onClick={this.onClick}
          playing={this.state.playing}
        />
      </div>
    );
  }
}

export default Video;
