import React from 'react'
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function About() {

    return (
        <Container
            sx={{
                bgcolor: 'primary.light',
                py: 4,
                mb: 2
            }}
        >
            <section class="coloured-section" id="about">
                <div class="container-fluid">
                    <Typography variant='h3' textAlign={"center"} sx={{ color: "primary.dark" }} >
                        About Me
                    </Typography>

                    <Card sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://cdn-icons-png.flaticon.com/512/8716/8716193.png"
                            alt="Profession"
                        />
                    </Card>

                    <Card>
                        <Box>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant='h6' textAlign={"start"} sx={{ color: "info.dark", fontWeight: "bold" }} >
                                    Hello there! I'm Nishant, a Mechanical Engineer graduate with a passion for innovation and technology. By day, I'm a Full Stack Web Developer with expertise in the MERN stack, along with proficiency in HTML, CSS, JavaScript, Bootstrap, Material UI, AWS, and the fundamentals of Python. I also dabble in the exciting world of NFTs and have a keen interest in the evolving web3 landscape.
                                </Typography>
                            </CardContent>
                        </Box>

                    </Card>



                    <Card sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://cdn1.iconfinder.com/data/icons/executive-working-in-front-of-a-computer/253/work-office-table-chair-002-512.png"
                            alt="Interests and Hobbies"
                        />
                    </Card>

                    <Card >
                        <Box>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant='h6' textAlign={"start"} sx={{ color: "info.dark", fontWeight: "bold" }}>

                                    Beyond my professional pursuits, I'm a multifaceted individual with a love for diverse interests. When I'm not coding or designing, you'll find me immersed in the pages of captivating books or working up a sweat at the gym. I'm an avid player of chess and football, where strategic thinking meets physical prowess. And let's not forget my gaming alter ego – whether it's conquering worlds on my trusty PC or unleashing my competitive spirit on the PlayStation, gaming is my ultimate escape.
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>



                    <Card sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://th.bing.com/th?id=OIP.qFbC1QVQoXMZjNNJNxpxYwHaGw&w=261&h=238&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                            alt="Collaborated"
                        />
                    </Card>
                    <Card >
                        <Box>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant='h6' textAlign={"start"} sx={{ color: "info.dark", fontWeight: "bold" }}>
                                    In a world where technology and creativity collide, I strive to bridge the gap and create meaningful digital experiences. Join me on this journey of innovation, exploration, and a touch of competition. Let's connect and make the digital realm a little more exciting together!
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>


                </div>
            </section>
        </Container>
    )
}
