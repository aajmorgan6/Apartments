import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"

export default function DetailModal({ data, show, setShow, setData }) {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("");
    const [sqrFt, setSqrFt] = useState();
    const [price, setPrice] = useState();

    console.log(data)

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://127.0.0.1:8000/all/${data.id}/`, {
            method: "put",
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
        setEdit(false);
    }

    const handleDelete = async () => {
        const res = await fetch(`http://127.0.0.1:8000/all/${data.id}/`, {
            method: "delete"
        });
        const body = await res.json();
        setData(body);
        setShow();
    }

    const setDefaults = () => {
        setName(data.name);
        setSqrFt(data.sqr_ft);
        setPrice(data.price);
        setEdit(false);
    }

    useEffect(() => {
        setDefaults();
      }, [])

    return (
        <div className="justify-content-center">
            <Modal show={show} onHide={setShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Apartment {data.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { edit ? (
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
                    ) : (
                    <>
                        <p>Address: {data.name}</p>
                        <p>Square Feet: {data.sqr_ft}</p>
                        <p>Price Per Month: {data.price}</p>
                    </>
                    )}
                    
                </Modal.Body>
                <Modal.Footer>
                    { edit ? (
                        <>
                        <Button variant="contained" className="btn-primary" onClick={handleSubmit}>Submit</Button>
                        <Button variant="contained" className="btn-secondary" onClick={() => setEdit(false)}>Close</Button>
                        </>
                    ) : (
                        <>
                        <Button variant="contained" className="btn-secondary" onClick={handleDelete}>Delete Apartment</Button>
                        <Button variant="contained" className="btn-primary" onClick={() => setEdit(true)}>Edit Apartment Info</Button>
                        </>
                    )}
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}