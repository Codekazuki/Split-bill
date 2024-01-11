import React from "react";
import Button from "./Button";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
function Friend({ friend }) {
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
      <Button>Select</Button>
    </li>
  );
}
export default FriendList;
