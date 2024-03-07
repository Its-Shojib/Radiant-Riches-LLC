import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Related_Deals from "./Components/Related_Deals";
import Service1 from "./Components/Service1";
import Service2 from "./Components/Service2";
import Service3 from "./Components/Service3";
import Service4 from "./Components/Service4";


const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen bg-white">
      <Navbar />
      <div className="w-full md:w-9/12 mx-auto py-5">
        <Banner />
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        <Related_Deals />
      </div>
    </div>
  );
};

export default App;