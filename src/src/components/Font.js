import Sprite from './Sprite'
const path = require('path');

const imageSheet = path.join('images', 'alphabet.png');

/*
    Draw image for characters in images

    props
        image -> Font Sheet
        sx - sprite x dim
        sy - sprite y dim
        sWidth - source image width
        sHeight - source image height
*/

const Font = (props) => {
    const modDisplayName = props.value;

    return (
        <Sprite image={imageSheet}
        sx={0} sy={0} sWidth={1024} sHeight={1024}
        />
    )

    
}

export default Font;