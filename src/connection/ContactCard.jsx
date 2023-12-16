import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";

const ContactCard = ({location,phone,house,country}) => {
    return (
        <Box>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image="/src/assets/creative.jpg"
                alt="Abdullah al Manun Khan"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ABDULLAH AL MAMUN KHAN({country})
                </Typography>

                <Box sx={{ display: "flex" }}>
                  <LocationOnIcon color="secondary" />
                  <Typography>{location}</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CallIcon color="secondary" />
                  <Typography>{phone}</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <AddHomeWorkIcon  color='secondary'/>
                  <Typography sx={{marginLeft: '10px'}}>{house}</Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
    );
};

export default ContactCard;