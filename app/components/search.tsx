import { useState } from "react";
import "./search.css"

export function Search() {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <section id="searchTop">
      <div id="textZone">
        <div id="taskAdd">
          <input type="text" name="TaskAdd" placeholder="タスクを追加" />
          <button>追加</button>
        </div>

        <div id="search">
          <input type="text" name="Search" placeholder="タスクの名前を入力" />
          <button>検索</button>
        </div>
      </div>

      <div id="filter">
        <button>すべて</button>
        <button>0%</button>
        <button>50%</button>
        <button>100%</button>
      </div>
    </section>
  );
}