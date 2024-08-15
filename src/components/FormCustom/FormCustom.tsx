import { useState } from "react";
import { ButtonCustom, InputCustom, ModalCustom } from "../common";
import "./FormCustom.css";

const FormCustom = () => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [isErrorActiveMessage, setIsErrorActiveMessage] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsErrorActiveMessage(false);
    setIsModalActive(false);
  };
  const changeAnimal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimal(e.target.value);
    setIsErrorActiveMessage(false);
    setIsModalActive(false);
  };
  const submitForm = () => {
    if (name.trim().length < 3 || animal.trim().length < 6) {
      setIsErrorActiveMessage(true);
      setIsModalActive(false);
    } else {
      setIsErrorActiveMessage(false);
      setIsModalActive(true);
    }
  };

  return (
    <>
      <div className="container-form">
        <h2 className="form-h2">Elige un Animal:</h2>
        <div className="input-form">
          <InputCustom
            id="name"
            placeholder="Ingresa tu nombre"
            type="text"
            value={name}
            onChange={changeName}
          />
        </div>
        <div className="input-form">
          <InputCustom
            id="animal"
            placeholder="Ingresa tu animal favorito"
            type="text"
            value={animal}
            onChange={changeAnimal}
          />
        </div>
        <div className="button-form">
          <ButtonCustom type="primary" text="ENVIAR" onClick={submitForm} />
        </div>
      </div>
      {isErrorActiveMessage && (
        <p className="message-error-form">
          Por favor chequea que la información sea correcta
        </p>
      )}
      {isModalActive && (
        <div className="modal-form">
          <ModalCustom name={name} animal={animal} />
        </div>
      )}
    </>
  );
};

export { FormCustom };
