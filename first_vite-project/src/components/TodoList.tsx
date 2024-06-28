import { Todo } from "../types/todos";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    oncompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({
todos,
oncompletedChange,
onDelete
}: TodoListProps){

    const todoSorted = todos.sort((a,b) =>{
        if(a.completed === b.completed){
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    })
    return(
        <>
        <div className="space-y-2">
            {todoSorted.map((todo) => (
                 <TodoItem
                     key={todo.id}
                     todo={todo}
                     oncompletedChange={oncompletedChange}
                     onDelete={onDelete}
                 />
             ))}            
        </div>
        {todos.length === 0 && (
            <p className="text-center text-sm text-gray-500">No todos yet</p>
        )}
        </>
    )   
}