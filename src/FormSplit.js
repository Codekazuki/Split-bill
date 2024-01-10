import React from "react";
import Button from "./Button";

const FormSplit = () => {
  return (
    <form className='form-split-bill'>
      <h2>split bill with X</h2>
      <label>💵 Bill value</label>
      <input type='text' />
      <label>💷 Your expense</label>
      <input type='text' />
      <label>💸 X's expense</label>
      <input type='text' disabled />
      <label>Who is paying the bill?</label>
      <select>
        <option value='user'>Me</option>
        <option value='friend'>X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplit;
