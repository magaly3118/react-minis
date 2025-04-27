export default function Output({ bill, percent1, percent2 }) {
  const tip_percent = (percent1 + percent2) / 2 / 100;
  const tip = bill * tip_percent;
  const total = bill + tip;

  return (
    <div>
      <p>
        You pay ${total} (${bill} + ${tip} tip)
      </p>
    </div>
  );
}
