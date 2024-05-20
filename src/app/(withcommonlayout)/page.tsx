import FlashSaleHome from "../component/Home/FlashSaleHome";
import Hero from "../component/Home/Hero";
import MostPopular from "../component/Home/MostPopular";
import TopCategories from "../component/Home/TopCategories";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FlashSaleHome />
      <TopCategories />
      <MostPopular />
    </div>
  );
};

export default HomePage;
