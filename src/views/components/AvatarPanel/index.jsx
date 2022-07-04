import { useState, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";
import Layout from "../Layout";

const AvatarPanel = ({ title, avatars, onPrevious, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleSlideChange = useCallback(
    (e) => setSelectedIndex((e.item + 1) % avatars.length),
    [avatars]
  );
  const handleNext = useCallback(
    () => onSelect(avatars[selectedIndex]),
    [avatars, selectedIndex]
  );
  const avatarComponents = useMemo(
    () =>
      avatars.map((avatar, i) => (
        <img
          src={avatar}
          alt={`avatar-${i}`}
          key={`avatar-${i}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: selectedIndex === i ? "100%" : "35%",
          }}
        />
      )),
    [avatars, selectedIndex]
  );
  return (
    <Layout variant="dark_blue">
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Box flexGrow={1} />
        <Box sx={{ width: "170%" }}>
          <AliceCarousel
            activeIndex={(selectedIndex + 5) % avatars.length}
            mouseTracking
            infinite
            responsive={{ 0: { items: 3 } }}
            disableButtonsControls
            disableDotsControls
            controlsStrategy="alternate"
            items={avatarComponents}
            animationDuration={100}
            onSlideChanged={handleSlideChange}
          />
        </Box>
        <Box flexGrow={1} />
        <Box mb={RESPONSIVE_PANEL_SPACING}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box mb={RESPONSIVE_PANEL_SPACING} textAlign="center">
          <Typography variant="h1">Choose</Typography>
          <Typography variant="h1">your</Typography>
          <Typography variant="h1">Avatar!</Typography>
        </Box>
        <Box flexGrow={1} />
        <PreviousNextButtons onPrevious={onPrevious} onNext={handleNext} />
        <Box flexGrow={1} />
      </Box>
    </Layout>
  );
};

export default AvatarPanel;
