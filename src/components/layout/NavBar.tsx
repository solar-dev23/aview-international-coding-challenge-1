import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ pr: "24px", justifyContent: "space-between" }}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Aview International Coding Challenge 1 - Jayden Jin
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
