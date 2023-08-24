import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { colors } from "../../data/colors";

const ExplanationTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="top-start" />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: 20,
    backgroundColor: colors.purple,
    color: colors.yellow,
    fontSize: "20px",
    lineHeight: 1.6,
    borderRadius: 50,
  },
}));

export default ExplanationTip;
