import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import purchasing from '../image/shopping.gif';
import rapair from '../image/rapair.gif';
import assets from '../image/assets.gif';
import emergancy from '../image/emergancy.gif';
import reject from '../image/rejected.gif';
import onging from '../image/ongoing.gif';
import user from '../image/add.gif'


function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data or perform any side effect
    // Example:
    // fetchData().then(data => setData(data));
  }, []); // Ensure to provide dependencies array if needed

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
      {/* purshasing card */}
      <Card style={{ border: '3px solid green', borderRadius: '10px' }}>
        <Card.Img style={{ width: '5rem', height: '5rem', alignItems: 'center' }} variant="top" src={purchasing} />
        <Card.Body>
          <Card.Title>Purchasing request</Card.Title>
          <Card.Text>
            <p><strong>Number of requests: </strong></p>
            <p><strong> </strong></p>
          </Card.Text>
          <Button variant="primary">Show Requests</Button>
        </Card.Body>
      </Card>

      {/* assets */}
      <Card style={{ border: '3px solid green', borderRadius: '10px' }}>
        <Card.Img style={{ width: '5rem', height: '5rem', alignItems: 'center' }} variant="top" src={assets} />
        <Card.Body>
          <Card.Title>Assets</Card.Title>
          <Card.Text>
            <p><strong>Number of Assets: </strong></p>
            <p><strong> </strong></p>
          </Card.Text>
          <Button variant="primary">Show Requests</Button>
        </Card.Body>
      </Card>

      {/* emergency */}
      <Card style={{ border: '3px solid green', borderRadius: '10px' }}>
        <Card.Img style={{ width: '5rem', height: '5rem', alignItems: 'center' }} variant="top" src={emergancy} />
        <Card.Body>
          <Card.Title>Emergency request</Card.Title>
          <Card.Text>
            <p><strong>Number of requests: </strong></p>
            <p><strong> </strong></p>
          </Card.Text>
          <Button variant="primary">Show Requests</Button>
        </Card.Body>
      </Card>

      {/* repair */}
      <Card style={{ border: '3px solid green', borderRadius: '10px' }}>
        <Card.Img style={{ width: '5rem', height: '5rem', alignItems: 'center' }} variant="top" src={rapair} />
        <Card.Body>
          <Card.Title>Repair request</Card.Title>
          <Card.Text>
            <p><strong>Number of requests: </strong></p>
            <p><strong> </strong></p>
          </Card.Text>
          <Button variant="primary">Show Requests</Button>
        </Card.Body>
      </Card>

      {/* ongoing */}
      <Card style={{ border: '3px solid green', borderRadius: '10px' }}>
        <Card.Img style={{ width: '5rem', height: '5rem', alignItems: 'center' }} variant="top" src={onging} />
        <Card.Body>
          <Card.Title>Ongoing request</Card.Title>
          <Card.Text>
            <p><strong>Number of requests: </strong></p>
            <p><strong> </strong></p>
          </Card.Text>
          <Button variant="primary">Show Requests</Button>
        </Card.Body>
      </Card>

      {/* rejected */}
      <Card style={{ border: '3px solid green', borderRadius: '10px' }}>
        <Card.Img style={{ width: '5rem', height: '5rem', alignItems: 'center' }} variant="top" src={reject} />
        <Card.Body>
          <Card.Title>Rejected request</Card.Title>
          <Card.Text>
            <p><strong>Number of requests: </strong></p>
            <p><strong> </strong></p>
          </Card.Text>
          <Button variant="primary">Show Requests</Button>
        </Card.Body>
      </Card>


      <Card style={{ border: '3px solid green', borderRadius: '10px' }}>
        <Card.Img style={{ width: '5rem', height: '5rem', alignItems: 'center' }} variant="top" src={user} />
        <Card.Body>
          <Card.Title>Users</Card.Title>
          <Card.Text>
            <p><strong>Number of Users: </strong></p>
            <p><strong> </strong></p>
          </Card.Text>
          <Button variant="primary">Show Requests</Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Dashboard;
