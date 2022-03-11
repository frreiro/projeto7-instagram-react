import reactDom from "react-dom";
import ActionBar from "./componentes/ActionBar";
import Corpo from "./componentes/Corpo";
import Navbar from "./componentes/Navbar";


function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <ActionBar />
        </div>
    )
}

const root = document.querySelector('.root');
reactDom.render(<App />, root)
