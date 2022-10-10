import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./App.css";

// TODO: Make this check if user is logged in or not

const App = () => {
  return (
    <Link to="/create">
      <Button>Create timer</Button>
    </Link>
  );
};

export default App;
