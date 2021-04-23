import React, {useState} from 'react'
import{ makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo from "../images/WeCookLogo.png";
import { Flag } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        objectFit: 'cover'
    },
    crd: {
        '&:hover': {
            transition: 'all 0.3s ease-in',
            transform: 'scale(1.05)',
            boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)',
        }
    }
}));

export default function RecipeCard() {
    const [flag, setFlag] = useState(true);
    const classes = useStyles();

    const handleClick = (event) => {
        setFlag(!flag);
    }
    return (
        <div>
            <Card className={classes.crd}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            WC
                        </Avatar>
                    } 
                    title="Shrimp"
                    subheader="Date"
                />
                <CardMedia 
                    className={classes.media}
                    image="https://material-ui.com/static/images/cards/paella.jpg"
                    title="paella"
                />
                <CardContent>
                    <Typography variant='body2'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites" onClick={handleClick} color={flag ? "currentColor" : "secondary"}>
                        <FavoriteIcon />
                    </IconButton>
                    <div>
                        <Button variant="outlined">
                            View Recipe
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}
