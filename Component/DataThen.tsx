import axios from "axios";
import React from "react";

const DataThen = () => {
  const [fetchedData, setFetchedData] = React.useState([]);
  const [fetchedDataError, setFetchedDataError] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://wordle-data.herokuapp.com/letters")
      .then((res) => setFetchedData(res.data))
      .catch((error) => setFetchedDataError(error.message));
  }, []);

  return (
    <>
      {fetchedDataError !== "" && <div>{fetchedDataError}</div>}
      <div>
        {fetchedData.map((item, index) => {
          const { key } = item;
          return (
            <div className="keyboard" key={index}>
              {key}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DataThen;
