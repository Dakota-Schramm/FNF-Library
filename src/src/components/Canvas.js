import React from 'react'
import useCanvas from './useCanvas'

/*
  React canvas component 

  props
    draw
    predraw
    postdraw
    image
    height
    width

  options


*/

const Canvas = props => {  
  const { draw=props.draw, predraw=props.predraw, postdraw=props.postdraw, ...rest } = props;

  const options = {
    predraw: predraw,
    postdraw: postdraw,
    img: rest.image
  }
  
  const canvasRef = useCanvas(draw, options)

  return <canvas ref={canvasRef} height={props.height} width={props.width}/>
}

export default Canvas