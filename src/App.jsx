import { Description } from "./Components/common/description";
import { Encabezado } from "./Components/common/Encabezado/Encabezado";
import { InfiniteLoop } from "./Components/common/InfiniteLoop";
import { Contactame } from "./Components/common/Projects/Contactame";
import { ProjectContainer } from "./Components/common/Projects/ProjectsContainer";

import { Navbar } from "./Components/Layouts/Navbar";
function App() {
  return (
    <>
      <div className="main__container max-w-[65%] max-md:max-w-[95%] min-h-[100vh] m-auto">
        <Navbar />
        <Encabezado />
        <Description />
        <InfiniteLoop />
        <ProjectContainer />
        <Contactame />
      </div>
    </>
  );
}

export default App;
