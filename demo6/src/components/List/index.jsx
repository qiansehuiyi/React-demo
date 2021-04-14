import 'bootstrap/dist/css/bootstrap.css';
import Item from '../Item'

const List = ({ persons }) => {
  return <>
    <table className="table table-bordered" style={{ width: 400 }}>
      <thead>
        <tr>
          <th className="text-center">id</th>
          <th className="text-center">姓名</th>
          <th className="text-center">number</th>
        </tr>
      </thead>
      <tbody>
        {/* {
          persons.map(({ id, name, number }) => <p key={id}>{name} {number}</p>)
        } */}
        <Item persons={persons}></Item>
      </tbody>
    </table>
  </>

}

export default List