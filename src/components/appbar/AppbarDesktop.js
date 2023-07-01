import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import Actions from "./action";

export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">Butterfly store</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Главная" path="/"/>
        <ListItemText primary="Категории" />
        <ListItemText primary="DIY" />
        <ListItemText primary="Свяжитесь с нами" />
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
