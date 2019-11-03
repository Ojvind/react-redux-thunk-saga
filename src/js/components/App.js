import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import Post2 from "./Posts2";
import Post3 from "./Posts3";

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    {/* <div>
      <h2>Call API on componentDidMount</h2>
      <Post />
    </div>*/}
    <div>
      <h2>Call API using Redux Thunk</h2>
      <Post2 />
    </div> 
    <div>
      <h2>Call API using Redux Saga</h2>
      <Post3 />
    </div>
  </>
);

export default App;