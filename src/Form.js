import React, { useState } from "react";
import "./Form.css";
// import { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <div className="form">
      <h1>Add a New Category</h1>
      <strong>
        <label className="form-label">Category Name :</label>
        <center>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </center>
      </strong>
      {/* <br /> */}
      <strong>
        <label className="form-label">Parent Category</label>
        <center>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </center>
      </strong>
      <br />
      <button className="btn">Add Category</button>
      <p>
        Name 👦🏿:<strong>{name}</strong>
      </p>
      {/* <br /> */}
      <p className="dummy">
        Mail ✍:
        <strong>{email}</strong>
      </p>
    </div>
  );
};

export default Form;
