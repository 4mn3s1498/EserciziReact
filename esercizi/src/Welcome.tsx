import { Age } from "./Age";
import { Message } from "./Message";

type Props = {
  name: string;
  age?: number;
};

export function Welcome({ name, age }: Props) {
  return (
    <div>
      <p>Welcome, {name}!</p>

      {/* 1. age > 18 */}
      {age !== undefined && age > 18 && <Age age={age} />}

      {/* 2. age presente */}
      {age !== undefined && <Age age={age} />}

      {/* 3. age tra 18 e 65 */}
      {age !== undefined && age > 18 && age < 65 && <Age age={age} />}

      {/* 4. age > 18 e name = John */}
      {age !== undefined && age > 18 && name === "John" && <Age age={age} />}

      {/* 5. sempre se age esiste */}
      {age !== undefined && <Age age={age} />}

      {/* Message */}
      {age !== undefined && <Message age={age} />}
    </div>
  );
}