function init() {
    // future animation code goes here
}

const Sprite = (props) => {
    let img = new Image();
    img.src = props.imagePath
    img.onload = function() {
        init();
    };

    return (
        <canvas width="50" height="50"></canvas>
    );

}

export default Sprite;