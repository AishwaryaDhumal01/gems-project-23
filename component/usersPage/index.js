import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";
import User from "./user";
import Pagination from 'react-bootstrap/Pagination';


function UsersPage() {
  const [usersData, setUsersData] = useState([]);
  const [Loading , setLoading] = useState(true)
  const [currentPage,setcurrentPage] = useState(1)

  const getUsersData = (page=1) => {
    setLoading(true)
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page,
        },
      })
      .then(function (res) {
        setUsersData(res.data.data);
      })
      .catch(function (error) {
        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          alert(error.message);
        }
      });
    setLoading(false)
  };

  useEffect(() => {
    getUsersData();
  }, []);

 const handleChangePage = (pageNumber) =>{
  setcurrentPage(pageNumber)
  getUsersData(pageNumber)
 }

  console.log("====usersData=====", usersData);

  const TaskList = props => {
    return (
      <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
        {...props}
      >
        <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
      </ContentLoader>
    )
  }

  return (
    <>
    <section className="user-list my-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>User List</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quae dolore dolores doloribus tempore velit excepturi
              exercitationem!
            </p>
          </div>
          <div className="col">
              {Loading? (
                <TaskList />
              ) : (
                <div className="candidate-list">
                  {usersData.map((userData) => (
                    <User key={userData.id} data={userData} />
                  ))}
                </div>
              )}

<Pagination>
      <Pagination.First onClick={()=>handleChangePage(1)}/>
      <Pagination.Prev onClick={()=>handleChangePage(currentPage-1)}
      disabled={currentPage===1}/>
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Next onClick={()=>handleChangePage(currentPage+
      1)}
      disabled = {currentPage===2} />
     
    </Pagination>

          </div>
        </div>
      </div>
       </section>

    </>
  );
}

export default UsersPage;