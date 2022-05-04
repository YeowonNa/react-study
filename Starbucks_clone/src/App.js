import { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const [hovering, setIsHovering] = useState();

  return (
    <>
      <Header />
      <div onMouseOver={() => setIsHovering(true)}>
        <Main />
      </div>
    </>
  );
}

export default App;
