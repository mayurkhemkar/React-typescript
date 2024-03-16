import React, { useRef, useState } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  HandleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, HandleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e)=>{
      HandleAdd(e);
      inputRef.current?.blur()
    }}>
      <input
        type="input"
        placeholder="Enter a text"
        ref={inputRef}
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
