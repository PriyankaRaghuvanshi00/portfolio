import "./banner.css"
import "./bannerScript"

const Banner = () => {
  const Bubbles = (event) => {
    const Canvas = document.querySelector('.canvas')
    const Bubble = document.createElement('div');
    Bubble.className = "bubble";
    let x = event.clientX - Canvas.offsetLeft;
    let y = event.clientY - Canvas.offsetTop;
    Canvas.appendChild(Bubble);
    Bubble.style.top = `${y}px`
    Bubble.style.left = `${x}px`
  }
  return (

    <div className="canvas" onMouseMove={Bubbles}>
    </div>)
}

export default Banner;