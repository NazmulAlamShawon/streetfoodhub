import Hero_section from "../components/Hero/Hero_section";
import TopRated from "../components/TopRated/TopRated";
import NewFood from "../components/UpComingFood/NewFood";

const Home = () => {
  return (
    <div>
      <Hero_section />
      <TopRated ></TopRated>
      <NewFood ></NewFood>
    </div>
  );
};
export default Home;
