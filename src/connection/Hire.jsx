import { Box } from "@mui/material";
import Home from "../HomeCompoent/Home";
import Title from "../Title";
import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <Box>
      <Home></Home>
      <Link to={"/contact"}>
        <Title title="Click for " colored="Hire">
          {" "}
        </Title>
      </Link>
    </Box>
  );
};

export default Hire;
