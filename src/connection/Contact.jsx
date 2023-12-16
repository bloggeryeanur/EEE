import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Grid, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MessageIcon from "@mui/icons-material/Message";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactCard from "./ContactCard";
import ContactTime from "./ContactTime";

const Contact = ({ location, phone, house, country }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          padding: " 33px",
        }}>
        <Box sx={{ "& > :not(style)": { m: 2 } }}>
          <Typography sx={{ fontSize: "28px" }}>Contact Me </Typography>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Your Full Name
            </InputLabel>
            <Input
              type="text"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            type="text"
            id="input-with-icon-textfield"
            label="Your Message"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MessageIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type="email"
              id="input-with-sx"
              label="Your Email"
              variant="standard"
            />

            <ContactPhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type="number"
              id="input-with-sx"
              label="Contact Number"
              variant="standard"
            />
          </Box>

          <Box>
            <Button variant="outlined" color="secondary">
              Send
            </Button>
          </Box>
          <h1>Or</h1>
        </Box>
      </Box>
      {/* Canada Address Start Here */}

      <Grid 
      container 
      justifyContent="center"
       alignItems="center">
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ContactCard
            location="Montreal, QC, Canada"
            phone="+1 (613) 890 5325"
            house="14/3"
            country="Canada"></ContactCard>
        </Grid>
        {/* Travaling */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <ContactTime></ContactTime>
        </Grid>
        {/* Bangladesh Address */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ContactCard
            location="Dhanmondhi, Dhaka, Bangladesh"
            phone="+88 (01) 841865428"
            house="32/27/3"
            country="Bangladesh"></ContactCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
