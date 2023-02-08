import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  async function getDatas() {
    try {
      const response = await axios.get("/api");
      console.log(response.data);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      {typeof data.data === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.data.users.map((user, index) => <p key={index}>{user}</p>)
      )}
    </div>
  );
}

export default App;
