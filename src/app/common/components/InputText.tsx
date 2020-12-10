import React from "react";
import { Input } from "semantic-ui-react";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  title?: string;
  size?: "big" | "small" | "mini" | "large" | "huge" | "massive" | undefined;
}

const InputText: React.FC<IProps> = ({
  title,
  value,
  setValue,
  size,
  children,
  placeholder,
}) => {

  return (
    <div className="d-flex f-row ali-cen">
      <div className="w-100" style={{ display: "flex", flexDirection: "column" }}>
        {title && <label>{title}</label>}
        <Input
          value={value}
          className="w-100"
          placeholder={placeholder}
          onChange={(e, { value }) => setValue(value)}
          size={size}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InputText;
