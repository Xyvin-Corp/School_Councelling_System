import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  Badge,
  Collapse,
  Dialog,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import profile from "../assets/images/profile.png";
import { ReactComponent as ExpandMoreIcon } from "../assets/icons/ExpandMoreIcon.svg";
import { ReactComponent as BookingIcon } from "../assets/icons/BookingIcon.svg";
import { ReactComponent as EventIcon } from "../assets/icons/EventIcon.svg";
import { ReactComponent as ReportIcon } from "../assets/icons/ReportIcon.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/NotificationIcon.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/SettingsIcon.svg";
import { ReactComponent as TeacherIcon } from "../assets/icons/TeacherIcon.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/LogoutIcon.svg";
const drawerWidth = 300;
const subNavigation = [
  {
    name: "Upcomming Sessions",
    to: "/counselor/upcomminSession",
    icon: <BookingIcon />,
  },
  {
    name: "Add Availability",
    to: "/counselor/addavailability",
    icon: <EventIcon />,
  },
  { name: "Sessions", to: "/counselor/session", icon: <EventIcon /> },
  { name: "Reports", to: "/counselor/report", icon: <ReportIcon /> },
  { name: "Events", to: "/counselor/event", icon: <TeacherIcon /> },
  { name: "Settings", to: "/counselor/setting", icon: <SettingsIcon /> },
];
const SimpleDialog = ({ open, onClose }) => {
  const navigate = useNavigate();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          position: "fixed",
          top: 50,
          right: 50,
          m: 0,
          width: "270px",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.25)",
        },
      }}
    >
      <Stack spacing={2} borderRadius={3} padding="10px" paddingTop={"20px"}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Avatar
            alt="Remy Sharp"
            src={profile}
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="h6" color="#292D32" paddingBottom={1}>
              Alex meian
            </Typography>
            <Typography variant="h7" color="rgba(41, 45, 50, 0.44)">
              Admin
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Dialog>
  );
};

const CounselorLayout = (props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const drawer = (
    <div style={{ position: "relative", height: "100%" }}>
      <Toolbar sx={{ height: "88px" }}>
        <Box sx={{ display: "flex", alignItems: "center", padding: "15px" }}>
          <img src="/vite.svg" alt="Vite Logo" width={"48px"} height="28px" />
          <Typography variant="h1" color={"#686465"} sx={{ ml: 1 }}>
            <span style={{ color: "#0072BC" }}>AIIT</span>S
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List style={{ paddingBottom: "72px" }}>
        {subNavigation.map((item) =>
          item.name === "User Management" ? (
            <div key={item.name}>
              <ListItem sx={{ paddingBottom: "8px" }} disablePadding>
                <ListItemButton
                  onClick={handleClick}
                  sx={{
                    marginLeft: "20px",
                    marginRight: "10px",
                    color: "#5F6368",
                    backgroundColor:
                      open && location.pathname.startsWith("/user")
                        ? "#F2F2F2"
                        : "transparent",
                    "&:hover": { color: "#0072BC", backgroundColor: "#ECF6FC" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 24, marginRight: 1 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      variant: "h6",
                    }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={open}>
                <List component="div">
                  {item.subItems.map((subItem) => (
                    <ListItem
                      key={subItem.name}
                      sx={{ paddingBottom: "8px" }}
                      disablePadding
                    >
                      <ListItemButton
                        component={Link}
                        to={subItem.to}
                        sx={{
                          marginLeft: "40px",
                          marginRight: "40px",
                          color:
                            location.pathname === subItem.to
                              ? "#0072BC"
                              : "#5F6368",
                          backgroundColor:
                            location.pathname === subItem.to
                              ? "#ECF6FC"
                              : "transparent",
                          "&:hover": {
                            color: "#0072BC",
                            backgroundColor: "#ECF6FC",
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 24, marginRight: 1 }}>
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.name}
                          primaryTypographyProps={{
                            variant: "h6",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ) : (
            <ListItem
              sx={{ paddingBottom: "20px" }}
              key={item.name}
              disablePadding
            >
              <ListItemButton
                component={Link}
                to={item.to}
                sx={{
                  marginLeft: "20px",
                  marginRight: "10px",
                  color: location.pathname === item.to ? "#0072BC" : "#5F6368",
                  backgroundColor:
                    location.pathname === item.to ? "#ECF6FC" : "transparent",
                  "&:hover": { color: "#0072BC", backgroundColor: "#ECF6FC" },
                }}
              >
                <ListItemIcon sx={{ minWidth: 24, marginRight: 1 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <List
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Divider />
        <ListItem
          sx={{ paddingBottom: "20px" }}
          disablePadding
          onClick={() => {
            console.log("Logging out...");
          }}
        >
          <ListItemButton
            sx={{
              marginLeft: "20px",
              marginRight: "10px",
              color: "#5F6368",
              "&:hover": { color: "#0072BC", backgroundColor: "#ECF6FC" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 24, marginRight: 1 }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: `white`,
          boxShadow: `none`,
        }}
      >
        <Toolbar
          sx={{
            height: "88px",
            justifyContent: "space-between",
            paddingRight: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "flex-start",
              padding: "15px",
            }}
          >
            <IconButton
              color="#000"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box display={isMobile && "none"}> </Box>
            <NotificationIcon />
            <Box
              borderRadius="24px"
              padding={"5px 20px 5px 5px"}
              bgcolor={"#F7F7F7"}
              width={"200px"}
              color={"#000"}
              gap={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={handleDialogOpen}
              sx={{ cursor: "pointer", flexShrink: 0, marginLeft: "10px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={profile}
                  sx={{ width: 40, height: 40 }}
                />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography variant="h6" color={"#292D32"} display="block">
                    Alex Meian
                  </Typography>
                  <Typography
                    variant="h7"
                    color={"rgba(41, 45, 50, 0.44)"}
                    display="block"
                  >
                    Admin
                  </Typography>
                </Box>
              </Box>
              <ExpandMoreIcon />
            </Box>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflow: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflow: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          backgroundColor: "#F3F3F3",
          paddingTop: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>{" "}
      <SimpleDialog open={dialogOpen} onClose={handleDialogClose} />
    </Box>
  );
};

CounselorLayout.propTypes = {
  window: PropTypes.func,
};

export default CounselorLayout;
