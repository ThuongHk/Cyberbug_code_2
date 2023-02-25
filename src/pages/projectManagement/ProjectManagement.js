import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Divider, Space, Table } from 'antd';
import parse from 'html-react-parser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormEdit from '../../components/formEdit/FormEdit';
import { GET_LIST_PROJECT_SAGA, UPDATE_PROJECT_SAGA } from '../../redux/constan/author';
import { openFormEdit } from '../../redux/reducer/cyberbugModalSlice';
import { dataEdit } from '../../redux/reducer/projectEditSlice';
import styles from './ProjectManagement.module.scss'
// const parse = require('html-react-parser');

const ProjectManagement = () => {
  const projectList = useSelector(state => state.listProjectSlice.listProject);
  
  const columns = [
    {
      title: 'categoryId',
      dataIndex: 'categoryId',
      sorter: (a, b) => a.categoryId - b.categoryId
    },
    
    {
      title: 'projectName',
      dataIndex: 'projectName',
      sorter: (item1, item2) => {
        let a = item1.projectName.trim().toLowerCase();
        let b = item2.projectName.trim().toLowerCase();
        if (a < b) {
          return -1
        }
        return 1
      }
    },
    {
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: 'category',
      dataIndex: 'categoryName',
      sorter: (a, b) => a.categoryId - b.categoryId
    },
    {
      title: 'id',
      dataIndex: 'id',
    },
    

    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          <button className='btn btn-warning btn-sm'
            onClick={() => {
              const action = {
                visible: true,
                Component: <FormEdit />
              }
              dispatch(openFormEdit(action))
             dispatch(dataEdit(record))

            }}
          ><EditOutlined /></button>
          <button className='btn btn-danger btn-sm'><DeleteOutlined /></button>
        </Space>
      ),
    },
  ];
  const data = [

    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',

    },
  ];




  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_LIST_PROJECT_SAGA
    })
  }, [])

  

  return (
    <div className={styles.container}>
      <Divider>Project Management</Divider>
      <Table columns={columns} rowKey={'id'} dataSource={projectList} width={200} />

    </div>
  )
};
export default ProjectManagement;