export interface Todo{
    id: number;
    todo: string;
    isDone: boolean
}

//useReducer example

// type Action = 
//     | {type: 'add', payload: string} 
//     | {type: 'delete', payload: number} ;


// const TodoReducer = (state: Todo[] = [], action: Action) =>{
//     switch (action.type) {
//         case "add":
            
//             break;
    
//         default:
//             break;
//     }
// }

// import { useReducer } from "react";

// import React from 'react'

// export const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, [])
//   return (
//     <div>ReducerExample</div>
//   )
// }
