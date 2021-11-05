import './App.css';

import Font from './components/Font'

const root = "../../../projects"
const icons = "assets/images/icons"

const fs = require("fs");

// fs.readdir(root, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });

function App() {
  /*
    Should display all mods in the project folder with an icon from the game and the directory name.
  */
  return (
    <div className="App">
      <Font/>
    </div>
  );
}

export default App;
