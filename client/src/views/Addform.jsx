import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  });

  function changeHandler(e) {
    let data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  }

  const addNames = async () => {
    try {
      const { data } = await axios.post(`http://localhost:3000/names`);
    } catch (error) {
      console.log(error);
    }
  };

  const editNames = async (id) => {
    try {
      const { data } = await axios.put(`http://localhost:3000/names/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  async function submitHandler(e) {
    try {
      e.preventDefault();
      // console.log(formState, `FORM STATE`);
      await addNames();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Add name</h1>
      <div className="container mt-4">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">First name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={form.first_name}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={form.last_name}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              value={form.gender}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">IP Address</label>
            <input
              type="text"
              className="form-control"
              name="ip_address"
              value={form.ip_address}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add New Name
          </button>
        </form>
      </div>
    </>
  );
}
