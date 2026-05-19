import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();
  const { isAuthenticated, userName, signout } = useContext(AuthContext);

  const userLogout = () => {
    setAnchorEl(null);
    signout();
    navigate("/");
  };

  const menuOptions = isAuthenticated
    ? [
        { label: "Home", path: "/" },
        { label: "Favorites", path: "/movies/favorites" },
        { label: "Upcoming", path: "/movies/upcoming" },
        { label: "Playlist", path: "/movies/playlists" },
        { label: "Popular", path: "/movies/popular" },
        { label: "Top Rated", path: "/movies/topRated" },
        { label: "Now Playing", path: "/movies/nowPlaying" },
        { label: "People", path: "/movies/people" },
        { label: "Log Out", action: userLogout },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "Favorites", path: "/movies/favorites" },
        { label: "Upcoming", path: "/movies/upcoming" },
        { label: "Playlist", path: "/movies/playlists" },
        { label: "Popular", path: "/movies/popular" },
        { label: "Top Rated", path: "/movies/topRated" },
        { label: "Now Playing", path: "/movies/nowPlaying" },
        { label: "People", path: "/movies/people" },
        { label: "Log In", path: "/login" },
        { label: "Sign Up", path: "/signup" },
      ];

  const handleMenuSelect = (option) => {
    setAnchorEl(null);
    if (option.action) {
      option.action();
    } else {
      navigate(option.path);
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" color= "secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          {isAuthenticated && (
            <Typography variant="h6">
              Welcome, {userName}!
            </Typography>
          )}
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt)}
                  >
                    {opt.label}
                  </Button>
                ))}
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;