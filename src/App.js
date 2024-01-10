import "./App.css";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplit from "./FormSplit";
import FriendList from "./FriendList";

function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplit />
    </div>
  );
}

export default App;
