import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { autocompleteClasses, Grid } from '@mui/material';
import '../../Styles/Common/Navbar.scss'
import { Container } from '@mui/system';

const drawerWidth = autocompleteClasses;
const navItems = ['Home', 'Courses', 'Deals', 'Success', 'About', 'Register',];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pro Edu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" className='navbarheader'>
         <Container>
         <Toolbar>
          <Grid container>
            <Grid item lg={2}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize:16, fontWeight:600, flexGrow: 1, mt:1, display: { xs: 'block', md: 'block' }  }}
                >
                    Pro Edu
                </Typography>
            </Grid>
            
            <Grid item lg={8} sx={{ mx: 'auto', mt: 1 }} className="nav-mid">
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: 'snow' }}>
                        {item}
                    </Button>
                    ))}
                </Box>
            </Grid>
            <Grid item lg={2}>
                <Button variant="contained" className='register'>Register</Button>
            </Grid>
          </Grid>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
           
          </IconButton>
        </Toolbar>
         </Container>
      
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor= 'top'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            
            display: { xs: 'block', md: 'none'}, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          <Button variant="contained" sx={{mb:3}}>Register</Button>
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar
