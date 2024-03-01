import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { data } from "./../../../utils/data";

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const contactInfo = [
  {
    icon: <LocationOnIcon />,
    text: data.footer.street,
  },
  {
    icon: <PhoneIcon />,
    link: data.footer.phone,
  },
  {
    icon: <EmailIcon />,
    link: data.footer.email,
  },
];

interface ContactItemProps {
  icon: JSX.Element;
  text?: string;
  link?: string;
}

const ContactItem = ({ icon, text, link }: ContactItemProps) => (
  <Typography
    sx={{
      display: "flex",
      flexDirection: "row",
      padding: "10px 7px 7px 0",
      color: "white",
    }}
  >
    <Box sx={{ paddingRight: "5px", color: "white" }}>{icon}</Box>
    {link ? (
      <Link style={linkStyle} to="">
        {link}
      </Link>
    ) : (
      <Typography sx={{ width: "200px", color: "white" }}>{text}</Typography>
    )}
  </Typography>
);

const QuestionsSection = () => {
  return (
    <Stack>
      <Typography
        color="black"
        variant="h5"
        sx={{ paddingBottom: "30px", color: "white" }}
      >
        Have a Questions?
      </Typography>
      {contactInfo.map((item, index) => (
        <ContactItem key={index} {...item} />
      ))}
    </Stack>
  );
};

export default QuestionsSection;
