import { useState, type Dispatch, type SetStateAction } from "react";
import "./search.css"

type TaskAddProps = {
  onAddTask: (title: string) => void;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchWord: Dispatch<SetStateAction<string>>;
  progressFilter: string;
  setProgressFilter: Dispatch<SetStateAction<string>>;
};

export default function Search({
  onAddTask,
  searchText,
  setSearchText,
  setSearchWord,
  progressFilter,
  setProgressFilter,
}: TaskAddProps) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = () => {
    onAddTask(taskTitle);
    setTaskTitle("");
  };

  const handleSearch = () => {
    setSearchWord(searchText);
  };

  return(
    <section id="searchTop">
      <div id="textZone">
        <div id="taskAdd">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="タスクを追加"
          />
          <button className="search_Button" onClick={handleSubmit}>
            追加
          </button>
        </div>

        <div id="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="タスクの名前を入力"
          />
          <button className="search_Button" onClick={handleSearch}>
            検索
          </button>
        </div>
      </div>

      <div id="filter">
        <button className="search_Button"
          onClick={() => setProgressFilter("all")}>
          すべて
        </button>
        <button className="search_Button"
          onClick={() => setProgressFilter("inComp")}>
          0%
        </button>
        <button className="search_Button"
          onClick={() => setProgressFilter("halfComp")}>
          50%
        </button>
        <button className="search_Button"
          onClick={() => setProgressFilter("comp")}>
          100%
        </button>
      </div>
    </section>
  );
}