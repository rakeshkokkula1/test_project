import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Button } from "react-bootstrap";
import ListComponent from "./components/ListComponent";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const onFetch = async () => {
    try {
      setError("");
      setLoading(true);
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setLoading(false);
      result ? setData(result.data) : setError(result.message);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="mt-2">
        <p>Click on the fetch data button to get the data</p>
        <Button onClick={onFetch}>Fetch data</Button>
      </div>
      <div className="p-2 m-2 d-flex justify-content-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : data.length ? (
          <ListComponent data={data} />
        ) : (
          <p>No Data to show</p>
        )}
      </div>
    </div>
  );
}

export default App;
