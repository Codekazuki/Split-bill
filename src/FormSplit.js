import React, { useState } from "react";
import Button from "./Button";

const FormSplit = ({ selectedFriend }) => {
  function handleSplitBill(e) {
    e.preventDefault();
  }

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPayingBill, setWhoIsPayingBill] = useState("user");

  return (
    <form className='form-split-bill'>
      <h2>split bill with {selectedFriend.name}</h2>
      <label>💵 Bill value</label>
      <input
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        type='text'
      />
      <label>💷 Your expense</label>
      <input
        type='text'
        value={paidByUser}
        onChange={(e) => setPaidByUser(e.target.value)}
      />
      <label>💸 {selectedFriend.name} expense</label>
      <input type='text' disabled />
      <label>Who is paying the bill?</label>
      <select
        value={whoIsPayingBill}
        onChange={(e) => setWhoIsPayingBill(e.target.value)}
      >
        <option value='user'>Me</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button onSubmit={handleSplitBill}>Split bill</Button>
    </form>
  );
};

export default FormSplit;
