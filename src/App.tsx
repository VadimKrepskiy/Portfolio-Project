import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {MyTechStack} from "./layout/sections/myTechStack/MyTechStack";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MyTechStack/>
            <Projects/>
        </div>
    );
}

export default App;