import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {Technologies} from "./layout/sections/technologies/Technologies";
import {Experience} from "./layout/sections/experience/Experience";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Technologies/>
            <Experience/>
        </div>
    );
}

export default App;