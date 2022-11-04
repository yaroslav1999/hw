import { Button, Form, Input, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const CardAdd = ({add2cart}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const saveInfo=(values)=>{
        setIsModalOpen(false);
        add2cart({...values, id: uuidv4()});
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>AddCard</Button>
            <Modal title="Add new card" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Form  onFinish={saveInfo} labelCol={{ span: 4 }}>
                    <Form.Item label="Title:" name="title" 
                        rules={[ { required: true, message: "Title is required" }, { min: 5 }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Message:" name="body"
                        rules={[ { required: true, message: "You should enter something" }]}>
                        <TextArea rows={3} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10 }}>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Form.Item>
                </Form>
            </Modal>
      </>
    );
}

export default CardAdd;
