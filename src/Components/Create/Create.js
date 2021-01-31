import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import uuid from 'react-uuid'

const Create = () => {
    const initialState = {
        id: "",
        task: "",
        state: false
    }

    const [tasks, addTasks] = useState(initialState);

    const handleInput = (e) => {
        addTasks({
            ...tasks,
            id: uuid(),
            task: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('apretaste');
    }
    return ( 
        <Row>
            <Col md={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" name="task" placeholder="Nueva tarea" onChange={handleInput} />
                        <Button variant="primary" type="submit" block>Agregar</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
     );
}
 
export default Create;