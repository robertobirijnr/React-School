import React from "react";
import ReactDom from "react-dom";
import CommentDetails from "./commentDetails";
import ApprovalCard from "./approvalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          name="Robert"
          time="10:30pm"
          comment="Nice Blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          name="Eben"
          time="1:00pm"
          comment="I love React"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          name="Eugenia"
          time="6:30am"
          comment="Welcome to React"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
