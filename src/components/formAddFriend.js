import React, { useState } from "react";
import Button from "./button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmitButton(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (!name || !image) return;
    const newFriend = {
      id: id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-firend" onSubmit={handleSubmitButton}>
      <label>👩🏼‍🤝‍🧑🏽Friend Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>👨‍🏫 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>

      <Button>Add</Button>
    </form>
  );
}
