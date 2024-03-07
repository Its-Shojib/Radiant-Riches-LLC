import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Service1 from "./Components/Service1";
import Service2 from "./Components/Service2";
import Service3 from "./Components/Service3";


const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen bg-white">
      <Navbar />
      <div className="w-full md:w-9/12 mx-auto py-5 space-y-5">
        <Banner />
        <Service1 />
        <Service2 />
        <Service3 />
      </div>
    </div>
  );
};

export default App;