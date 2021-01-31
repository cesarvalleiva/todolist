import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Components/Header'
import Create from './Components/Create'
import List from './Components/List'

function App() {
  const [tasks, setTasks] = useState([])

  const addTasks = (task) => {
    setTasks([...tasks, task])
  }

  return (
    <Container>
      <Header />
      <Row>
        <Col md={6}>
          <Create addTasks={addTasks} />
        </Col>
        <Col md={6}>
          <List tasks={tasks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
