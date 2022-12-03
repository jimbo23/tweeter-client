import { SlUserFollow } from "react-icons/all";
import { Button } from "@kiefer-tweeter/components";
import { NavBar } from "@kiefer-tweeter/layouts";

function App() {
  return (
    <>
      <NavBar />
      <Button leftIcon={SlUserFollow}>Follow</Button>
      <Button leftIcon={SlUserFollow}>Following</Button>
      <Button>Following</Button>
      <Button>Tweet</Button>
    </>
  );
}

export default App;
