import React, { useState } from "react";
import Button from "./Button";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const FormAddFriend = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");
  return (
    <form className='form-add-friend'>
      <label>👩🏿‍🤝‍👩🏿Friend name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
      />

      <label>🖼️ Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
