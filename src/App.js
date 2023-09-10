import { useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link } from 'react-scroll';
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import { Container } from '@mui/material';


const drawerWidth = 240;
const navItems = ['Home', 'Skills', 'Projects', 'About', 'Contact'];

function App(props) {

  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        NP.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link onClick={handleDrawerToggle} to={item} activeClass='activeMobile' spy={true} smooth={true} offset={-60} duration={500}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Button sx={{ marginLeft: "auto" }} startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />} variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ? "dark " : "light "}MODE
        </Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={4} sx={{ minHeight: "100vh", borderRadius: "0px" }}>


          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
                >
                  NP.
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                  {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                      <Link to={item} activeClass='active' spy={true} smooth={true} offset={-70} duration={500}>
                        {item}
                      </Link>
                    </Button>
                  ))}
                  <Button sx={{ marginLeft: "auto" }} startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />} variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {mode === "light" ? "dark " : "light "}MODE
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
            <nav>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  display: { xs: 'block', sm: 'block', md: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
              >
                {drawer}
              </Drawer>
            </nav>

            <Container component="main" maxWidth='lg' sx={{ p: 3, mt: 5 }}>

              <section id='Home' className='section hero-section'>
                <Home />
              </section>

              <section id='Skills' className='section'>
                <Skills />
              </section>

              <section id='Projects' className='section'>
                <Projects />
              </section>

              <section id='About' className='section'>
                <About />
              </section>

              <section id='Contact' className='section'>
                <Contact />
              </section>

            </Container>

          </Box>

        </Paper>

      </ThemeProvider>



    </div >
  );
}

export default App;
