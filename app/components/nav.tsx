export function Nav() {

  return(
    <nav>
      <div>
        <input type="text" name="Search" placeholder="タスクの名前を入力" />
        <button>検索</button>
      </div>

      <div>
        <button>すべて</button>
        <button>未完了</button>
        <button>50%以下</button>
        <button>51%以上</button>
        <button>完了</button>
      </div>

      <div>
        <input type="text" name="TaskAdd" placeholder="タスクを追加" />
        <button>追加</button>
      </div>
    </nav>
  );
}