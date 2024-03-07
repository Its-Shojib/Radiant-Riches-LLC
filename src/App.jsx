import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen bg-white">
      <Navbar />
      <div className="w-full md:w-9/12 mx-auto py-5">
        <Banner />
      </div>
    </div>
  );
};

export default App;