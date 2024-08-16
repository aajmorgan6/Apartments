import './App.css';
import { Table, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import AddModal from './Modals/AddModal';

function App() {
  const [data, setData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);

  const callAPI = async () => {
    const res = await fetch('http://127.0.0.1:8000/all/');
    const body = await res.json();
    console.log(body);
    setData(body);
  }

  useEffect(() => {
    callAPI();
  }, [])

  const setShowAddFalse = () => setShowAddModal(false);
  const setShowAddTrue = () => setShowAddModal(true);


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
        <Button className='text-right btn btn-primary' variant='contained' onClick={setShowAddTrue}>Add Apartment</Button>
      </div>
      <div className='container center'>
        <AddModal show={showAddModal} setShow={setShowAddFalse} setData={setData} />
      </div>
    </div>
  );
}

export default App;
