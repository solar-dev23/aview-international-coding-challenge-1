import { ReactNode } from "react";
import { Box } from "@mui/material";
import NavBar from "../components/layout/NavBar";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <NavBar />
      {children}
    </Box>
  );
};

export default PublicRoute;
