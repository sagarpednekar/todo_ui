import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";
import "./style.css";
const Task = ({ title, status }) => {
  const [checked, toggleCheck] = useState(status);

  return (
    <Checkbox
      className={checked ? "mark" : "unmark"}
      label={title}
      onChange={e => toggleCheck(!checked)}
      checked={checked}
    />
  );
};
export default Task;
