type Props = {
  name: string;
  age: number;
};

export function Welcome({ name, age }: Props) {
  return (
    <div className="welcome">
      <p>Welcome {name}</p>
      <p>You have {age} years old </p>
    </div>
  );
}