import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { links } from "../../../../utils/data";

const linkStyle = {
  padding: "7px 7px 7px 0",
  color: "white",
  textDecoration: "none",
};

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

const CustomLink = ({ to, children }: CustomLinkProps) => (
  <Link to={to} style={linkStyle}>
    {children}
  </Link>
);

const CustomerSupportSection = () => {
  return (
    <Stack>
      <Typography
        color="black"
        variant="h5"
        sx={{ paddingBottom: "30px", color: "white" }}
      >
        Customer Support
      </Typography>
      {links.map((link) => (
        <CustomLink to="" key={link}>
          {link}
        </CustomLink>
      ))}
    </Stack>
  );
};

export default CustomerSupportSection;
