import "./ModalCustom.css";
interface Props {
  name: string;
  animal: string;
}
const ModalCustom = ({ name, animal }: Props) => {
  return (
    <div className="container-modal">
      <h3>Hola {name}</h3>
      <p>Sabemos que tu animal favorito es: </p>
      <span className="animal-value-modal">{animal}</span>
    </div>
  );
};

export { ModalCustom };
