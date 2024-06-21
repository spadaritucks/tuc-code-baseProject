import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import productImage from '../assets/images/TUC CODE SITE.jpeg'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150 }}
        image= {productImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Site Institucional
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Divulgue e mostre o seu cartão de visitas com o seu negocio com a TUC CODE
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Fazer Orçamento</Button>
        <Button size="small">Ler Sobre</Button>
      </CardActions>
    </Card>
  );
}
