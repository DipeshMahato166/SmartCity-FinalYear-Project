import axios from "axios";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/notices");
      setServices(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pt-32 px-6">
    
    </div>
  );
  
};

export default Services;