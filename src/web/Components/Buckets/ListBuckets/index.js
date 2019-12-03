import React, { useState } from "react";
import { Card, Button, Segment, Modal } from "semantic-ui-react";
import BucketCard from "../BucketCard";

const ListBuckets = ({ buckets, addNewBucket, updateBucket, deleteBucket }) => {
  const [open, toggleModal] = useState(false);
  const [name, setName] = useState(null);
  const [bucketList, setBucketList] = useState(buckets);

  const handleSubmit = name => {
    setBucketList([...bucketList, { name, tasks: [] }]);
    addNewBucket({ bucket: { name } })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setName(null);
  };

  return (
    <Segment fluid>
      <div style={{ padding: "1em" }}>
        <Button primary onClick={e => toggleModal(!open)}>
          Create Bucket
        </Button>
      </div>
      <Card.Group>
        {bucketList.length > 0
          ? bucketList.map(bucket => {
              return (
                <BucketCard
                  bucket={{ ...bucket }}
                  updateBucket={updateBucket}
                  deleteBucket={deleteBucket}
                />
              );
            })
          : []}
      </Card.Group>

      <Modal size="small" open={open}>
        <Modal.Header>Create Bucket</Modal.Header>
        <Modal.Content>
          <form>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Bucket name"
            />
          </form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={e => {
              toggleModal(!open);
              handleSubmit(name);
            }}
            primary
          >
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    </Segment>
  );
};

export default ListBuckets;
