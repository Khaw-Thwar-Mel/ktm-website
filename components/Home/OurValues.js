import { Box, Typography, Stack } from "@mui/material";
import { colors } from "../../data/colors";
import Image from "next/image";
import { homepageContent } from "../../data/homepage";
import { useEffect, useState } from "react";

export default function OurValues() {
  const data = homepageContent.ourValues;
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayData, setDisplayData] = useState({
    title: data[0].title,
    text: data[0].text,
    icon: data[0].icon,
    altText: data[0].altText,
  });

  useEffect(() => {
    setDisplayData({
      title: data[activeIndex].title,
      text: data[activeIndex].text,
      icon: data[activeIndex].icon,
      altText: data[activeIndex].altText,
    });
  }, [data, activeIndex]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        bgcolor: colors.purple,
        color: colors.yellow,
        py: 10,
        px: 20,
      }}
    >
      <Box
        sx={{
          width: "40%",
        }}
      >
        <Image
          quality={100}
          priority={true}
          src={displayData.icon}
          alt={displayData.altText}
          width={100}
          height={100}
          style={{
            width: "50%",
            height: "auto",
          }}
        />
      </Box>

      <Stack direction={"column"} gap={4} width={"60%"}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "42px",
          }}
        >
          Our Values
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "32px",
          }}
        >
          {displayData.title}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "24px",
          }}
        >
          {displayData.text}
        </Typography>
        <Stack direction={"row"} gap={10} pt={5}>
          {homepageContent.ourValues
            .filter((item) => item.title != displayData.title)
            .map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontWeight: 600,
                  fontSize: "24px",
                  cursor: "pointer",
                }}
                onClick={() => setActiveIndex(item.index)}
              >
                {item.title} ?
              </Typography>
            ))}
        </Stack>
      </Stack>
    </Box>
  );
}
