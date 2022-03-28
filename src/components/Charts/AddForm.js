import "./AddForm.scss";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const typeRef = useRef();
  const addRef = useRef();
  const typesArr = useSelector((state) => state.typesArr);

  const onReturnToCharts = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let type = parseInt(typeRef.current.value);
    const termsRaw = addRef.current.value;

    if(!type) { // in case the type field was left empty
      type = typesArr.length + 1;
    }
    
    const newDoc = {
      type,
      terms: termsRaw.replace(" ", "").split(","),
    };
    typeRef.current.value = "";
    addRef.current.value = "";
    /////////////// DB version ///////////////
    await axios.post(`${process.env.REACT_APP_API_URL}/add`, newDoc);
    //////////////////////////////////////////
    dispatch({ type: "ADD", newDoc });
    history.push("/");
  };

  return (
    <div className="add-form-wrapper">
      <button className="return-to-charts-btn" onClick={onReturnToCharts}>
        Return to Charts
      </button>
      <form className="add-form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter the type number (Optional)"
          ref={typeRef}
        />
        <input type="text" placeholder="Enter the terms..." ref={addRef} />
        <button className="add-type-btn">Add type</button>
      </form>
    </div>
  );
};

export default AddForm;
