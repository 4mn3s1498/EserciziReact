type AgeProps = {
  age: number;
};

export function Age({ age }: AgeProps) {
  return <p>Your age is {age}</p>;
}