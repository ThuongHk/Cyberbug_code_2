import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import { ADD_TASK_LIST_SAGA, CHECK_DONE_TASK_SAGA, DELETE_TASK, GET_TASK_LIST_SAGA, REJECT_TASK } from '../redux/constan/todolist';
import styles from './Todolist.module.css'

export default function TodolistRFC(props) {

    const dispatch = useDispatch();
    const { taskList } = useSelector(state => state.todolistSlice);
    const textRef = useRef();
    console.log(taskList);

    let [state, setState] = useState({
        taskList: [],
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    });

    const handleChange = (e) => {
        let { value, name } = e.target;
        let newValues = { ...state.values };

        newValues = { ...newValues, [name]: value };

        let newErrors = { ...state.errors };

        let regexString = /^[a-z A-Z]+$/;

        if (!regexString.test(value) || value.trim() === '') {
            newErrors[name] = name + ' invalid !';
        } else {
            newErrors[name] = '';
        }


        setState({
            ...state,
            values: newValues,
            errors: newErrors
        })
    }


    const getTaskList = () => {
       dispatch({
        type: GET_TASK_LIST_SAGA
       })
    }

    const addTask = (e) => {
       e.preventDefault()
       dispatch({
        type: ADD_TASK_LIST_SAGA,
        taskName: state.values.taskName
       })
       setState({ 
        ...state,
        values: {...state.values, taskName: ''}
       });
       textRef.current.focus();
    }

    useEffect(() => {
        getTaskList();


        return () => {

        }
    }, [])

    //Xử lý reject task
    const rejectTask = (taskName)=>{
      dispatch({
        type: REJECT_TASK,
        taskName: taskName
      })
    }

    //Xử lý done task
   const  checkTask = (taskName) => {
      dispatch({
        type: CHECK_DONE_TASK_SAGA,
        taskName: taskName
      })
    }


    //Hàm xử lý xóa task
    const delTask = (taskName) => {
      dispatch({
        type: DELETE_TASK,
        taskName: taskName
      })
    }


    const renderTaskToDo = () => {
        return taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className={styles.buttons}>
                    <button className={styles.remove} type="button" onClick={() => {
                        delTask(item.taskName)
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className={styles.complete1} onClick={() => {
                        checkTask(item.taskName)
                    }}>
                        <i className="far fa-check-circle" />
                       
                    </button>
                </div>
            </li>
        })
    }


    const renderTaskToDoDone = () => {
        return taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className={styles.buttons}>
                    <button className={styles.remove} type="button" onClick={() => {
                        delTask(item.taskName)
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className={styles.complete} onClick={() => {
                        rejectTask(item.taskName)
                    }}>
                        <i class="fa fa-undo-alt"></i>              
                    </button>
                </div>
            </li>
        })
    }


    return (
        <>
        <Loading />
        <div className={styles.card}>
           
            <div className={styles.card__header}>
                <img src={require('./bg.png')} />
            </div>
            {/* <h2>hello!</h2> */}
            <form className={styles.card__body} onSubmit={addTask}>
                <div className={styles.card__content}>
                    <div className={styles.card__title}>
                        <h2>My Tasks</h2>
                        <p>September 9,2020</p>
                    </div>
                    <div className={styles.card__add}>
                        <input id={styles.newTask} value={state.values.taskName} ref={textRef} name="taskName" type="text" placeholder="Enter an activity..." onChange={handleChange} />
                        <button id="addItem" type="submit" onClick={addTask}>
                        <i class="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className={styles.cardTodo}>
                        {/* Uncompleted tasks */}
                        <ul className={styles.todo} id="todo">
                            {renderTaskToDo()}
                        </ul>
                        {/* Completed tasks */}
                        <ul className={styles.todo} id="completed">
                            {renderTaskToDoDone()}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        </>

    )
}
