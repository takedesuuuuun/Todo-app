import type { Route } from "./+types/home";
import { Header } from "../components/header";
import { Nav } from "../components/nav";
import { List } from "../components/todolist";
import { Footer } from "../components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo App" },
    { name: "description", content: "takedesuuuuun's TodoApp." },
  ];
}

export default function Home() {
  return(
    <div>
      <Header />

      <main>
        <Nav />
        <List />
      </main>

      <Footer />
    </div>
  );
}
