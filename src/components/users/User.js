import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './style.css';

const User = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    const getData = () => {
        axios.get(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
        .then((res) => setUser(res.data))
    }

    useEffect(() => {
        getData();
    }, []);
  return (
    <div>
      <h1>User: {id}</h1>
      <ul>
        <li>
            <h2>Name: {user.name}</h2>
        </li>
        <li>
            <h2>Email: {user.email}</h2>
        </li>
      </ul>
      <Link to="/">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
    </div>
  )
}

export default User;
