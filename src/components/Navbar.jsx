import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Button from "@mui/material/Button";

function Navbar() {
  const pages = ["HOME", "EDUCATION","SKILLS", "PROJECTS"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeLink, setActiveLink] = useState("HOME");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleLink = (page) => {
    setActiveLink(page);
    handleCloseNavMenu;
  };
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#fff", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: { sm: 10 },
              flexGrow: 1,
              display: { xs: "flex", md: "flex", sm: "none" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ES<span style={{ color: "orangered" }}>R</span>AA.
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                flexGrow: 0,
                textAlign: "center",
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleLink(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                onClick={() => handleLink(page)}
                activeStyle={{ textDecoration: "underline" }}
                sx={{
                  color: page === activeLink ? "orangered" : "black",
                  display: "block",
                  mr: 8,
                  textDecoration: page === activeLink ? "underline" : "none",
                  cursor: "pointer",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box>
            <Button sx={{ width: "80px", background: "orangered", marginRight:8 ,display: { xs: "none", md: "flex" } ,
            '&:hover': {  borderColor: "orangered",background:" rgb(250, 77, 9)"} 
          }}>
              <a
                className="btnDownload"
                style={{ textDecoration: "none", color: "#fff" }}
                target="_blank"
                download
              >
                Hire me
              </a>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
