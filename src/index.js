import reactDom from "react-dom";
import BarraTopo from "./componentes/BarraTopo";
import BarraTopoMobile from "./componentes/BarraTopoMobile";
import Corpo from "./componentes/Corpo";

function App() {
    return (
        <div>
            <BarraTopo />
            <BarraTopoMobile />
            <Corpo/>
        </div>
    )
}

const root = document.querySelector('.root');
reactDom.render(<App />, root)
