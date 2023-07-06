import { ReactElement, FC, useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { IDog } from "../types";
import CardItem from "../components/layout/CardItem";
import { DOG_API_KEY, DOG_API_URL } from "../constants";

const dogApiHeader = new Headers();
dogApiHeader.append("Content-Type", "application/json");
dogApiHeader.append("x-api-key", `${DOG_API_KEY}`);

const dogApiRequestOptions = {
  method: "GET",
  headers: dogApiHeader,
  redirect: "follow",
} as RequestInit;

const Home: FC = (): ReactElement => {
  const [dogs, setDogs] = useState<IDog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${DOG_API_URL}/v1/images/search?format=json&limit=12`,
        dogApiRequestOptions
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      setDogs(result);
      setLoading(false);
    } catch (error) {
      console.error("ERROR:::", error);
      setDogs([]);
      setLoading(false);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} pb={5}>
      {loading && <LinearProgress />}
      <Container maxWidth="xl">
        <Typography variant="h3" my={3}>
          Dogs
        </Typography>
        <Grid container spacing={3}>
          {dogs.map((dog: IDog) => (
            <Grid key={dog.id} item xs={6} sm={4} lg={3}>
              <CardItem dog={dog} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
