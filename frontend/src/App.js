import './App.css';
import { Table, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});


  const callAPI = async () => {
    const res = await fetch('http://127.0.0.1:8000/all/');
    const body = await res.json();
    console.log(body);
    setData(body);
  }

  useEffect(() => {
    callAPI();
  }, [])


  return (
    <div className='justify-content-center'>
      <h1>Hello World</h1>
      <div className='container'>
        <Table striped bordered hover>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map(key => (
              <tr key={key}>
                <td>{data[key].id}</td>
                <td>{data[key].name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Button className='text-right btn btn-primary' variant='contained'>Add Apartment</Button>
      </div>
    </div>
  );
}

export default App;
