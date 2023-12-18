import React, { useEffect } from "react"
import Task from "../components/Task"
import { useGetAllTaskQuery } from "../provider/redux/queries/Task"
import Loader from "../components/Loader"

const Home = ()=>{

  const {isError, isLoading, data,refetch} = useGetAllTaskQuery()

  useEffect(()=>{
    refetch()
  },[])

  if(isError) return <h1>Oops! Something went wrong</h1>
  if (isLoading){
    return <Loader/>
  }
  return(
    <>
      <div className="container col-sm-8 mx-auto">
            <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                 data && data.AllTask && data.AllTask.length>0? data.AllTask.map((cur,i)=>{
                    return<Task key={i} data ={cur} refetchTask ={refetch} index ={i}></Task>
                  }): <>
                    <tr>
                      <td colSpan={5} className="text-center">
                          No Task Pending
                      </td>
                    </tr>
                  </>
                }
            </tbody>
          </table>
      </div>
    </>
  )
}

export default Home