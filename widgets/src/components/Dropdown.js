import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //executa apenas uma vez ao renderizar o componente
  useEffect(() => {
    const onBodyClick = (e) => {
      //verifica se o elemento clicado está dentro da div do dropdown, ou seja, a referencia obtida pelo hook
      if (ref.current.contains(e.target)) {
        return;
      }
      //caso o click nao tenha ocorrido dentro da div pai do dropdown, entao executa a função
      setOpen(false);
    };

    //realiza o "bind" do evento ao body. Assim, sempre que houver um click esta função é chamada
    document.body.addEventListener("click", onBodyClick);

    return () => {
      //será chamado ao descontruir este componente, ou seja, remove-lo da tela, fazendo o unbind da função
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options
    .filter((op) => op.value !== selected.value)
    .map((option) => {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => onSelectedChange(option)}
        >
          {option.label}
        </div>
      );
    });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
