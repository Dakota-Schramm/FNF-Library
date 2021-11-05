import Sprite from 'Sprite'

const Icon = (props) => {
    return (
        <Sprite />
    )
    React.useEffect(() => {
        // Runs after the first render() lifecycle
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext('2d');
      }, []);
    
};

export default Icon;