import "./InputCustom.css";
interface Props {
  label?: string;
  type: string;
  id: string;
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputCustom = ({
  type,
  label,
  id,
  value,
  onChange,
  placeholder,
}: Props) => {
  return (
    <div className="container-input-custom">
      {label && <label className="label-input">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className="input-text"
      />
    </div>
  );
};

export { InputCustom };
