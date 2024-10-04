import { Box } from "@mui/material";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useContext } from "react";
import { BreadcrumbsContext } from "../context/BreadCrumbsContext";
import { useBreadcrumbs } from "../utils/useBreadCrumps";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Layout = ({ children }) => {
  const { crumbs } = useContext(BreadcrumbsContext);
  useBreadcrumbs();
  return (
    <>
      <Header />
      <Breadcrumbs crumbs={crumbs} />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};
