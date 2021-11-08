import Canvas from './Canvas'

import React, {Component} from 'react';
import { useState, useEffect } from 'react'

/******************** */
function resizeCanvas(canvas, w, h) { 
    canvas.width = w
    canvas.height = h
}

const _postdraw = (ctx) => {
    ctx.restore()
}
  
const _predraw = (context, canvas) => {
    context.save()
    resizeCanvas(canvas, 50, 50)
    const { width, height } = context.canvas
    context.clearRect(0, 0, width, height)
}

/* 
############################################# 
*/

/*
    Draws sprite on canvas

    props
        sx - sprite x dim
        sy - sprite y dim
        sWidth - source image width
        sHeight - source image height
*/
const Sprite = (props) => {
    const image = new Image();
    image.src = props.image;
    function draw(ctx, canvas) {
        console.log(props)
        ctx.drawImage(image, 
            props.sx, props.sy, props.sWidth, props.sHeight, 
            0, 0, canvas.width, canvas.height
        )
    }
    console.log(props.image) // returns undefined
    console.log(props);
    return (
        <Canvas 
        predraw={_predraw} 
        draw={draw}
        postdraw={_postdraw}
        image={props.image}
        height={50} width={50} />
    )
}

export default Sprite;