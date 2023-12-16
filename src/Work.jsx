import { Box, Grid, IconButton } from "@mui/material";
import Title from "./Title";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreativeCard from "./CreativeCard";
import { imgData } from "./creativeData";



const Work = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return ( 
    <Box> 

      <Grid container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Title title="Running" colored="project"></Title>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Grid  sx={{  }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="ELECTRICAL" />
              <Tab label="MANAGERIAL" />
              <Tab label="MECHANICAL" />
            </Tabs>
          </Grid>
          <IconButton
            onClick={() => setValue(value - 1)}
            disabled={value === 0}>
            <ArrowBackIcon
              sx={{
                border: "2px  solid green",
                borderRadius: "50%",
              }}
              color="secondary" 
            />
          </IconButton>
          <IconButton 
           onClick={() => setValue(value + 1)}
           disabled={value === 2}
          >
            <ArrowForwardIcon
             
              sx={{
                border: "2px  solid green",
                borderRadius: "50%",
              }}
              color="secondary"
            />
          </IconButton>
        </Grid>
      </Grid>
      {/* Card section */}

   <Box
   
   >
   <Grid container sx={{
    display: 'flex', 
    justifyContent: 'center'
   }}>
     {
        imgData[value].map((imge => 
          <Grid item key={''}>
            <CreativeCard imagehere={imge}/>

          </Grid>
          ))
      }
     </Grid>
   </Box>
    </Box>
  );
};

export default Work;
