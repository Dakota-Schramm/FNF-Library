import Sprite from 'Sprite'

const imageSheet = '../images/alphabet.png'

/*
    Draw image for characters in images

*/
const Font = (props) => {
    const modDisplayName = props.value;

    return (
        <Sprite imagePath={imageSheet}/>
    )
    
    React.useEffect(() => {
        // Runs after the first render() lifecycle
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext('2d');
      }, []);
}

export default Font;