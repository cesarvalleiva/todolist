import { Alert } from 'react-bootstrap'

const Item = ({id, task, state}) => {
    return ( 
        <Alert key={id} variant={"secondary"}>
            {task}
        </Alert>
     );
}
 
export default Item;