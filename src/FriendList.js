import React from "react";
import Button from "./Button";

const FriendList = ({ friends, onSelection }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} />
      ))}
    </ul>
  );
};
function Friend({ friend, onSelection }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className='red'>
          You owe {friend.name} the sum of ${friend.balance}
        </p>
      )}
      {friend.balance < 0 && (
        <p className='green'>
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You are even</p>}
      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  );
}
export default FriendList;
