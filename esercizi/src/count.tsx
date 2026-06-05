export function CounterDisplay({ count }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        fontSize: "32px",
        border: "2px solid black",
        padding: "10px",
        marginBottom: "10px",
        textAlign: "center"
      }}
    >
      {count}
    </div>
  );
}