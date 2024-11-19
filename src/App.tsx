import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {Technologies} from "./layout/sections/technologies/Technologies";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Technologies/>
        </div>
    );
}

export default App;