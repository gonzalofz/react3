import { ListGroup } from "react-bootstrap";
const ListColaborators = ({ colaboradores = [] }) => {
  const { Item } = ListGroup;

  return (
    <div style={{ paddingTop: "50px" }}>
      <ListGroup variant="flush">
        {colaboradores.map((colaborador, index) => {
          const { nombre, correo } = colaborador;

          return <Item>{`${nombre} - ${correo}`}</Item>;
        })}
      </ListGroup>
    </div>
  );
};

export default ListColaborators;
