import { useState } from "react";
import Button from "./button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(" ");
  const [paiedByUser, setpaid] = useState(" ");
  const paiedByFriend = bill ? bill - paiedByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmitButton(e) {
    e.preventDefault();

    if (!bill || !paiedByUser) return;

    onSplitBill(whoIsPaying === "user" ? paiedByFriend : -paiedByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmitButton}>
      <h2> Split the bill with {selectedFriend.name} </h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>🚶‍♂️Your expens</label>
      <input
        type="text"
        value={paiedByUser}
        onChange={(e) =>
          setpaid(
            Number(e.target.value) > bill ? paiedByUser : Number(e.target.value)
          )
        }
      ></input>

      <label>🚶‍♀️ {selectedFriend.name} 's expens</label>
      <input type="text" disabled value={paiedByFriend}></input>

      <label>🤑Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user"> You </option>
        <option value="friend"> {selectedFriend.name} </option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
