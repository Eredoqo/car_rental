import { informationLinks } from "../../../../utils/data";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const linkStyle = {
  padding: "7px 7px 7px 0",
  color: "white",
  textDecoration: "none",
};

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomLink = ({ to, children }: CustomLinkProps) => (
  <Link to={to} style={linkStyle}>
    {children}
  </Link>
);

const InformationSection = () => {
  return (
    <Stack>
      <Typography
        color="black"
        variant="h5"
        sx={{ paddingBottom: "30px", color: "white" }}
      >
        Information
      </Typography>
      {informationLinks.map((link) => (
        <CustomLink to="" key={link}>
          {link}
        </CustomLink>
      ))}
    </Stack>
  );
};

export default InformationSection;
