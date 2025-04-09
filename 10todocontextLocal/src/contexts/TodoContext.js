import { createContext, useContext } from "react";

export const TodoContext = createContext( {} )


export const useTodo = () =>
{
    return useContext( TodoContext )
}

export const ToDoProvider = ToDoProvider.Provider