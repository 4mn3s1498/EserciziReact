import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";

export interface GithubUser {
  id: number;
  login: string;
  name: string;
}

interface UsersState {
  users: GithubUser[];
  loading: boolean;
  error: string | null;
}

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [], loading: false, error: null } as UsersState,
  reducers: {
    addUser(state, action: PayloadAction<GithubUser>) {
      state.users.push(action.payload);
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { addUser, removeUser, setLoading, setError } = usersSlice.actions;
export default usersSlice.reducer;

export const fetchUser = (username: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("Utente non trovato");
    const user: GithubUser = await response.json();
    dispatch(addUser(user));
    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export function ReduxGithubUsers() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);

  return (
    <>
      <h2>GitHub Users</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nome utente" />
      <button onClick={() => dispatch(fetchUser(username))}>Cerca</button>
      {loading && <p>Caricamento...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => <li key={user.id}>{user.login}</li>)}
      </ul>
    </>
  );
}