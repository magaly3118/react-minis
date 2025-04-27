export default function Bill({ amount, setBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={amount}
        onChange={(e) => {
          setBill(Number(e.target.value));
        }}
      />
    </div>
  );
}
