/* eslint-disable linebreak-style */
export type UpdateTodoType = {
    id: number;
    title: string;
    description: string;
    status: boolean;
    date: string;
}

export type NewTodoType = Omit<UpdateTodoType, 'id'>

export type TodoType = UpdateTodoType
