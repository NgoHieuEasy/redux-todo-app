import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {v4 as uuidv4} from 'uuid'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodoName } from '../../redux/actions';
import { todoRemaingding } from '../../redux/selector';

export default function TodoList() {
  const [todoName,setTodoName]=useState();
  const [prioriry,setPrioriry]=useState('Medium');

  const dispatch=useDispatch();

  const todoList=useSelector(todoRemaingding);

  const handleAddToDo=()=>{
    dispatch(addTodoName({
      id:uuidv4,
      name:todoName,
      prioriry:'',
      completed:false
    }));
    setTodoName('');
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' /> */}
        {
          todoList.map(todoList=>
            <Todo key={todoList.name} name={todoList.name} prioriry={todoList.prioriry} completed={todoList.completed} />
            )
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={e=>setTodoName(e.target.value)} />
          <Select defaultValue="Medium" value={prioriry} onChange={e=>setPrioriry(e)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddToDo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
