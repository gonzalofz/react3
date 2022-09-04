import { Form } from "react-bootstrap";
import { Button } from "@mui/material";
import { BaseColaboradores } from "./utils/data";
import ListColaborators from "./ListColaborators";
import { useState } from "react";
const Colaborators = () => {
  const [currentColaborators, setCurrentsColaborators] =
    useState(BaseColaboradores);
  const [colaborators, setColaborators] = useState({});

  const changeInput = (inputName, event) => {
    const value = event.target.value;

    const newColaborator = { ...colaborators, [inputName]: value };

    setColaborators(newColaborator);
  };

  const handlerfindColaborator = () => {
    const newColaborator = {
      id: BaseColaboradores.length + 1,
      nombre: colaborators.nameColaborator,
      correo: colaborators.emailColaborator,
    };

    setCurrentsColaborators([...currentColaborators, newColaborator]);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <strong>
            <Form.Label>Nombre del colaborador</Form.Label>
          </strong>
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={(event) => changeInput("nameColaborator", event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <strong>
            <Form.Label>Correo del colaborador</Form.Label>
          </strong>
          <Form.Control
            type="email"
            placeholder="Correo"
            onChange={(event) => changeInput("emailColaborator", event)}
          />
        </Form.Group>

        <Button variant="contained" onClick={handlerfindColaborator}>
          Agregar colaborador
        </Button>
      </Form>

      <ListColaborators colaboradores={currentColaborators} />
    </div>
  );
};

export default Colaborators;
