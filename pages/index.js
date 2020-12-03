import Card from "../componnents/card";
import Slider from "../componnents/slider";

const { default: NavBar } = require("../componnents/navbar");

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />
      <div className="info">
        <div className="container ">
          <div style={{ position: "absolute" }}>
            <h2>ABOUT ZOJIE'S FARM</h2>
            <p>
              We are constantly in search for innovative solutions that makes
              the farmers lives easier while increasing their opportunities. We
              achieve these in various ways - reducing their production costs,
              increasing their harvest volumes and providing a better, bigger
              and more sustainable market for them.
            </p>
          </div>
          <Card />
        </div>
      </div>
    </>
  );
};
export default Home;
