import "./ButtonCustom.css";
type Props = {
  id?: string;
  type: string;
  text: string;
  onClick?: (() => Promise<void>) | (() => void);
};
const ButtonCustom = ({ id, type, text, onClick }: Props) => {
  return (
    <button id={id} className={`button-body type-${type}`} onClick={onClick}>
      <span className="text-button">{text}</span>
    </button>
  );
};

export { ButtonCustom };
