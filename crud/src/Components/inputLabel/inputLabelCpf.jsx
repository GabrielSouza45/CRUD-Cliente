import React from "react";
import "./inputLabel.css";

const label = ({ texto, tipo, evento, nome, valor, holder }) => {
  return (
    <>
      <div className="labels">
        <label>{texto}</label>
        <input
          onChange={evento}
          value={valor}
          name={nome}
          type={tipo}
          placeholder={holder}
          maxlength="11"
        />
      </div>
    </>
  );
};

export default label;
