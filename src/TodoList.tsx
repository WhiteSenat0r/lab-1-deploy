import { useState } from "react";

// Define the Todo type with name and completed status
type Todo = {
  name: string;
  completed: boolean;
};

export const TodoList = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    if (task.trim()) {
      // Create a new todo object with name and initial completed status
      setTasks([...tasks, { name: task, completed: false }]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle the completed status of a task
  const toggleStatus = (index: number) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div>
      <h1>Todo List Cool</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <table className={`todo-table${tasks.length > 2 ? ' has-many-rows' : ''}`}>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, index) => (
            <tr key={index}>
              <td>{t.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleStatus(index)}
                />
                {t.completed ? " Completed" : " Pending"}
              </td>
              <td>
                <button onClick={() => removeTask(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
