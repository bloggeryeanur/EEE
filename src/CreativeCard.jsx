import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const CreativeCard = ({imagehere}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ 
            height: 200,
            margin: 2,
         }}
        image={imagehere}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ELECTRICAL SYSTEM 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Typography>EEE.</Typography>
      <CardActions
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center'
      }}
      >
        <Typography
        sx={{
            fontWeight: 'bold',
            fontSize: '18px',
            marginLeft: '-8px'
        }}
        >Electrical and Electronic Engineering</Typography>
        <IconButton
        sx={{
            border: '2px solid'
        }}
        > 
            <AddIcon color='secondary'/>
        </IconButton>
      </CardActions>
    </Card>
    );
};

export default CreativeCard;