import Canvas from './Canvas'

import React, {Component} from 'react';

const draw = (ctx) => {
    ctx.drawImage(img, 
        props.sx, props.sy, props.sWidth, props.sHeight, 
        0, 0, canvas.width, canvas.height
    )
}

const Sprite = (props) => {
    return (
        <Canvas draw={} height={50} width={50} />
    )

    React.useEffect(() => {
        // Runs after the first render() lifecycle
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext('2d');

        let img = new Image();
        img.src = props.imagePath
        img.onload = function() {
            
        };
      }, []);
}

export default Sprite;