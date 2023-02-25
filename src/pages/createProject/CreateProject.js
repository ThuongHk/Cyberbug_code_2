import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_CATEGORY_SAGA } from '../../redux/constan/cyberbugCategory';
import styles from './CreateProject.module.scss'
import { NEW_PROJECT_SAGA } from '../../redux/constan/author';

const CreateProject = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch({
        type: GET_ALL_CATEGORY_SAGA
       })
    },[])
    const {arrProjectCategory} = useSelector(state => state.cyberbugCategory);
    
    const formik = useFormik({        
        initialValues: {
            projectName: '',
            description: '',
            categoryId: ''
        },
        onSubmit: values => {
           dispatch({
            type: NEW_PROJECT_SAGA,
            newProject: values
           })
        }
    })
    const editorRef = useRef(null);
    const log = () => {       
        if (editorRef.current) {
            // console.log(editorRef.current.getContent());
        }
    };    
    return (
        <div className={styles.container}>
            <h3>CreateProject</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <p>Name</p>
                    <input className='form-control'
                        name='projectName'
                        value={formik.values.projectName}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="form-group">
                    <p>Description</p>
                    <Editor
                        name='description'
                        value={formik.values.description}
                        onEditorChange={()=>{formik.setFieldValue('description', editorRef.current.getContent())}}

                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue="<p>This is the initial content of the editor.</p>"
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
                <div className="form-group">
                    <select className='form-control'  name='categoryId'  value={formik.values.id}
                        onChange={formik.handleChange}>
                        {arrProjectCategory.map((item, index)=>{
                            return (
                                <option value={item.id} key={index}>{item.projectCategoryName}</option>
                            )
                        })}
                    </select>
                </div>
                <button type='submit' onClick={log} className='btn btn-outline-primary mb-5'>Create Project</button>
            </form>
        </div>
    )
}

export default CreateProject