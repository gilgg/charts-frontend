import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

/////////////// local version ///////////////
// const dataJSON =
//   '[{"type":1, "terms":["bug","paper","book","cart"]}, {"type":2, "terms":["london","london","tel aviv","washington"]}, {"type":3, "terms":["amazon","facebook","google"]}]';

const useFetch = () => {
  const dispatch = useDispatch();

  /////////////// local version ///////////////
  // useEffect(() => {
  //   const termsRaw = JSON.parse(dataJSON);
  //   dispatch({ type: "INIT", termsRaw });
  // }, []);

  /////////////// DB version ///////////////
  useEffect(() => {
    const getRecordsFromApi = async () => {
      const typesFromApi = (
        await axios.get(`${process.env.REACT_APP_API_URL}/types`)
      ).data;
      dispatch({ type: "INIT", termsRaw: typesFromApi });
    };
    getRecordsFromApi();
  }, []);
};

export default useFetch;
