import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography, Button, Chip, Box } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import IndicadorDificultad from './IndicadorDificultad';

function RecetaCard() {
  return (//Tamaño de la tarjeta.
    <Card sx={{ maxWidth: 345, margin: 2 }}> 

      <CardHeader //Encabezado de la tarjeta.
        title="Titulo Receta"
        titleTypographyProps={{
            align: "center", // 🔹 centra el texto del título
            variant: "h6",   // opcional: cambia el tamaño del texto
        }}
      />
      
      <CardMedia //Imagen de la tarjeta.
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400"
        alt="Barcelona Sagrada Familia"
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip 
            icon={<AccessTime />} 
            label="Tiempo de preparacion" 
            size="big" 
            variant="outlined" 
          />
          <IndicadorDificultad dif={'medio'}/>
        </Box>
        
        <Typography variant="body2" color="text.secondary">
          Numero de porciones
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="contained" fullWidth>
          Ver itinerario completo
        </Button>
      </CardActions>
    </Card>
  );
}
export default RecetaCard;