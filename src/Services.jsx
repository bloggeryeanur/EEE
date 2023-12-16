import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Title from "../src/Title";

import { Box, Grid } from "@mui/material";
import { useState } from "react";

// Card js
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
// Card js end

// Import image Start
const itemData = [
  {
    img: "/src/assets/images.png",
    id: 1,
  },
  {
    img: "/src/assets/chat.png",
    id: 2,
  },
  {
    img: "/src/assets/face.png",
    id: 3,
  },
];
// Import image end
const Services = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box sx={{ mt: "4rem" }}>
      <Title title="My Recent work" colored="ELECTRICAL" />
      <Grid container 
      
      >
        {itemData.map((im) => (
          <Grid key={im.id} item xs={12} sm={6} lg={4} sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Abdullah Al Mamun Khan"
                subheader="December 15, 2023"
              />
              <CardMedia
                component="img"
                height="100px"
                width="200px"
                image={im.img}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Perform site inspections and monitors the building and BMS
                  alarms. ◆ Perform preventative maintenance on-site
                  infrastructure (e.g., HT, LT, Transformer, UPS Generator,
                  Chiller, AHU/FCU, CRAC, Fire alarm, Fire protection). ◆
                  Undertake repairs and corrective maintenance. ◆ Assist Team
                  Lead in coordinating critical infrastructure. ◆ Site
                  Administration. ◆ Completion of site logs and data gathering
                  for permits, such as MOS and RA. ◆ Incident Management. ◆
                  Respond to all on-site incidents and acts as required. ◆
                  Wiring and installation of M & E equipment. ◆ Work Orders. ◆
                  Complete complex work requests and circuit installations. ◆
                  Co-ordinate with ven
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon color="secondary" />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon color="info" />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more">
                  <ExpandMoreIcon color="success" />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Develop maintenance procedures and ensure implementation. ◆
                    Carry out inspections of the facilities to identify and
                    resolve issues. ◆ Check electrical and mechanical systems of
                    buildings to ensure the functionality. ◆ Plan and oversee
                    all repair and installation activities. ◆ Maintenance of
                    Critical Power (UPS, Generator, etc.). ◆ Allocate workload
                    and supervise upkeep staff (custodians, janitors, etc.). ◆
                    Monitor equipment inventory and place orders when necessary.
                    ◆ Monitor expenses and control the budget for maintenance. ◆
                    Manage relationships with contractors and service providers.
                    ◆ Keep maintenance logs and report on daily activities. ◆
                    Ensure health and safety policies comply with MOM & BCA.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
