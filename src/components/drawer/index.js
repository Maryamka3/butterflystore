import {
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    styled,
  } from "@mui/material";
  import { useUIContext } from "../../context/ui";
  import CloseIcon from "@mui/icons-material/Close";
  import { DrawerCloseButton } from "../../styles/appbar";
  import { lighten } from "polished";
  import { Colors } from "../../styles/theme";
  
  const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;
  
  
  export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
  
    return (
      <>
        {drawerOpen && (
          <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon
              sx={{
                fontSize: "2.5rem",
                color: lighten(0.09, Colors.secondary),
              }}
            />
          </DrawerCloseButton>
        )}
        <Drawer open={drawerOpen}>
          <List>
            <ListItemButton>
              <ListItemText>Главная</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Категории</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>DIY</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Свяжитесь с нами</ListItemText>
            </ListItemButton>
            <MiddleDivider />
          </List>
        </Drawer>
      </>
    );
  }
  