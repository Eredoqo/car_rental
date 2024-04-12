import { Link as RouterLink, useRoutes } from "react-router-dom";
import { Typography, Link, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { pages } from "./data";

type TitleProps = {
  title: string;
};
type BreadcrumbsProps = {
  currentPage: string;
};
export interface WidgetProps {
  pageTitle: string;
}

const Breadcrumbs = ({ currentPage }: BreadcrumbsProps) => (
  <Typography variant="h6" color="white">
    <Link
      sx={{ textDecoration: "none" }}
      component={RouterLink}
      to="/"
      color="inherit"
    >
      Home <FontAwesomeIcon icon={faChevronRight} />
    </Link>
    <Box component="span" sx={{ ml: 1, color: "white" }}>
      {currentPage} <FontAwesomeIcon icon={faChevronRight} />
    </Box>
  </Typography>
);

const PageTitle = ({ title }: TitleProps) => (
  <Typography sx={{ marginTop: "15px" }} variant="h3" color="white">
    {title}
  </Typography>
);

function GenerateRouteName() {
  const routes = pages.map((page) => ({
    path: `/${page}`,
    element: (
      <>
        <Breadcrumbs
          currentPage={page.charAt(0).toUpperCase() + page.slice(1)}
        />
        <PageTitle title={page.toUpperCase()} />
      </>
    ),
  }));

  const routing = useRoutes(routes);

  return routing;
}

export { GenerateRouteName, Breadcrumbs, PageTitle };
