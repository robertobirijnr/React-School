import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text load">{props.message}</div>
    </div>
  );
};

export default Spinner;
