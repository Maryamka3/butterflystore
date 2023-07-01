import {Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/banner.jpg" />
      <BannerContent>
        <Typography variant="h6">Коллекция женской одежды second hand</Typography>
        <BannerTitle variant="h2">
        Butterfly store
        </BannerTitle>

        <BannerDescription variant="subtitle">
        Тут вы найдете одежду хорошего качества, также можете обменяться вещами.
        </BannerDescription>

      
      </BannerContent>
    </BannerContainer>
  );
}
