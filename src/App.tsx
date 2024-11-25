import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {MyTechStack} from "./layout/sections/myTechStack/MyTechStack";
import {Footer} from "./layout/footer/Footer";
import {Contacts} from "./layout/sections/contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MyTechStack/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;