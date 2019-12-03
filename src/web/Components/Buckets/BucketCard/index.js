import React, { useState } from "react";
import { Card, Button, Icon, List, Input } from "semantic-ui-react";
import { Modal } from "semantic-ui-react";

import Task from "../Task";
const BucketCard = ({ bucket, updateBucket, deleteBucket }) => {
  const [taskList, setTaskList] = useState(bucket.tasks);
  const [open, toggleModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [bucketData, setBucketData] = useState({
    name: bucket.name,
    isEditable: false
  });

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

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {!bucketData.isEditable ? (
            bucketData.name
          ) : (
            <Input
              type="text"
              size="mini"
              value={bucketData.name}
              transparent
              onChange={e => {
                setBucketData({ ...bucketData, name: e.target.value });
              }}
              maxLength="18"
            />
          )}
          {bucketData.isEditable ? (
            <Button
              icon={"checkmark"}
              circular
              onClick={e =>
                updateBucket(bucket.id, { bucket: { name: bucketData.name } })
              }
              floated="right"
              size="small"
            />
          ) : (
            <Button
              icon={"edit"}
              circular
              onClick={e => {
                setBucketData({
                  ...bucketData,
                  isEditable: !bucketData.isEditable
                });
              }}
              floated="right"
              size="small"
            />
          )}
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
                          <Task title={task.name} status={task.status} />

                          <Button.Group size="mini" floated="right">
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
        <div className="ui two buttons">
          <Button basic onClick={e => toggleModal(!open)}>
            Add Task
          </Button>
          <Button
            basic
            color="red"
            onClick={e => {
              deleteBucket(bucket.id);
              console.log("clicked");
            }}
          >
            Delete Bucket
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default BucketCard;
