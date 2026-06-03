import { useState } from "react";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />

        <button
          type="submit"
          style={{
            backgroundColor:
              user.password.length < 8 ? "red" : "green",
            color: "white"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}