import classes from "./Counter.module.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";

export const Todolist = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewtask] = useState("");
  const [activity, setActivity] = useState("");
  const [newActivity, setNewActivity] = useState("");

  const fetchActivity = () => {
    Axios.get("https://www.boredapi.com/api/activity").then((res) => {
      setActivity(res.data.activity);
    });
  };

  useEffect(() => {
    return () => {
      fetch(fetchActivity);
    };
  }, []);

  const handleGeneratedChange = (event) => {
    setNewActivity(event.target.value);
  };

  const addGeneratedTask = (event) => {
    const activity = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newActivity ? newActivity : event,
    };
    setTodoList([...todoList, activity]);
  };

  const handleChange = (event) => {
    setNewtask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className={classes.pageContainer}>
      <div className={classes.card}>
        <h1>Todo List</h1>

        <div>
          <input
            type="text"
            placeholder="Write a task"
            onChange={handleChange}
          />
          <button className={classes.button} onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className={classes.listContainer}>
          {todoList.map((task) => {
            return (
              <div
                className={classes.listItem}
                style={{
                  backgroundColor: task.completed ? "#3ed236" : "white",
                }}
              >
                <div className={classes.checkItem}>
                  <button
                    className={classes.button}
                    onClick={() => completeTask(task.id)}
                  >
                    ✔
                  </button>
                  <span onChange={handleGeneratedChange}>{task.taskName}</span>
                </div>
                <button
                  className={classes.button}
                  onClick={() => deleteTask(task.id)}
                >
                  ✖
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.card}>
        <h1>Don't know what to do?</h1>
        <div>
          <div className={classes.activity}>
            <span>{activity}</span>
          </div>
          <div className={classes.twoButtons}>
            <button className={classes.button} onClick={fetchActivity}>
              Generate activity
            </button>
            <button
              className={classes.button}
              onClick={() => addGeneratedTask(activity)}
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
