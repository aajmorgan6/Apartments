import './App.css';
import { Table, Button, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import AddModal from './Modals/AddModal';
import NavBar from './NavBar';
import DetailModal from './Modals/DetailModal';

function App() {
  const [data, setData] = useState({});
  const [filtered, setFiltered] = useState({});
  const [detailData, setDetailData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const callAPI = async () => {
    const res = await fetch('http://127.0.0.1:8000/all/');
    const body = await res.json();
    console.log(body);
    setData(body);
    setFiltered(body);
  }

  useEffect(() => {
    callAPI();
  }, [])

  const setShowAddFalse = () => setShowAddModal(false);
  const setShowAddTrue = () => setShowAddModal(true);
  const setShowDetailFalse = () => setShowDetailModal(false);
  const setShowDetailTrue = () => setShowDetailModal(true);

  const handleDetail = (d) => {
    setDetailData(d);
    console.log(d);
    setShowDetailTrue();
  }

  useEffect(() => {
    const tmp = Object.keys(data).filter(key => data[key].name.includes(searchText));
    const tmpArr = [];
    for (let i = 0; i < tmp.length; i++) {
      tmpArr.push(data[parseInt(tmp[i])])
    }
    setFiltered(tmpArr);
    // setSearchText("");
  }, [searchText, data])


  return (
    <div className=''>
      <NavBar />
      <div className='mt-3 container'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Search For Apartments</Form.Label>
            <Form.Control
              type='text'
              value={searchText}
              placeholder="Search by Address"
              onChange={(e) => setSearchText(e.target.value)}
            >
            </Form.Control>
          </Form.Group>
          
        </Form>
        <Table striped bordered hover>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(filtered).map(key => (
              <tr key={key} onClick={() => handleDetail(filtered[key])}>
                <td>{filtered[key].id}</td>
                <td>{filtered[key].name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className='container center'>
        <Button className='text-right btn btn-primary' variant='contained' onClick={setShowAddTrue}>Add Apartment</Button>
      </div>
      <div className='container center'>
        <DetailModal data={detailData} show={showDetailModal} setShow={setShowDetailFalse} setData={setData}/>
        <AddModal show={showAddModal} setShow={setShowAddFalse} setData={setData} />
      </div>
    </div>
  );
}

export default App;
