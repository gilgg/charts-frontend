import "./Header.scss";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const typeRef = useRef();
  const typesArr = useSelector((state) => state.typesArr);
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "CHANGE_SELECTED_TYPE",
      selectedType: parseInt(typeRef.current.value),
    });
  };

  return (
    <div className="header">
      <label className="header-label" htmlFor="types">
        Select Type
      </label>
      <select className="header-select" name="types" id="types" ref={typeRef}>
        {typesArr.length > 0 &&
          typesArr.map((data) => {
            return (
              <option key={data.type} value={`${data.type}`}>
                {data.type}
              </option>
            );
          })}
      </select>
      <button className="header-btn" onClick={onClickHandler}>
        Show charts
      </button>
    </div>
  );
};

export default Header;
