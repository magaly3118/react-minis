import { useState } from "react";
import Button from "./Button";

const USER = "user";
const FRIEND = "friend";

export default function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState(USER);

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    var balanceChange = whoIsPaying === USER ? paidByFriend : -paidByUser;

    onSplitBill(balanceChange);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💲 Bill value</label>
      <input
        type="number"
        value={bill}
        placeholder="0"
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍 Your expenses</label>
      <input
        type="number"
        value={paidByUser}
        placeholder="0"
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👯 {friend.name}'s expenses</label>
      <input type="text" value={paidByFriend} disabled />

      <label>💸Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value={USER}>You</option>
        <option value={FRIEND}>{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
