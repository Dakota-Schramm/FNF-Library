import Sprite from 'Sprite'

function init(ctx) {

}

const Icon = (props) => {
    return (
        <Sprite imagePath={imageSheet} init={init}/>
    )
    
};

export default Icon;