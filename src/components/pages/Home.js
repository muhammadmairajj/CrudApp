import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [tableDark, setTableDark] = useState("");
  const [search, setSearch] = useState("");

  // get Data:
  // const getData = async () => {
    // const res = await axios.get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube", users)
    // setUsers(res.data);
    // console.log(res.data);
  // }
            // OR
    useEffect(() => {
       getData();
    }, []);
    const getData = () => {
    axios.get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
    .then(res => setUsers(res.data))
  }
  // Delete Data
  const deleteData = (id) => {
    axios.delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
    .then(() => getData());
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
}  

  const handleSearch = (e) => {
    setSearch(e.target.value);

  }
  const toggleTableDark = () => {
    if(tableDark === 'table-dark') {
      setTableDark("");
    }else {
      setTableDark("table-dark");
    }
  }
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={toggleTableDark}
          // onClick={() => {
          //   if (tabledark === "table-dark") setTableDark("");
          //   else setTableDark("table-dark");
          // }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <div className="mb-3">
          <input type="search" value = {search} 
          placeholder='Search here'
          onChange={handleSearch} className='form-control' />
        </div>
        <Link to="/create">
          <button className="btn btn-secondary mr-2">Create</button>
        </Link>
      </div>
      <table className={`table ${tableDark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
            {/* <th scope="col"></th> */}
          </tr>
        </thead>
        <tbody>
        {/* {users.filter((each) => {
          if(each === '') return each
          else return each.name.toLowerCase().includes(search) 
        })} */}
        {users.filter((each) => {
          return each.name.toLowerCase().includes(search)
        }).map((user, index) => {
          return (
            <>
              {/* <tbody> */}
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/update`}>
                      <button
                        className=" btn btn-success mr-2"
                        onClick={() =>
                          setToLocalStorage(
                            user.id,
                            user.name,
                            user.email
                          )
                        }
                      >
                        Edit 
                      </button>
                    </Link>
                    <Link to={`user/${user.id}`}>
                    <button
                        className=" btn btn-primary mr-2"
                      >
                        View 
                      </button>
                    </Link>
                    <Link>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => deleteData(user.id)}
                    >
                      Delete
                    </button>
                    </Link>
                  </td>
                </tr>
              {/* </tbody> */}
            </>
          );
        })}
        </tbody>
      </table>
    </>
  )
}

export default Home;
