import React from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from "../images/My project.png"

export default function Home() {

    return (
        <Container
            sx={{
                bgcolor: 'primary',
                pt: "150px",
            }}
            maxWidth='lg'
        >
            <div className='container'>
                <Typography variant="h2" textAlign='center' gutterBottom className='big-heading typed'>
                    print("Hello!")
                </Typography>
            </div>


            <Typography variant="h2" gutterBottom textAlign='center' >
                Hii ! I am Nishant.
            </Typography>

            <Typography variant="h3" gutterBottom className='' textAlign='center'>
                I am a Mechanical Engineer
            </Typography>
            <Typography variant="h3" gutterBottom className='' textAlign='center'>
                And a Full Stack Web Developer
            </Typography>

            <img src={Image} alt='Profile'
                className="title-img"
            />

        </Container>

    )
}
