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
import { Link, useNavigate } from "react-router-dom";
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
import { ReactComponent as DashboardIcon } from "../assets/icons/DashboardIcon.svg";
import { ReactComponent as EventIcon } from "../assets/icons/EventIcon.svg";
import { ReactComponent as ReportIcon } from "../assets/icons/ReportIcon.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/NotificationIcon.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/SettingsIcon.svg";
import { ReactComponent as UserIcon } from "../assets/icons/UserIcon.svg";
import { ReactComponent as StudentIcon } from "../assets/icons/StudentIcon.svg";
import { ReactComponent as TeacherIcon } from "../assets/icons/TeacherIcon.svg";
const drawerWidth = 300;
const subNavigation = [
    { name: "Dashboard", to: "/", icon: <DashboardIcon /> },
     {
        name: "User Management",
        icon: <UserIcon />,
        subItems: [
          { name: "Student", to: "/user/student", icon: <StudentIcon />  },
          { name: "Counselor", to: "/user/counselor",icon: <TeacherIcon />  },
        ],
      },
    { name: "Cases & Sessions", to: "/casesstudies", icon:<TeacherIcon />  },
    { name: "Events", to: "/events", icon: <EventIcon /> },
  
    { name: "Report", to: "/report", icon: <ReportIcon /> },
    { name: "Notification", to: "/notification", icon: <NotificationIcon /> },
    { name: "Settings", to: "/settings", icon: <SettingsIcon /> },
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
          height: "330px",
          width: "270px",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.25)",
        },
      }}
    >
      <Stack spacing={2} borderRadius={3} padding="10px" paddingTop={"20px"}>
        <Stack direction="row" alignItems="center" spacing={3} >
          <Avatar
            alt="Remy Sharp"
            src={profile}
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="h3" color="#292D32" paddingBottom={1}>
            Alex meian
            </Typography>
            <Typography variant="h4" color="rgba(41, 45, 50, 0.44)">
              Admin
            </Typography>
          </Box>
        </Stack>
        <Divider />
        <Stack spacing={2} padding={1}>
          <Stack
            direction="row"
            spacing={1}
            paddingTop={2}
            paddingBottom={2}
            paddingLeft={1}
            bgcolor={"#F4F4F5"}
          >
            {/* <EmailIcon /> */}
            <Typography variant="h4">dd</Typography>
          </Stack>
          <Stack
            direction="row"
            paddingTop={2}
            paddingBottom={2}
            paddingLeft={1}
            spacing={1}
            bgcolor={"#F4F4F5"}
          >
            {/* <PhoneIcon /> */}
            <Typography variant="h4">+91 7452136556</Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
         
          sx={{ cursor: "pointer" }}
        >
          {/* <LogoutIcon /> */}
          <Typography variant="h4" color="#F22E22">
            Logout
          </Typography>
        </Stack>
      </Stack>
    </Dialog>
  );
};

const Layout = (props) => {
  
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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

//   const getCurrentPageName = () => {
//     for (const item of subNavigation) {
//       if (item.to === location.pathname) {
//         return item.name;
//       }
//       if (item.subItems) {
//         for (const subItem of item.subItems) {
//           if (subItem.to === location.pathname) {
//             return subItem.name;
//           }
//         }
//       }
//     }
//     return "Dashboard";
//   };

  const drawer = (
    <div>
      <Toolbar sx={{ height: "88px" }}>
        <Box sx={{ display: "flex", alignItems: "center", padding: "15px" }}>
        <img
                src="/vite.svg"
                alt="Vite Logo"
                width={"48px"}
                height="28px"
              />
              <Typography variant="h1" color={"#686465"} sx={{ ml: 1 }}>
                <span style={{ color: "#0072BC" }}>AIIT</span>S
              </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
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
                    "&:hover": {  color: "#0072BC",
                      backgroundColor: "#ECF6FC", },
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
                          color: "#5F6368",
                      "&:hover": {  color: "#0072BC",
                        backgroundColor: "#ECF6FC", },
                        }}
                      ><ListItemIcon sx={{ minWidth: 24, marginRight: 1 }}>
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
                  color: "#5F6368",
                      "&:hover": {  color: "#0072BC",
                        backgroundColor: "#ECF6FC", },
                }}
              >
                <ListItemIcon sx={{ minWidth: 24, marginRight: 1 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ variant: "h6" }}
                />{" "}
                {/* <StyledBadge badgeContent={"20"}></StyledBadge> */}
              </ListItemButton>
            </ListItem>
          )
        )}
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
            {/* <Typography
              variant="h2"
              color="#000"
              noWrap
              component="div"
              display={isMobile && "none"}
            >
              {getCurrentPageName()}
            </Typography> */}
            {/* <Typography
              variant="h5"
              color={"#BDBDBD"}
              sx={{ display: isMobile ? "none" : "flex", alignItems: "center" }}
            >
              {"Last synced "}
              <span
                style={{
                  color: "#27AE60",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                4 minutes ago
              </span>{" "}
              <SyncIcon />
            </Typography> */}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box display={isMobile && "none"}>
              {" "}
              {/* <StyledSearchbar /> */}
            </Box>
            <NotificationIcon />
            <Box
              borderRadius="24px"
              padding={"5px 20px 5px 5px"}
             bgcolor={'#F7F7F7'}
              width={"200px"}
              color={"#000"}
              gap={1}
              display={"flex"}
              alignItems={"center"}
              onClick={handleDialogOpen}
              sx={{ cursor: "pointer", flexShrink: 0, marginLeft: "10px" }}
            >
              <Avatar
                alt="Remy Sharp"
                src={profile}
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography variant="h5" color={"#292D32"}>
                Alex meian
                </Typography>
                <Typography variant="h6" color={"rgba(41, 45, 50, 0.44)"}>
                  Admin
                </Typography>
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
          p: 1,
          backgroundColor: "#F3F3F3",
          paddingTop: 4,
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

Layout.propTypes = {
  window: PropTypes.func,
};

export default Layout;

