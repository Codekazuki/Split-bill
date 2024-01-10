import React from "react";
import Button from "./Button";

const FormAddFriend = () => {
  return (
    <form>
      <label>🫂Friend name</label>
      <input type='text' placeholder='friend name' />
      <label>🖼️ Image URL</label>
      <input type='text' />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
