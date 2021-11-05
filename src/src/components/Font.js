import Sprite from './Sprite'

const imageSheet = '../images/alphabet.png'

/*
    Draw image for characters in images

*/

const Font = (props) => {
    const modDisplayName = props.value;

    return (
        <Sprite imagePath={imageSheet}
        sx={0} sy={0} sWidth={1024} sHeight={1024}
        />
    )

    
}

export default Font;