import React from "react";
import { Button, Icon } from "antd";

const Controls = props => {
  return (
    <Button.Group size="large" onClick={props.handleClick}>
      <Button type="primary" id="diskike">
        <Icon type="dislike" />
        Dislike
      </Button>
      <Button type="primary" id="like">
        Like
        <Icon type="like" />
      </Button>
    </Button.Group>
  );
};

export default Controls;
