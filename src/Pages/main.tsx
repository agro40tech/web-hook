import React from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useAction";

const ViewMony: React.FC = () => {
  const state = useTypeSelector((state) => state.mony);
  const { GetMony } = useActions();

  console.log(state.mony);
  return (
    <div>
      <button
        style={{
          background: "green",
          padding: "10px 20px",
          border: "0",
          color: "white",
          fontSize: "19px",
        }}
        onClick={() => GetMony(5)}>
        Добавить
      </button>
      <br />
      {state.mony}
    </div>
  );
};

export default ViewMony;
