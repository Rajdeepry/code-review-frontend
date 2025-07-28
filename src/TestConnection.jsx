
import React, { useEffect, useState } from "react";
import axios from "axios";

const TestConnection = () => {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/test`)
      .then((res) => {
        setMessage(res.data.message || "Connected!");
      })
      .catch(() => {
        setMessage("Connection failed.");
      });
  }, []);

  return <div>{message}</div>;
};

export default TestConnection;
