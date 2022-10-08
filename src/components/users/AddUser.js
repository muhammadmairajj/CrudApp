import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [user, setUser] = useState({
    //     name : '',
    //     email : ''
    // });

    // const {name, email} = user;
    // const onInputChange = (e) => {
    //     setUser({...user, [e.target.name] : e.target.value });
    // }
    const history = useNavigate();
    // const handleSubmit = async (e) => {
        // e.preventDefault();
        // const res = await axios.post("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
        // setUser(res.data);
        // navigate('/');
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube", {
          name: name,
          email: email,
        })
        .then(() => {
          history("/");
        });
    }
  return (
    <>
    <div className="d-flex justify-content-between m-2">
      <h2>Create</h2>
      <Link to="/">
        <button className="btn btn-primary">Show Data</button>
      </Link>
    </div>
    <form onSubmit={e => handleSubmit(e)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        // onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  </>
  )
}

export default AddUser;
