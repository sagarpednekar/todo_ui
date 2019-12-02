import React, { useState } from "react";
import { Card, Button, Icon, List, Input } from "semantic-ui-react";
import { Modal } from "semantic-ui-react";

import Task from "../Task";
const BucketCard = ({ bucket }) => {
  const [taskList, setTaskList] = useState(bucket.tasks);
  const [open, toggleModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [bucketData, setBucketData] = useState({
    title: bucket.title,
    isEditable: false
  });
  // const [taskData, setTaskData] = useState({
  //   title: "",
  //   isEditable: false
  // });

  const handleSubmit = title => {
    setTaskList([
      ...taskList,
      { id: taskList.length + 1, title, status: false }
    ]);
    setTitle(null);
  };

  const removeTask = id => {
    const newList = taskList.filter(task => task.id !== id);
    setTaskList(newList);
  };

  // const editTask = id => {
  //   const task = taskList.find(task => task.id === id);
  //   setTaskData({
  //     ...task,
  //     title: task.title,
  //     isEditable: !taskData.isEditable
  //   });
  // };

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {!bucketData.isEditable ? (
            bucketData.title
          ) : (
            <Input
              type="text"
              size="mini"
              value={bucketData.title}
              transparent
              onChange={e => {
                setBucketData({ ...bucketData, title: e.target.value });
              }}
              maxLength="18"
            />
          )}

          <Button
            icon={bucketData.isEditable ? "checkmark" : "edit"}
            circular
            onClick={e =>
              setBucketData({
                ...bucketData,
                isEditable: !bucketData.isEditable
              })
            }
            floated="right"
            size="small"
          />
        </Card.Header>

        <Modal size="small" open={open}>
          <Modal.Header>Add task</Modal.Header>
          <Modal.Content>
            <form>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Task name"
              />
            </form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={e => {
                toggleModal(!open);
                handleSubmit(title);
              }}
              primary
            >
              Add
            </Button>
          </Modal.Actions>
        </Modal>
        {taskList && taskList.length > 0 ? (
          <Card.Description style={{ marginTop: "2em" }}>
            <List>
              {taskList.length > 0
                ? taskList.map((task, index) => {
                    return (
                      <List.Item key={index}>
                        <List.Content>
                          <Task title={task.title} status={task.status} />

                          {/* {taskData && !taskData.isEditable ? (
                            <Task title={task.title} status={task.status} />
                          ) : (
                            <Input
                              type="text"
                              size="mini"
                              value={bucketData.title}
                              transparent
                              onChange={e => {
                                setBucketData({
                                  ...bucketData,
                                  title: e.target.value
                                });
                              }}
                              maxLength="18"
                            />
                          )} */}
                          <Button.Group size="mini" floated="right">
                            {/* <Button
                              icon="edit"
                              primary
                              onClick={e => editTask(task.id)}
                            />
                            <Button.Or /> */}
                            <Button
                              icon="remove"
                              onClick={e => removeTask(task.id)}
                            />
                          </Button.Group>
                        </List.Content>
                      </List.Item>
                    );
                  })
                : []}
            </List>
          </Card.Description>
        ) : (
          <></>
        )}
      </Card.Content>
      <Card.Content>
        <Button
          icon
          floated="left"
          labelPosition="right"
          onClick={e => toggleModal(!open)}
          size="small"
        >
          Add Task
          <Icon name="add" />
        </Button>
      </Card.Content>
    </Card>
  );
};
export default BucketCard;
