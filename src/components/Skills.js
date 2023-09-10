import React from 'react';
import { Container } from '@mui/material';
import SkillCard from './SkillCard';
import Typography from '@mui/material/Typography';

export default function Skills() {

    const skills = [
        { skill: "HTML", link: 'https://th.bing.com/th/id/OIP.CYAMXqfgsWg3Ix91RJbbYAHaHa?pid=ImgDet&rs=1' },
        { skill: "CSS", link: 'https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?pid=ImgDet&rs=1' },
        { skill: "Javascript", link: 'https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png' },
        { skill: "React.js", link: 'https://th.bing.com/th/id/OIP.gSI1jfzD8-36wObN_taUzgHaGW?pid=ImgDet&rs=1' },
        { skill: "Node.js", link: 'https://th.bing.com/th/id/OIP.xQJlilCdJ7U2ebPvc8DYLwHaIJ?pid=ImgDet&rs=1' },
        { skill: "MongoDB", link: 'https://www.opc-router.com/wp-content/uploads/2021/03/mongodb_thumbnail.png' },
        { skill: "Express.js", link: 'https://www.technoscore.com/img/expressjs.png' },
        { skill: "AWS", link: 'https://th.bing.com/th/id/OIP.H4G6DqcnourduXggY8e_GwD6D6?pid=ImgDet&rs=1' },
        { skill: "Python", link: 'https://th.bing.com/th/id/OIP.d9Ob12ZXFxWKCTa8K8niiAHaHa?pid=ImgDet&rs=1' }]

    return (
        <Container
            sx={{
                bgcolor: 'primary.light',
                py: 4, my: 2
            }}
            maxWidth='lg'
        >

            <Typography variant='h3' textAlign={"center"} sx={{ color: "primary.dark" }}>
                Skills
            </Typography>

            <div className='skillContainer'>
                {skills.map(({ skill, link }) => {
                    return <SkillCard name={skill} link={link} />
                })}
            </div>
        </Container>
    )
}
