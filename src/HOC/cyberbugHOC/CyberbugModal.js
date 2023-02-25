import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer, openDrawer } from '../../redux/reducer/cyberbugModalSlice';
import FormEdit from '../../components/formEdit/FormEdit';
const { Option } = Select;


const CyberbugModal = () => {    
   
 const dispatch = useDispatch()
  const showDrawer = () => {dispatch(openDrawer(true))} 
  
  const onClose = () =>  {dispatch(closeDrawer(false))} ;
  const {visible, Component, callBackSubmit} = useSelector(state => state.cyberbugModalSlice)
  return (
    <>
      
      <Drawer
        title="Modal"
        width={720}
        onClose={onClose}
        open={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={callBackSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
       {Component}
      </Drawer>
    </>
  );
};
export default CyberbugModal;