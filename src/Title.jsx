import { Box, Typography } from "@mui/material";

const Title = ({ title, colored }) => {
  return (
    <Box sx={{ m: "5rem 0 5rem" }}>
      <Typography
        sx={{
          fontSize: "34px",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        {title}
        {""}
        {colored && (
          <span style={{ color: "#afb42b", margin: "11px" }}>{colored}</span>
        )}
      </Typography>
    </Box>
  );
};

export default Title;
