import React from "react";

const Postcode = ({ match }) => {
  return (
    <div className="container">
      <h2>Hello! This is Postcode Page</h2>
      <form>
        <div className="form-group">
          <label>Old Postcode : </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>New Postcode : </label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default Postcode;
