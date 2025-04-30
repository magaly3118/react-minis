import { useState } from "react";
import Button from "./Button";

const imageDefault = "https://i.pravatar.cc/48";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(imageDefault);

  function handleSubmit(e) {
    e.preventDefault(); // don't reload the page

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${imageDefault}?=${id}`,
      balance: 0,
      id: id,
    };

    onAddFriend(newFriend);

    setName("");
    setImage(imageDefault);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👯 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷 Image URL</label>
      <input
        type="test"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
