import "./App.css";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplit from "./FormSplit";
import FriendList from "./FriendList";
import { useState } from "react";

function App() {
  const [showAddFriend, setshowAddFriend] = useState(true);

  function handleShowAddPerson() {
    setshowAddFriend((show) => !show);
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddPerson}>
          {showAddFriend ? "close" : "add person"}
        </Button>
      </div>
      <FormSplit />
    </div>
  );
}

export default App;
