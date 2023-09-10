import React from 'react'
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ProjectCard from '../components/ProjectCard'

export default function Projects() {

    const projects = [
        {
            name: "Youtube-Clone",
            description: "HTML,CSS,JS along with Bootstrap is used to built this frontend web app using the Youtube API from Google Console.",
            github: "https://github.com/Nishantphule/Youtube-Clone.git",
            deployed: "https://youtube-clone-bynishant.netlify.app/",
            img: 'https://www.iconpacks.net/icons/3/free-icon-youtube-logo-7129.png'
        },
        {
            name: "Weather Forecast App",
            description: "HTML,CSS,JS along with Bootstrap is used to built this frontend web app. ",
            github: "https://github.com/Nishantphule/weatherApp.git",
            deployed: "https://weather-app-api-openweather.netlify.app/",
            img: 'https://icons.iconarchive.com/icons/iynque/ios7-style/1024/Weather-icon.png'
        },
        {
            name: "React-crud-management-App",
            description: "React.js & Material UI is used to built this frontend web app.",
            github: "https://github.com/Nishantphule/student-teacher-management-react.git",
            deployed: "https://crud-management-react-app.netlify.app/",
            img: 'https://th.bing.com/th/id/OIP.gSI1jfzD8-36wObN_taUzgHaGW?pid=ImgDet&rs=1'
        },
        {
            name: "Hotel Menu Site",
            description: "React,Node & Express deployed on Lambda AWS & Material UI.",
            github: "https://github.com/Nishantphule/frontend-greeninn.git",
            deployed: "https://greeninn.netlify.app/",
            img: 'https://th.bing.com/th/id/OIP.Yb63WXJDtIzosr5xkHPGNgHaHa?pid=ImgDet&rs=1'
        },
        {
            name: "Banjos Cafe Menu",
            description: "React,Node & Express deployed on Lambda AWS & Material UI.",
            github: "https://github.com/Nishantphule/banjos-frontend-app.git",
            deployed: "https://banjos-menu.netlify.app/",
            img: 'https://cdn0.iconfinder.com/data/icons/coffee-25/436/coffee_60-1024.png'
        },
        {
            name: "Password Reset in MERN with nodemailer.",
            description: "React,Node & Express & Material UI is used to built this App.",
            github: "https://github.com/Nishantphule/password-reset-frontend.git",
            deployed: "https://password-reset-react-app.netlify.app/",
            img: 'https://cdn0.iconfinder.com/data/icons/interface-icons-rounded/110/Password-1024.png'
        }
    ]


    return (
        <Container
            sx={{ py: 4, mb: 4 }}
        >

            <Typography variant='h3' textAlign={"center"} sx={{ color: "primary.dark" }}>
                Projects
            </Typography>

            <div className='skillContainer'>
                {projects.map(({ name, description, github, deployed, img }) => {
                    return <ProjectCard name={name} description={description} github={github} deployed={deployed} img={img} />
                })}
            </div>
        </Container>
    )
}
