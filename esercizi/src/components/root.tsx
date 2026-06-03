import store from "../store";
import { ReduxCounter } from "./counter";
import { ReduxGithubUsers } from "./fetch";

store.subscribe(() => {
  console.log("Nuovo stato:", store.getState());
});

function Root() {
  return (
    <>
      <ReduxCounter />
      <hr />
      <ReduxGithubUsers />
    </>
  );
}

export default Root;