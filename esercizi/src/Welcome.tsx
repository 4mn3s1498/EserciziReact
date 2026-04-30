import { Age } from "./Age";

type Props = {
  name: string;
  age: number;
};

export function Welcome({ name, age }: Props) {
  return (
    <div>
      <p>Welcome {name}</p>
      <Age age={age} />
    </div>
  );
}