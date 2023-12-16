import { Box } from "@mui/material";
import Home from "./Home";
import Brand from '../Brand'
import Services from "../Services";
import Work from "../Work";

const AllPage = () => {
    return (
        <Box>
            <Home></Home>
            <Brand></Brand>
            <Services></Services>
            <Work></Work>
        </Box>
    );
};

export default AllPage;