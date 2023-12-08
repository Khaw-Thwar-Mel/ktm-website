import { Button } from "@mui/material";
import { colors } from "../../data/colors";

const CustomButton = ({ text, backgroundColor, onClickHandler }) => {
  return (
    <Button
      variant="contained"
      onClick={onClickHandler}
      className="main-btn"
      sx={{
        backgroundColor: backgroundColor,
        // fontFamily: "Archivo!important",
        boxShadow: "none",
        color: colors.black,
        textTransform: "unset",
        fontSize: { md: "16px", xs: "14px" },
        fontWeight: 500,
        px: { md: 3, xs: 2 },
        height: { md: "50px", xs: "40px" },
        width: "fit-content",
        "&:hover": {
          backgroundColor: backgroundColor,
          boxShadow: "none",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
