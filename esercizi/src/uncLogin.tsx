import { useState } from "react";

export function LoginF() {
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
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-3"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}