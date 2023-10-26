/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line quotes
import { ConstantEnum } from "@/enums/todo.enum"

import { NewTodoType,TodoType,UpdateTodoType } from '@/types/todo.type'

//Recuperar todos da chave todo do localStorage
const getTodosLocalStorage = (): TodoType[] => {
    return JSON.parse(localStorage.getItem(ConstantEnum.KEY_LOCAL_STORAGE) ?? '[]')
}

//Salvar Todos na chave do localStorage
const saveTodosLocalStorage = (todo: NewTodoType):UpdateTodoType => {
    const todos = getTodosLocalStorage()
    const newId = todos[todos.length - 1]?.id + 1 ?? 1
    const newTodo = { ... todo, id: newId }

    const updatedTodos = [ ... todos, newTodo ]
    localStorage.setItem(ConstantEnum.KEY_LOCAL_STORAGE, JSON.stringify(updatedTodos))
    return newTodo
}

// Create
export const createNewTodo = async (todo: NewTodoType): Promise<UpdateTodoType> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const updatedTodo = saveTodosLocalStorage(todo)
            resolve(updatedTodo)
        }, ConstantEnum.FAKE_TIME_REQUEST)
    })
}

// Update
export const updateTodo = async (todo: UpdateTodoType): Promise<UpdateTodoType[]> => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            const todos = getTodosLocalStorage()
            const updatedTodos = todos.map((todoItem) => {
                if (todoItem.id === todo.id) {
                    return todo
                }
            return todoItem
            })
            localStorage.setItem(ConstantEnum.KEY_LOCAL_STORAGE, JSON.stringify(updatedTodos))
            resolve(updatedTodos)
        }, ConstantEnum.FAKE_TIME_REQUEST)
    })
}

//Delete
export const deleteTodo = async (id: number): Promise<UpdateTodoType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const todos = getTodosLocalStorage()
            const updatedTodos = todos.filter((todo) => todo.id !== id)
            localStorage.setItem(ConstantEnum.KEY_LOCAL_STORAGE, JSON.stringify(updatedTodos))
            resolve(updatedTodos)
        }, ConstantEnum.FAKE_TIME_REQUEST)
    })
}

// Read
export const readTodo = async (): Promise<TodoType[]> => {
    return new Promise((resolve) => {
        const todos = getTodosLocalStorage()
        setTimeout(() => {
            resolve(todos)
        }, ConstantEnum.FAKE_TIME_REQUEST)
    })
}
