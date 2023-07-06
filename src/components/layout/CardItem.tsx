import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { IDog, Languages } from "../../types";
import { TRANSLATE_API_KEY, TRANSLATE_API_URL } from "../../constants";

interface CardItemProps {
  dog: IDog;
}

const CardItem: React.FC<CardItemProps> = ({ dog }) => {
  const [source, setSource] = useState<Languages>("en");
  const [breedName, setBreedName] = useState<string>(dog.breeds[0]?.name || "");
  const [breedGroup, setBreedGroup] = useState<string>(
    dog.breeds[0]?.breed_group || ""
  );
  const [bredFor, setBredFor] = useState<string>(dog.breeds[0]?.bred_for || "");

  const handleTranslate = async (target: Languages) => {
    try {
      const translatePromises = [breedName, breedGroup, bredFor].map(
        async (txt: string) => {
          const res = await fetch(`${TRANSLATE_API_URL}/translate`, {
            method: "POST",
            body: JSON.stringify({
              q: txt,
              source,
              target,
              format: "text",
              api_key: TRANSLATE_API_KEY,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            console.error("Translate ERROR:", res.status);
            return;
          }

          const result = await res.json();
          return result;
        }
      );

      const [translatedBreedName, translatedBreedGroup, translatedBredFor] =
        await Promise.all(translatePromises);

      setBreedName(translatedBreedName ?? "");
      setBreedGroup(translatedBreedGroup ?? "");
      setBredFor(translatedBredFor ?? "");
      setSource(target);
    } catch (error) {
      console.error("Translate ERROR:", error);
    }
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia image={dog.url} sx={{ height: 150 }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography>
          <b>Breed Name:</b> {breedName}
        </Typography>
        <Typography>
          <b>Breed Group:</b> {breedGroup}
        </Typography>
        <Typography>
          <b>Bred For:</b> {bredFor}
        </Typography>
      </CardContent>
      <CardActions sx={{ height: 50 }}>
        <Typography fontWeight={700} mr={1}>
          Translate to:
        </Typography>
        <Select
          inputProps={{
            sx: { py: 0 },
          }}
          value={source}
          onChange={(e: SelectChangeEvent<unknown>) =>
            handleTranslate(e.target.value as Languages)
          }
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="ru">Russian</MenuItem>
          <MenuItem value="pt">Portuguese</MenuItem>
          <MenuItem value="it">Italian</MenuItem>
        </Select>
      </CardActions>
    </Card>
  );
};

export default CardItem;
