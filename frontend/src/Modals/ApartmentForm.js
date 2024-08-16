import { Form } from 'react-bootstrap'

export default function ApartmentForm({ name, setName, sqrFt, setSqrFt, price, setPrice }) {
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
}