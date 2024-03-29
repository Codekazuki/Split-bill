import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}=${id}`,
      balance: 0,
    };
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
    onAddFriend(newFriend);
  }

  return (
    <form
      className='form-add-friend'
      onSubmit={handleSubmit}
      nAddFriend={onAddFriend}
    >
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
