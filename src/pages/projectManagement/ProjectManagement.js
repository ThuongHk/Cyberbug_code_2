import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import {
  Divider,
  Space,
  Table,
  Button,
  AutoComplete,
  Popover,
  Avatar,
} from 'antd'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import FormEdit from '../../components/formEdit/FormEdit'
import {
  ADD_USER_PROJECT_SAGA,
  DELETE_MEMBER,
  DELETE_PROJECT_SAGA,
  GET_LIST_PROJECT_SAGA,
  PUSH_USER_ARRAY_SAGA,
  UPDATE_PROJECT_SAGA,
} from '../../redux/constan/author'
import { openFormEdit } from '../../redux/reducer/cyberbugModalSlice'
import { dataEdit } from '../../redux/reducer/projectEditSlice'
import styles from './ProjectManagement.module.scss'
// const parse = require('html-react-parser');

const ProjectManagement = () => {
  const projectList = useSelector((state) => state.listProjectSlice.listProject)
  
  const { addUserAutho } = useSelector((state) => state.savaTokenSlice)
  const [value, setValue] = useState('')
  console.log(projectList);
  

  const columns = [
    {
      title: 'categoryId',
      dataIndex: 'categoryId',
      sorter: (a, b) => a.categoryId - b.categoryId,
    },

    {
      title: 'projectName',
      dataIndex: 'projectName',
      render: (text,record,index) => {return <NavLink to={`${record.id}`}>{text}</NavLink>},
      sorter: (a1, b1) => {
        let a = a1.projectName.trim().toLowerCase()
        let b = b1.projectName.trim().toLowerCase()
        if (a < b) {
          return -1
        }
        return 1
      },
    },
    {
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: 'category',
      dataIndex: 'categoryName',
      sorter: (a, b) => a.categoryId - b.categoryId,
    },
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'members',
      dataIndex: 'members',
      render: (text, record, index) => {
        return (
          <div>
            {record.members?.slice(0, 2).map((member, index) => {
              return (
                <Popover placement="bottom" title={'Member'} content={() => {
                  return <table className="table">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.members?.map((member, index) => {
                        return <tr key={index}>
                          <td>{member.userId}</td>
                          <td><img style={{width: '20px', height: '20px'}} src={member.avatar} /></td>
                          <td>{member.name}</td>
                          <td><button className="btn btn-danger btn-sm" onClick={()=>{
                            dispatch({
                              type: DELETE_MEMBER,
                              memberItem: {
                                "projectId": record.id,
                                "userId": member.userId
                              }
                            })

                          }}>X</button></td>
                        </tr>
                      })}
                    </tbody>

                  </table>
                }}>
                  <Avatar key={index} src={member.avatar} />
                </Popover>
              )
            })}

            {record.members.length > 2 ? <Avatar>...</Avatar> : ''}

            {/* --------AutoComplete-------- */}
            <Popover
              placement="bottomLeft"
              title={'Add member'}
              content={() => (
                <AutoComplete
                  style={{ width: '100%' }}
                  options={addUserAutho?.map((user, index) => {
                    return { lable: user.name, value: user.userId.toString() }
                  })}

                 
                       
                  onSelect={(value, option) => {
                    console.log('option', option)
                    setValue(option.lable)
                    dispatch({
                      type: PUSH_USER_ARRAY_SAGA,
                      userItem: {
                        "projectId": record.id,
                        "userId": option.value
                      }
                    })
                  }}
                  value={value}
                  onChange={(text) => {
                    setValue(text)
                  }}
                  
                  // sự kiện onSearch gửi value lên và server trả về mảng options, còn sự kiện onSelect khi click 
                  // vào bất kỳ user nào xuất hiện dưới list AutoComlete thì sẽ thêm user đó vào mảng
                  
                  onSearch={(value) => {
                    dispatch({
                      type: ADD_USER_PROJECT_SAGA,
                      keyWord: value,
                    })
                  }}
                />
              )}
              trigger="click"
            >
              <Button className="btn btn-outline-primary btn-sm">+</Button>
            </Popover>

            {/* --------AutoComplete-------- */}
          </div>
        )
      },
    },

    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record, index) => (
        
        <Space size="middle">
         
          <button
            className="btn btn-warning btn-sm"
            onClick={() => {
              const action = {
                visible: true,
                Component: <FormEdit />,
              }
            
              dispatch(openFormEdit(action))
              dispatch(dataEdit(record))
            }}
          >
            <EditOutlined />
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              dispatch({
                type: DELETE_PROJECT_SAGA,
                projectId: record.id,
              })
            }}
          >
            <DeleteOutlined />
          </button>
        </Space>
      ),
    },
  ]
 

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: GET_LIST_PROJECT_SAGA,
    })
  }, [])

  return (
    <div className={styles.container}>
      <Divider>Project Management</Divider>
      <Table
        columns={columns}
        rowKey={'id'}
        dataSource={projectList}
        width={200}
      />
    </div>
  )
}
export default ProjectManagement





// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
// ]