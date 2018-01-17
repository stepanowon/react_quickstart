import React from 'react'

const Youtube = (props) => {
    const styleContainer = { margin:0, padding:0 };
    const stylePlayer = { width:props.width, height:props.height };

    const videoSrc = "https://www.youtube.com/embed/" + props.video + 
        "?autoplay=" + props.autoplay + 
        "&modestbranding=" + props.modest +
        "&fs=1";

    return (
        <div style={styleContainer}>
        <iframe style={stylePlayer} type="text/html" 
            width={props.width} height={props.height}
            src={videoSrc} title={props.video}
            frameBorder="0"
            allowFullScreen="1" />
      </div>
    )
}

export default Youtube;
