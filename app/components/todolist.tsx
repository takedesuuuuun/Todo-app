import { useState } from "react";
import "./todolist.css";

export function List() {

  type Task = {
    id: number;
    title: string;
    completeness: number;
    category: string;
    priority: number;
  };

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "React学習",
      completeness: 1,
      category: "学習",
      priority: 4
    },
    {
      id: 2,
      title: "C++学習",
      completeness: 0,
      category: "学習",
      priority: 2
    }
  ]);

  const [openTaskId, setOpenTaskId] = useState<number | null>(null);

  return(
    <div id="list">
      {tasks.map((task) => (
        <div key={task.id} className="tasks">
          <h2><strong>{task.title}</strong></h2>
            <p>カテゴリー : {task.category}</p>

            <button onClick={() => setOpenTaskId(task.id)} className="categoryButton">
              設定
            </button>

            {openTaskId === task.id && (
              <div className="edit">
                <div className="categoryEdit">
                  <input
                    type="text"
                    placeholder="カテゴリー名を入力"
                    name="category"
                  />
                  <button className="editButton">編集</button>
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