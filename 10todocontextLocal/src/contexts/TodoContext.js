import { createContext, useContext } from "react";

export const TodoContext = createContext( {
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    theme: dark
} )




export const useTodo = () =>
{
    return useContext( TodoContext )
}

export const ToDoProvider = ToDoProvider.Provider