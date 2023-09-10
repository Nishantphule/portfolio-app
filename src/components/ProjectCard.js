import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ name, description, github, deployed, img }) {
    return (
        <Card sx={{ maxWidth: 345 }} className='skillCard'>
            <CardMedia
                component="img"
                alt={name}
                height="min-content"
                image={img}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href={github} target='_blank' rel='noreferrer'>Github</a></Button>
                <Button size="small"><a href={deployed} target='_blank' rel='noreferrer'>Netlify</a></Button>
            </CardActions>
        </Card>
    )
}
