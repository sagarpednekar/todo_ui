import React, { useState } from "react";
import { Card, Button, Segment, Modal } from "semantic-ui-react";
import BucketCard from "../BucketCard";

const ListBuckets = ({ buckets }) => {
  const [open, toggleModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [bucketList, setBucketList] = useState(buckets);

  const handleSubmit = title => {
    setBucketList([...bucketList, { title, tasks: [] }]);
    setTitle(null);
  };

  return (
    <Segment fluid>
      <div style={{ padding: "1em" }}>
        <Button primary onClick={e => toggleModal(!open)}>
          Create Bucket
        </Button>
      </div>
      <Card.Group>
        {/* <BucketCard bucket={{ ...bucketList }} /> */}
        {/* <BucketCard bucket={{ ...bucketList }} />
        <BucketCard bucket={{ ...bucketList }} />
        <BucketCard bucket={{ ...bucketList }} />
        <BucketCard bucket={{ ...bucketList }} /> */}
        {bucketList.length > 0
          ? bucketList.map(bucket => {
              return <BucketCard bucket={{ ...bucket }} />;
            })
          : []}
      </Card.Group>

      <Modal size="small" open={open}>
        <Modal.Header>Create Bucket</Modal.Header>
        <Modal.Content>
          <form>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Bucket name"
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
    </Segment>
  );
};

export default ListBuckets;
