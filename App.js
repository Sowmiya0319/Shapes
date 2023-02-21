import Square from "./Square";
import Rectangle from "./Rectangle";
import Circle from "./Circle";
import Hexagon from "./Hexagon";
import Pentagon from "./Pentagon";
import "./index.css";
function App() {
  return (
    <div class="cl">
      <Square length={5} />
      <br></br>
      <Rectangle width={4} height={6} />
      <br></br>
     <Circle radius={3} />
     <br></br>
     <Hexagon area={8} />
     <br></br>
      <Pentagon area={12} /> 
      <br></br>
    </div>
  );
}

export default App;