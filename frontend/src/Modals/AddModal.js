import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function AddModal({ show, setShow, setData }) {
    const [name, setName] = useState("");
    const [sqrFt, setSqrFt] = useState();
    const [price, setPrice] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/all/', {
            method: "post",
            body: JSON.stringify({
                name: name,
                sqr_ft: parseFloat(sqrFt),
                price: parseFloat(price),
            })
        })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err.message));

        setName("");
        setSqrFt(0.0)
        setPrice(0.0);
        setShow();
    }

    return (
        <div className='justify-content-center'>
            <Modal show={show} onHide={setShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Apartment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Address of Apartment"
                                required>
                                </Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Square Feet</Form.Label>
                            <Form.Control
                                type='number'
                                value={sqrFt}
                                onChange={(e) => setSqrFt(e.target.value)}
                                required>
                                </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price per Month</Form.Label>
                            <Form.Control
                                type='number'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required>
                                </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" className='btn btn-primary' onClick={handleSubmit}>Save</Button>
                    <Button variant="" className='btn btn-secondary' onClick={setShow}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}