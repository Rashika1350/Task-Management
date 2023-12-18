import React from "react"
import toast from "react-hot-toast"
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "../provider/redux/queries/Task";

const Task = ({index,data,refetchTask})=>{

    const [updateTaskFn, updateTaskResponse] = useUpdateTaskMutation()
    const [deleteTaskFn, deleteTaskResponse] = useDeleteTaskMutation()

        const updateTaskHandler = async(id)=>{
            try{
                const {error} = await updateTaskFn(id)
                if(error){
                  toast.error(error?.data?.msg)
                  return
                }
                await refetchTask()
                toast.success("Task updated")
              }catch(err){
                toast.error(err?.response?.data?.msg)
              }
        }
        
        const deleteTaskHandler = async(id)=>{
            try{
                const {error} = await deleteTaskFn(id)
                if(error){
                  toast.error(error?.data?.msg)
                  return
                }
                await refetchTask()
                toast.success("Task deleted")
              }catch(err){
                toast.error(err?.response?.data?.msg)
              }
        }

  return(
    <>
         <tr>
                        <th scope="row">{index+1}</th>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td> {data?.status ?<FcCheckmark />:<FcCancel/>}</td>
                        <td className="d-flex gap-2">
                          {!data.status && <button disabled={updateTaskResponse.isLoading} onClick={()=>updateTaskHandler(data._id)} className="btn btn-sm btn-outline-warning">Mark as Done</button>}
                          <button disabled={deleteTaskResponse.isLoading} onClick={()=>deleteTaskHandler(data._id)} className="btn btn-sm btn-outline-danger">Delete</button>
                        </td>
              </tr>
    </>
  )
}

export default Task