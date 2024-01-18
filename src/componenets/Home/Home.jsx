import CategoryList from "../CategoryList/CategoryList";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import Banner from "../Navbar/Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100">
        <div className="max-w-6xl mx-auto ">
          <Navbar/>
          <Banner/>
        </div>
      </div>
      <CategoryList />
      <FeaturedJob/>
    </div>
  );
};

export default Home;
