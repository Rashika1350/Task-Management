import React from "react"
import {Formik,Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import toast from "react-hot-toast"
import { useAddTaskMutation } from "../provider/redux/queries/Task"
import { useNavigate } from "react-router-dom"

const AddTask = ()=>{

  const [AddTaskFn, AddTaskResponse] = useAddTaskMutation()

  const validationSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required")
  })
  const initialValues ={
    title:"",
    description:""
  }
  const navigate = useNavigate();
  const onSubmitHandler = async(e,{resetForm})=>{
    try{
      const {error} = await AddTaskFn(e)
      if(error){
        toast.error(error?.data?.msg)
        return
      }
      toast.success("Task added to the list.")
      resetForm()
      navigate("/")
    }catch(err){
      toast.error(err?.response?.data?.msg)
    }
  }

  return(
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler} validationSchema={validationSchema}>
      <Form className="container col-sm-8 mx-auto">
        <div className="mb-3">
          <label htmlFor="title">Task Title</label>
          <Field type="text" id="title" name="title" className="form-control" placeholder="Enter Task Title" />
          <ErrorMessage name="title" component={'p'} className="text-danger"/>
        </div>
        <div className="mb-3">
          <label htmlFor="description">Task Description</label>
          <Field as="textarea" rows ={6} type="text" id="description" name="description" className="form-control" placeholder="Enter Task Description" />
          <ErrorMessage name="description" component={'p'} className="text-danger"/>
        </div>
         <div className="mb-3">
          <button type="submit" disabled={AddTaskResponse.isLoading} className="btn btn-primary">{
            AddTaskResponse.isLoading? 'Submit.....':'Submit'
          }</button>
        </div>
      </Form>
    </Formik>
  )
}

export default AddTask