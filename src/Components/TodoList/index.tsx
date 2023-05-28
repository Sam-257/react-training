import React, { useEffect, useState } from "react";
import VisibilityControl from "./VisibilityControl";

type ITodoItems = {
  description: string;
  status: boolean;
};

const staticData = [
  {
    description: "Meeting",
    status: false,
  },
  {
    description: "HomeWork",
    status: false,
  },
  {
    description: "Sports",
    status: false,
  },
];

// const TodoItem = ({
//   todo,
//   index,
//   handleStatus,
//   handleEdit,
// }: {
//   todo: ITodoItems;
//   index: number;
//   handleStatus: (index: number) => void;
//   handleEdit: (index: number) => void;
// }) => {
//   return (
//     <tr key={index}>
//       <td>{todo.description}</td>
//       <td>
//         <input
//           type="checkbox"
//           name="status"
//           id="status"
//           checked={todo.status}
//           onChange={() => handleStatus(index)}
//         />
//       </td>
//       <td>
//         <button onClick={() => handleEdit(index)}>Edit</button>
//       </td>
//       <td>
//         <button onClick={() => handleDelete(index)}>Delete</button>
//       </td>
//     </tr>
//   );
// };

const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodoItems[]>(staticData);
  const [todosLeft, setTodosLeft] = useState<number>(0);
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number>(0);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);

  useEffect(() => {
    const temp = todoList.filter((todo) => !todo.status);
    setTodosLeft(temp.length);
  }, [todoList]);

  const isDuplicate = (newTodoDescription: string) => {
    if (!!todoList.find((todo) => todo.description === newTodoDescription)) {
      alert("Cannot add duplicate values");
      setNewTodoDescription("");
      setIsEdit(false);
      return true;
    }
    return false;
  };

  const handleStatus = (index: number) => {
    const temp = [...todoList];
    temp[index].status = !temp[index].status;
    setTodoList(temp);
  };

  const handleEdit = (index: number) => {
    setNewTodoDescription(todoList[index].description);
    setEditIndex(index);
    setIsEdit(true);
  };

  const handleDelete = (index: number) => {
    let temp = [...todoList];
    temp.splice(index, 1);
    setTodoList(temp);
  };

  const handleShow = () => {
    setShowCompleted(!showCompleted);
  };

  const addTodo = () => {
    if (isDuplicate(newTodoDescription)) {
      return;
    }
    let tempTodo = {
      description: newTodoDescription,
      status: false,
    };
    setTodoList([...todoList, tempTodo]);
    setNewTodoDescription("");
  };

  const editTodo = () => {
    if (isDuplicate(newTodoDescription)) {
      return;
    }
    let temp = [...todoList];
    temp[editIndex].description = newTodoDescription;
    setTodoList(temp);
    setIsEdit(false);
    setNewTodoDescription("");
  };

  const todoItems = (status: boolean) => {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo: ITodoItems, index: number) =>
            todo.status === status ? (
              <tr key={index}>
                <td>{todo.description}</td>
                <td>
                  <input
                    type="checkbox"
                    name="status"
                    id="status"
                    checked={todo.status}
                    onChange={() => handleStatus(index)}
                  />
                </td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Sambhav's TodoList</h1>
      <h2>Items left ({todosLeft}) </h2>
      <input
        type="text"
        placeholder="Todo Description"
        value={newTodoDescription}
        onChange={(e) => setNewTodoDescription(e.target.value)}
      />
      <button onClick={!isEdit ? addTodo : editTodo}>
        {!isEdit ? "Add" : "Edit"} Todo
      </button>
      {todoItems(false)}
      <VisibilityControl
        checkBoxName="Show Completed Todos"
        showCompleted={showCompleted}
        handleShow={handleShow}
      />
      {showCompleted ? todoItems(true) : ''}
    </div>
  );
};

export default TodoList;