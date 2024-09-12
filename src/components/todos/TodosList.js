// src/components/todos/TodosList.js
import React, { useState } from 'react';
import List from '../common/List';
import TodoCard from '../todos/TodoCard';
import { todos as initialTodos } from '../data/dummyData';

const TodosList = ({ todos, onToggle }) => {
    const [todoList, setTodoList] = useState(initialTodos);

    const handleEditTodo = (id, newTitle) => {
        setTodoList(todoList.map(todo =>
            todo.id === id ? { ...todo, title: newTitle } : todo
        ));
    };

    const handleDeleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const handleUpdateNotes = (id, notes) => {
        setTodoList(todoList.map(todo =>
            todo.id === id ? { ...todo, notes, hasNotes: notes.trim() !== '' } : todo
        ));
    };

    const handleToggleRecurring = (id) => {
        setTodoList(todoList.map(todo =>
            todo.id === id ? { ...todo, isRecurring: !todo.isRecurring } : todo
        ));
    };

    return (
        <>
            <List
                title="To-Dos"
                items={todoList}
                renderItem={(todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onToggle={() => setTodoList(todoList.map(t => t.id === todo.id ? {...t, isCompleted: !t.isCompleted} : t))}
                        onEdit={handleEditTodo}
                        onDelete={handleDeleteTodo}
                        onUpdateNotes={handleUpdateNotes}
                        onRepeatToggle={handleToggleRecurring}
                    />
                )}
            />
        </>
    );
};

export default TodosList;
