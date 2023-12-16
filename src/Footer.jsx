import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background:'gray'
      }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          xxl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: 'white'
          }}>
          <Box
          s
          
          >
            <Typography variant="h5" component='h2' sx={{color:'yellow'}}>Office Address</Typography>
            <Typography>Montreal, QC, Canada</Typography>
            <Typography>Support : elt@mamunkhan.com</Typography>
            <Typography>Helpline : +1 (613) 890 5325</Typography>
            <Typography>(Available : sun-fir, 10:00 am to 06:00 pm)</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          xxl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: 'yellow'
          }}>
          <Box
        
          >
            <h3>Useful Links</h3>
            <Typography>
              <Link to={"/research"}>Blog</Link>
            </Typography>
            <Typography>
              <Link to={"/myproduct"}>Best Perfrom Product</Link>
            </Typography>
            <Typography>
              <Link to={"/about"}>About My Company</Link>
            </Typography>
            <Typography>
              <Link to={""}>Privacy & App Privacy Policy</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid 
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          xxl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box
            sx={{
              color:'yellow'
            }}
          >
            <h3>Follow Me</h3>
            <Link to={"https://www.facebook.com/badhon.khan.180"}>
              <FacebookIcon />
            </Link>

            <Link to={"https://www.facebook.com/badhon.khan.180"}>
              <LinkedInIcon />
            </Link>
            <Link to={"https://www.facebook.com/badhon.khan.180"}>
              <InstagramIcon />
            </Link>

            <Link to={"https://www.facebook.com/badhon.khan.180"}>
              <TwitterIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
