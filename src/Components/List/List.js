import Item from '../Item'

const List = ({tasks}) => {
    return ( 
        <>
            {tasks.length === 0 && <h4>No hay tareas</h4>}
            {tasks.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </>
     );
}
 
export default List;