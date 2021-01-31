import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import uuid from 'react-uuid'

const Create = ({addTasks}) => {
    const initialState = {
        id: "",
        task: "",
        state: false
    }

    const [task, setTask] = useState(initialState);

    const handleInput = (e) => {
        setTask({
            ...task,
            task: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskObject = {
            ...task,
            id: uuid(),
        }
        addTasks(taskObject);
        setTask(initialState);
    }
    return ( 
        <Row>
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" name="task" value={task.task} placeholder="Nueva tarea" onChange={handleInput} />
                        <Button variant="primary" type="submit" className="mt-2" size="sm" block>Agregar</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
     );
}
 
export default Create;