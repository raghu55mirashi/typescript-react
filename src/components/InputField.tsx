import React, { useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  // export const InputField = ({todo, setTodo}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e) => {
      handleSubmit(e);
      inputRef.current?.blur();
    }}>
      <input type="text" ref={inputRef} placeholder="Enter todo" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button type="submit">Add</button>
    </form>
  )
}
