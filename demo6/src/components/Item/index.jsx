import 'bootstrap/dist/css/bootstrap.css';

const Item = ({ persons }) => {

  return <>
    {
      persons.map(({ id, name, number }) => <>
        <tr key={id} className="text-center">
          <td>{id}</td>
          <td>{name}</td>
          <td>{number}</td>
        </tr>
      </>)
    }
  </>
}

export default Item;