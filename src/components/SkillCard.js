import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SkillCard({ name, link }) {
    return (
        <Card sx={{ maxWidth: 345 }} className='skillCard'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="min-content"
                    image={link}
                    alt={name}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
