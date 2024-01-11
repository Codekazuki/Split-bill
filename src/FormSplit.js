import React from "react";
import Button from "./Button";

const FormSplit = ({ selectedFriend }) => {
  function handleSplitBill(e) {
    e.preventDefault();
  }
  return (
    <form className='form-split-bill'>
      <h2>split bill with {selectedFriend.name}</h2>
      <label>💵 Bill value</label>
      <input type='text' />
      <label>💷 Your expense</label>
      <input type='text' />
      <label>💸 {selectedFriend.name} expense</label>
      <input type='text' disabled />
      <label>Who is paying the bill?</label>
      <select>
        <option value='user'>Me</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button onSubmit={handleSplitBill}>Split bill</Button>
    </form>
  );
};

export default FormSplit;
