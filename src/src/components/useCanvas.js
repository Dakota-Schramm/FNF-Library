import { useRef, useEffect } from 'react'

/*
  Custom hook for canvas.

*/
const useCanvas = (draw, options) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    // Set up for render
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    const predraw = options.predraw
    const postdraw = options.postdraw
    
    const render = () => {
      console.log(options);
      frameCount++
      predraw(context, canvas)
      draw(context, canvas, options.img)
      postdraw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return canvasRef
}

export default useCanvas;