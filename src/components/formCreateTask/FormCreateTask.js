import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Radio, Select, Space, Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik'
import { GET_ALL_PROJECT_SAGA, GET_ALL_TASK_TYPE_SAGA, GET_LIST_PROJECT_SAGA, GET_PRIORITY_TYPE_SAGA, GET_USER_SAGA } from '../../redux/constan/author';
import { CREATE_TASK_SAGA, UPDATE_USER_SAGA } from '../../redux/constan/task';
import { GET_ALL_STATUS_ID, GET_ALL_STATUS_ID_SAGA } from '../../redux/constan/status';
import { callBackSubmitForm } from '../../redux/reducer/cyberbugModalSlice';


const FormCreateTask = () => {
    const { arrProject } = useSelector(state => state.listProjectSlice);
    
    
    const { taskType } = useSelector(state => state.taskTypeSlice);
    const { listPriority } = useSelector(state => state.prioritySlice);
    const { listUser } = useSelector(state => state.userSlice);
    const {getStatusId} = useSelector(state => state.listStatusIdSlice);
    console.log(getStatusId);
    
    
    


    const arrUser = listUser.map((user, index) => {
        return { label: user.name, value: user.userId }
    })



    const [tracking, setTracking] = useState({
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: GET_ALL_PROJECT_SAGA });
        dispatch({ type: GET_ALL_TASK_TYPE_SAGA });
        dispatch({ type: GET_PRIORITY_TYPE_SAGA });
        dispatch({ type: GET_USER_SAGA });
        dispatch({ type: GET_LIST_PROJECT_SAGA});       
        dispatch({ type: GET_ALL_STATUS_ID_SAGA})
        dispatch(callBackSubmitForm(formik.handleSubmit))
    }, [])

    // ----code @tinymce/tinymce-react----
    const editorRef = useRef(null);
    const log = (e) => {
        e.preventDefault();

        if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
    };

    // -----/code @tinymce/tinymce-react-----
    // ---code Antd----
    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }
    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };
    // ----code Antd----
    // const handleChangetracking = (e) =>{
    //     setTracking({
    //         ...tracking,
    //         spent: e.target.value,
    //         remaining: e.target.value
    //     })
    //     console.log({
    //        spent: tracking.spent,
    //         remaining: tracking.remaining
    //     });
    // }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            "listUserAsign": [],
            "projectId": '',
            "taskName": "",
            "description": "",
            "statusId": '',
            "originalEstimate": 0,
            "timeTrackingSpent": 0,
            "timeTrackingRemaining": 0,           
            "typeId": '',
            "priorityId": ''

        },
        onSubmit: values =>{
            console.log(values);
            
            dispatch({
                type: CREATE_TASK_SAGA,
                objectTask: values
            })
        }
    })
    return (
        <div>
            <h3>Create Task</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <p>Project</p>
                    <select className="form-control" name='projectId' value={formik.values.projectId} onChange={(e)=>{
                        let {value} = e.target
                        dispatch({type: UPDATE_USER_SAGA, value: value})
                        formik.setFieldValue('projectId', e.target.value)
                       }                       
                        }>
                        {arrProject.map((pro, index) => {
                            return <option key={index} value={pro.id}>{pro.projectName}</option>

                        })}
                    </select>
                </div>
                <div className="form-group">
                    <p>Task name:</p>
                    <input type="text" className="form-control" name='taskName' value={formik.values.taskName} onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <p>StatusId</p>
                    <select className="form-control" name="statusId" value={formik.values.statusId} onChange={formik.handleChange}>
                      {getStatusId.map((status,index)=>{
                      return <option key={index} value={status.statusId}>{status.statusName}</option>
                      })}
                    </select>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-6">
                            <p>Priority</p>
                            <select className="form-control" name='priorityId' value={formik.values.priorityId} onChange={formik.handleChange}>
                                {listPriority.map((prio, index) => {
                                    return <option key={index} value={prio.priorityId}>{prio.priority}</option>
                                })}


                            </select>
                        </div>
                        <div className="col-6">
                            <p>Task Type</p>
                            <select className="form-control" name='typeId' value={formik.values.typeId} onChange={formik.handleChange}>
                                {taskType.map((task, index) => {
                                    return <option key={index} value={task.id}>{task.taskType}</option>
                                })}


                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-6">
                            <p>Assignees</p>
                            <Select
                                mode="multiple"
                                // size={size}
                                options={arrUser}
                                placeholder="Please select"
                                name='listUserAsign'
                                // defaultValue={['a10', 'c12']}
                                optionFilterProp='label'
                                value={formik.values.listUserAsign}
                                onChange={(values)=> formik.setFieldValue('listUserAsign', values)} //values là giá trị người dùng chọn
                                style={{
                                    width: '100%',
                                }}
                                onSearch={(value) => console.log(value)}

                            />

                            <div className="row mt-3">
                                <div className="col-12">
                                    <div className="form-group">
                                        <p>Originer estimate</p>
                                        <input type='number' min='0' name='originer' className="form-control" value={formik.values.originer} onChange={formik.handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <p>Time tracking</p>
                                    <Slider
                                        // defaultValue={30}
                                        tooltip={{
                                            open: false
                                        }}
                                        value={tracking.timeTrackingSpent}
                                        max={Number(tracking.timeTrackingSpent) + Number(tracking.timeTrackingRemaining)}
                                    />
                                    <div className='d-flex justify-content-between' style={{ marginTop: '-10px' }}>
                                        <p>{tracking.timeTrackingSpent}h logged</p>
                                        <p>{tracking.timeTrackingRemaining}h remaining</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='row mt-4'>
                                    <div className='form-group'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <input className='form-control' name='timeTrackingSpent' min='0'  onChange={(e) => {setTracking({...tracking,timeTrackingSpent: e.target.value}); formik.setFieldValue('timeTrackingSpent', e.target.value)}} type='number' />
                                                <p>Time Spent</p>
                                            </div>
                                            <div className='col-6'>
                                                <input className='form-control' name='timeTrackingRemaining' min='0'  onChange={(e) => {setTracking({...tracking,timeTrackingRemaining: e.target.value}); formik.setFieldValue('timeTrackingRemaining', e.target.value)}} type='number' />
                                                <p>Time Remaining</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-12">
                            <Editor
                                name='description'
                                // value={formik.values.description}
                                onEditorChange={() => { formik.setFieldValue('description', editorRef.current.getContent()) }}
                                // onEditorChange={(content, editor) => {
                                //     setFieldValue('description',content);
                                // }}

                                onInit={(evt, editor) => editorRef.current = editor}
                                // initialValue="<p>This is the initial content of the editor.</p>"
                                // initialValue={formik.values.description}
                                value={formik.values.description}
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}

                            />
                        </div >

                    </div>
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormCreateTask