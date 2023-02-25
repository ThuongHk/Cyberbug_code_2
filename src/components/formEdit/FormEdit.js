import { Editor } from '@tinymce/tinymce-react';
import { Formik, useFormik } from 'formik';
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_CATEGORY_SAGA, UPDATE_PROJECT_SAGA } from '../../redux/constan/cyberbugCategory';
import { callBackSubmitForm } from '../../redux/reducer/cyberbugModalSlice';

const FormEdit = (props) => {

    const dispatch = useDispatch();
    // ----lấy danh sách từ trang project manager đc lưu trên store projectEditSlice

    const {projectEdit} = useSelector(state => state.projectEditSlice)
    console.log(projectEdit);

    // ---lấy list category về ----
    useEffect(() => {
        dispatch({
            type: GET_ALL_CATEGORY_SAGA
        })
    }, [])
    const { arrProjectCategory } = useSelector(state => state.cyberbugCategory);
    console.log(arrProjectCategory);


    // ----code Antd----
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    // -----/code Antd-----


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: projectEdit.id,
            projectName: projectEdit.projectName,
            description: projectEdit.description,
            categoryId: projectEdit.categoryId
        },
        onSubmit: values => {
         
        }
    })

    // ---goi saga
    // const handleSubmit = () => {
    //    dispatch({
    //     type: UPDATE_PROJECT_SAGA,
    //     updateProject: formik.onSubmit.values
        
    //    })
    // }

    useEffect(() => {
        // dispatch(callBackSubmitForm(handleSubmit))
    }, [])
    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
            <h3>Edit Project</h3>
            <form onSubmit={Formik.handleSubmit}>
                <div className="row mb-5 d-flex">
                    <div className="col-4">
                        <div className="form-group">
                            <p>Project Id</p>
                            <input className='form-control'
                                disabled
                                name='id'
                                value={formik.values.id}
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <p>Project Name</p>
                            <input className='form-control'
                                name='projectName'
                                value={formik.values.projectName}
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <select className='form-control' name='categoryId' value={formik.values.categoryId}
                                onChange={formik.handleChange}>
                                {arrProjectCategory.map((item, index) => {
                                    return (
                                        <option value={item.id} key={index}>{item.projectCategoryName}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div className="form-group">
                    <p>Description</p>
                    <Editor
                        name='description'
                        // value={formik.values.description}
                        onEditorChange={() => { formik.setFieldValue('description', editorRef.current.getContent()) }}

                        onInit={(evt, editor) => editorRef.current = editor}
                        // initialValue="<p>This is the initial content of the editor.</p>"
                        initialValue={formik.values.description}
                        value = {formik.values.description}
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

                </div>
                    </div>
                </div>

                <button type='submit' onClick={log} className='btn btn-outline-primary mb-5'>Create Project</button>

            </form>
        </div>
    )
}

export default FormEdit