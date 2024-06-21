import "./App.css";
import Sidebar1 from "./Components-Bar/Sidebar";

import DataTable from "./components/TaskTable";
import TanStackTable from "./components/table1";
function App() {
  return (
    <div className="App">
      <section>
        <div className="layout">
          <div className="Compo">
            <Sidebar1></Sidebar1>
          </div>

          <TanStackTable></TanStackTable>

          {/* <DataTable></DataTable> */}
        </div>
      </section>
    </div>
  );
}

export default App;
