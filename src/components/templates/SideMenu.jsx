import styled from "@emotion/styled";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import sidebar from "../../assets/icons/sidebar.png";
import app from "../../assets/icons/sidemenu/app.png";
import folder from "../../assets/icons/sidemenu/folder.png";
import plus from "../../assets/icons/sidemenu/plus.png";
import keys from "../../assets/icons/sidemenu/keys.png";
import search from "../../assets/icons/sidemenu/search.png";
import collapse from "../../assets/icons/sidemenu/collapse.png";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
    background-color: transparent;
    color: #fff;
  }
`;

const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 16px 0 30px 0;

  img:nth-of-type(1) {
    margin-right: 150px;
  }
`;

const ProfileContainer = styled(Box)`
  display: flex;
  margin: 5px 0 16px -15px;
  justify-content: flex-start;
  padding: 16px;
`;

const StyledList = styled(List)`
  padding: 0;
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  gap: 10px; /* Ensures icons and text are closer */
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    border-radius: 10px;
    width: 98%;
  }
`;

const StyledListItemText = styled(ListItemText)`
  && {
    color: #fff;
    font-weight: 400;
    margin-left: -30px; 
  }
`;

const BottomContainer = styled(Box)`
  margin-top: auto;
  padding: 16px;
  display: flex;
  align-items: center;
`;

// **Navigation items (Using `map()` for cleaner code)**
const menuItems = [
  { icon: plus, text: "새로운 질문", rightIcon: keys },
  { icon: folder, text: "내 스페이스" },
  { icon: app, text: "어플리케이션" },
];

const Sidebar = () => {
  return (
    <StyledDrawer variant="permanent">
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Profile Section */}
        <ProfileContainer>
          <img src={sidebar} alt="sidebar" />
        </ProfileContainer>

        <IconContainer>
          <img src={collapse} alt="collapse" />
          <img src={search} alt="search" />
        </IconContainer>

        {/* Navigation List */}
        <StyledList>
          {menuItems.map((item, index) => (
            <StyledListItem key={index}>
              <ListItemIcon>
                <img src={item.icon} alt={item.text} />
              </ListItemIcon>
              <StyledListItemText primary={item.text} />
              {item.rightIcon && <img src={item.rightIcon} alt="extra icon" 
        
              />}
            </StyledListItem>
          ))}
        </StyledList>

        {/* Divider */}
        <Divider sx={{ bgcolor: "gray", my: 2 }} />

        {/* User Profile Section */}
        <BottomContainer>
          <Avatar sx={{ bgcolor: "#7579F7", mr: 1, borderRadius: 1 }} variant="square">
            M
          </Avatar>
          <Box>
            <Typography variant="body1">Minjoon Kim</Typography>
            <Typography variant="body2" color="gray">
              minjoon@phnyx.ai
            </Typography>
          </Box>
        </BottomContainer>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;