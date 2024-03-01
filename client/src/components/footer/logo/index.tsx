import { Stack, Typography } from "@mui/material";
import LogoNew from "./../../../images/Logo_New.png";
import { data, socialIcons } from "./../../../utils/data";
import { ElementType } from "react";

interface SocialIconProps {
  Icon: ElementType;
  color: string;
}

const SocialIcon = ({ Icon, color }: SocialIconProps) => (
  <Icon style={{ color }} />
);

const LogoSection = () => {
  return (
    <Stack color="black" sx={{ height: "auto", width: "200px" }}>
      <img
        style={{
          height: "130px",
          width: "180px",
          paddingBottom: "1rem",
        }}
        src={LogoNew}
        alt=""
      />
      <Typography
        style={{
          height: "auto",
          width: "250px",
          textAlign: "justify",
          color: "white",
        }}
      >
        {data.footer.textLogo}
        <Typography
          sx={{
            width: "100%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "1rem",
          }}
        >
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} {...icon} />
          ))}
        </Typography>
      </Typography>
    </Stack>
  );
};

export default LogoSection;
