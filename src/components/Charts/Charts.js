import "./Charts.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const Charts = () => {
  const history = useHistory();
  const currentTerms = useSelector((state) => state.currentTerms);

  const onClickHandler = (e) => {
    e.preventDefault();
    history.push("/add");
  };

  return (
    <div className="charts">
      <BarChart width={730} height={250} data={currentTerms}>
        <XAxis dataKey="name" />
        <YAxis dataKey="values" />
        <Bar dataKey="values" fill="#8884d8" />
      </BarChart>
      <button className="charts-add-btn" onClick={onClickHandler}>
        Add a Type
      </button>
    </div>
  );
};

export default Charts;
