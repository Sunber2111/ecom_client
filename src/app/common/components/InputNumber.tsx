import React from "react";
import NumberFormat from "react-number-format";

interface IProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  title?: string;
}

const InputNumber: React.FC<IProps> = ({ title, value, setValue }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}
    >
      <label>{title}</label>
      <NumberFormat
        className="input-number"
        thousandSeparator={true}
        value={value}
        max={99999999}
        min={0}
        step={100000}
        onValueChange={(values) => {
          const { formattedValue, value } = values;
          setValue(parseInt(value));
        }}
      />
    </div>
  );
};

export default InputNumber;
