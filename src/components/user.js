import React from "react";
import { Link } from "react-router-dom";

const User = ({ match }) => {
  const { username } = match.params;
  return (
    <div>
      <h2>Hello, {username}</h2>
      <Link to={username + "/postcode"} className="btn btn-primary">
        Add postcode
      </Link>
      {"  |  "}
      <Link to={username + "/change-nameroute"} className="btn btn-primary">
        Changename
      </Link>
    </div>
  );
};

export default User;
