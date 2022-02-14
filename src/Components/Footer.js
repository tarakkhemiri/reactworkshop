
 
import { Card, Button,  } from 'react-bootstrap';

function Footer() {
  return (
<Card className="text-center">
  <Card.Header>Keep In Touch !</Card.Header>
  <Card.Body>
    <Card.Title>Contact Me</Card.Title>
    <Card.Text>
      Tel : 55.55.55.55
      Email : tarekkhemiri@gmail.com 
      Whtasapp : tarekkhemiri
    </Card.Text>
    <Button variant="primary">Email</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
  );
}

export default Footer;









