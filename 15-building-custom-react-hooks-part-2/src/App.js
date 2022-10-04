import React, { useCallback, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttpGet from "./hooks/use-http-get";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTaskHandler = useCallback((data) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const {
    isLoading,
    error,
    refresh: fetchTasks,
  } = useHttpGet({
    url: "https://star-wars-app-a2984-default-rtdb.firebaseio.com/tasks.json",
    callback: getTaskHandler,
  });

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
