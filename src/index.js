import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail"; 
import ApprovalCard from "./ApprovalCard";




const App = ()=>{
   
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning</h4>
                Are you sure , you want to do this?
            </div>
        </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="sam" time="Today at 6.00 PM" content="nice blog post!"  /></ApprovalCard>
             {/* <CommentDetail author="sam" time="Today at 6.00 PM" content="nice blog post!"  avatar={faker.image.avatar()}/> */}
            <ApprovalCard><CommentDetail author="Alex" time="Today at 12.00 PM" content="keep it up" /></ApprovalCard>
            <ApprovalCard>CommentDetail author="Jane" time="yesterday at 6.00 PM" content="great job" /></ApprovalCard>

        </div>
            
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'))