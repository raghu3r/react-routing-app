import React from "react";

const Changename = ({ match }) => {
  return (
    <div className="container">
      <h2>Hello! This is Changename page</h2>
      <form>
        <div className="form-group">
          <label>Old Name : </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>New Name : </label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default Changename;
