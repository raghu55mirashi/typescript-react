import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { FaTrash, FaEdit } from 'react-icons/fa';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<any[]>>
}

export const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleDelete = (id: number) => {
        setTodos(todos.filter(i => i.id !== id));
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map(i => i.id == id ? { ...todos, todo: editTodo } : i))
        setEdit(false);
    }
    
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])
    
    return (
        <div>
            <li key={todo.id}>
                <form onSubmit={(e) => handleSubmit(e, todo.id)}>
                    {edit ? <input type='text' ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} /> : <span>{todo.todo}</span>}
                    <span onClick={() => setEdit(true)}>
                        <FaEdit />
                    </span>
                    <span onClick={() => handleDelete(todo.id)}>
                        <FaTrash />
                    </span>
                </form>
            </li>
        </div>
    )
}
