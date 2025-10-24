import { Stack, Typography } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"; // fácil
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral"; // medio
import WhatshotIcon from "@mui/icons-material/Whatshot"; // difícil

const IndicadorDificultad = ({ dif }) => {
  let icon, color, label;

  switch (dif) {
    case "facil":
      icon = <EmojiEmotionsIcon color="success" />;
      label = "Principiante";
      color = "success.main";
      break;
    case "medio":
      icon = <SentimentNeutralIcon color="warning" />;
      label = "Intermedio";
      color = "warning.main";
      break;
    case "dificil":
      icon = <WhatshotIcon color="error" />;
      label = "Difícil";
      color = "error.main";
      break;
    default:
      icon = <SentimentNeutralIcon color="disabled" />;
      label = "Sin dificultad";
      color = "text.secondary";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {icon}
      <Typography sx={{ color }}>{label}</Typography>
    </Stack>
  );
};

export default IndicadorDificultad;