import { type  Dispatch, useState, type SetStateAction } from "react";
import "./todolist.css";

type Task = {
  id: number;
  title: string;
  completeness: number;
  category: string;
  priority: number;
};

type TaskListProps = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  searchWord: string;
  progressFilter: string;
};

export default function List({
  tasks,
  setTasks,
  searchWord,
  progressFilter,
}: TaskListProps) {

  const [openTaskId, setOpenTaskId] = useState<number | null>(null);

  const updateTitle = (
    id: number,
    newTitle: string
  ) => {
    setTasks(
      tasks.map((task) =>
      task.id === id
        ? { ...task, title: newTitle }
        : task
      )
    );
  };

  const [editTitle, setEditTitle] = useState("");

  const updateCategory = (
    id: number,
    newCategory: string
  ) => {
    setTasks(
      tasks.map((task) =>
      task.id === id
        ? { ...task, category: newCategory }
        : task
      )
    );
  };

  const [editCategory, setEditCategory] = useState("");

  const deleteTask = (id: number) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(searchWord)
  )
  .filter((task) => {
    if (progressFilter === "all") return true;
    if (progressFilter === "inComp") return task.completeness === 0;
    if (progressFilter === "halfComp") return task.completeness === 1;
    if (progressFilter === "comp") return task.completeness === 2;
  });

  return(
    <div id="list">
      {filteredTasks.map((task) => (
        <div key={task.id} className="tasks">
          <h2><strong>{task.title}</strong></h2>
            <p>カテゴリー : {task.category}</p>

            <button onClick={() => setOpenTaskId(task.id)} className="categoryButton">
              設定
            </button>

            {openTaskId === task.id && (
              <div className="edit">
                <div className="titleEdit">
                    <input
                      type="text"
                      value={editTitle}
                      placeholder="タイトル名を入力"
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                  <button
                    onClick={() => updateTitle(task.id, editTitle)}
                    className="editButton"
                  >
                    編集
                  </button>
                </div>

                <div className="categoryEdit">
                  <input
                    type="text"
                    value={editCategory}
                    placeholder="カテゴリー名を入力"
                    onChange={(e) => setEditCategory(e.target.value)}
                  />
                  <button
                    onClick={() => updateCategory(task.id, editCategory)}
                    className="editButton"
                  >
                    編集
                  </button>
                </div>
                <button onClick={() => setOpenTaskId(null)} className="exitButton">
                  <span></span>
                  <span></span>
                </button>

                <div className="completeness">
                <span>達成率 : </span>
                <span>{task.completeness * 50}%</span>

                <div className="completenessRange">
                  <span>0</span>

                  <input
                    type="range"
                    min={0}
                    max={2}
                    value={task.completeness}
                      onChange={(e) => {
                      const newCompleteness = Number(e.target.value);

                      setTasks(
                        tasks.map((t) =>
                        t.id === task.id
                          ? {...t, completeness: newCompleteness}
                          : t
                        )
                      );
                    }}
                  />

                  <span>100</span>
                </div>
              </div>

              <button onClick={() => deleteTask(task.id)} className="taskDelete">
                削除
              </button>
              </div>
            )}

        <div className="taskPriority">
          <span>優先度 : </span>
          <span>{task.priority}</span>

          <div className="priorityRange">
            
            <span>1</span>
            
            <input
                type="range"
                min={1}
                max={5}
                value={task.priority}
                onChange={(e) => {
                  const newPriority = Number(e.target.value);

                  setTasks(
                    tasks.map((t) =>
                    t.id === task.id
                      ? {...t, priority: newPriority}
                      : t
                    )
                  );
                }}
              />

              <span>5</span>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}