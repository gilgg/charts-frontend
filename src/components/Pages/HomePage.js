import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Charts from "../Charts/Charts";

const HomePage = () => {
  const typesArr = useSelector((state) => state.typesArr);

  return (
    <div className="home-page">
      <Header />
      <Charts />
    </div>
  );
};

export default HomePage;
