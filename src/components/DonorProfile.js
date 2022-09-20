import axios from "axios";
import { useEffect, useState } from "react";

function DonorProfile() {
  const id = sessionStorage.getItem("id");
  const [user, setUser] = useState({
    id: sessionStorage.getItem("id"),
    name: "",
    city: "",
    email: "",
    pwd: "",
    phone: "",
  });

  useEffect(() => {
    axios.get("http://helpinghandsspringboot-env.eba-itkavyxn.ap-south-1.elasticbeanstalk.com/api/donors/" + id).then((resp) => {
      console.log(resp.data.data);
      setUser(resp.data.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="card shadow m-3 p-2 bg-dark text-light text-center">
        <h4
          className="p-2"
          style={{
            borderBottom: "2px solid green",
            width: "300px",
            margin: "auto",
          }}
        >
          Seller Profile Page
        </h4>
        <br />
        <h4>Welcome {user.name}</h4>
        <h5>City : {user.city}</h5>
        <h5>Email Id : {user.email}</h5>
        <h5>Contact No : {user.phone}</h5>
      </div>
    </div>
  );
}

export default DonorProfile;