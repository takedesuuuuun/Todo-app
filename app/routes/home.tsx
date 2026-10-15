import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import Search from "../components/search";
import List from "../components/todolist";
import { Footer } from "../components/footer";

type Task = {
  id: number;
  title: string;
  completeness: number;
  category: string;
  priority: number;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo App" },
    { name: "description", content: "takedesuuuuun's TodoApp." },
  ];
}

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

    console.log("保存したtasks:", tasks)
  }, [tasks, isLoaded]);

  const addTask = (title: string) => {
    if (title.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      title: title,
      completeness: 0,
      category: "",
      priority: 1,
    };

    setTasks([...tasks, newTask]);
  };

  tasks.map((task) => {
    if (task.category === "") {
      task.category = "未分類"
    }

    if (task.title === "") {
      task.title = "無題"
    }
  })

  const [searchText, setSearchText] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const [progressFilter, setProgressFilter] = useState("all");

  return(
    <div>
      <Header />

      <main>
        <Search
          onAddTask={addTask}
          searchText={searchText}
          setSearchText={setSearchText}
          setSearchWord={setSearchWord}
          progressFilter={progressFilter}
          setProgressFilter={setProgressFilter}
        />
        <List
          tasks={tasks}
          setTasks={setTasks}
          searchWord={searchWord}
          progressFilter={progressFilter}
        />
      </main>

      <Footer />
    </div>
  );
}
