import { Box, Typography } from "@mui/material";

const Title = ({ style, color, text, textColor }) => {
  return (
    <Box>
      {style == "contain" ? (
        <Box>
          <Box
            color={textColor}
            bgcolor={color}
            width="fit-content"
            px={{ md: 4, xs: 3 }}
            py={1}
            margin="auto"
            borderRadius={{ md: "10px", xs: "7px" }}
            // border={`2px solid ${textColor}`}
          >
            <Typography fontSize={"56px"} fontWeight={700}>
              {text}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography fontSize={"56px"} fontWeight={700}>
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Title;
