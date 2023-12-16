import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const Branding = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    background: "#e6ee9c",
    height: "70vh",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)",
    display: "flex",
    justifyContent: "space-between",
  }));

  return (
    <Branding>
      <Stack spacing={5} sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            lineHeight: "1.3",
            fontWeight: "bold",
            width: "50%",
          }}>
          Abdullah Al Mamun Khan
        </Typography>

        <Typography sx={{ width: "80%" }}>
          Experienced Facilities Engineer with a demonstrated history of working
          in the Critical Environment such as Datacenter & Healthcare. Skilled
          in Data Center, Critical Facilities Operation, Facility Management,
          Electrical Engineering, Building Automation System (BAS), M&E
          Preventive and Corrective Maintenance.
        </Typography>
       <Link to={'/contact'}>
       <Button sx={{ width: "20%" }} variant="contained" color="secondary">
          HIRE ME
        </Button></Link>
      </Stack>
      <Box sx={{ width: "50%", display: ["none", "none", "block"] }}>
        <img
          style={{ width: "100%", height: "95%", borderRadius: "50%" }}
          src="../src/assets/creative.jpg"
          alt=""
        />
      </Box>
    </Branding>
  );
};

export default Home;
