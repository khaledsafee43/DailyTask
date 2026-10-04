import { useState } from "react";
import EditTask from "./Edit";

export default function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      return;
    }
    setTask("");
    setList((item) => [...item, { id: crypto.randomUUID(), title: task }]);
  };
  function handleDelete(id) {
    setList((items) => items.filter((item) => item.id !== id));
  }
  function handleEdit(id, newTitle) {
    setList((lists) =>
      lists.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item,
      ),
    );

    setEditingId(null);
  }
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">HBC · REACT PRACTICE</span>
          <h1>Add the lists for daily check.</h1>
          <p>A small catalog to practice the CRUD Oparator Delete and EDIT.</p>
        </div>
      </header>

      <section className="catalog" aria-labelledby="catalog-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">THE CATALOG</span>
            <h2 id="catalog-heading">Add your tasks for the day</h2>
          </div>
        </div>

        <form className="controls" onSubmit={handleSubmit}>
          <label>
            Add The Task
            <input
              type="text"
              placeholder="add task..."
              value={task}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10"
              onChange={(event) => setTask(event.target.value)}
            />
          </label>
          <button className="reset" type="submit">
            Add Task
          </button>
        </form>

        {list.length === 0 ? (
          <div className="empty" role="status">
            <span>⌕</span>
            <h3>No task added</h3>
          </div>
        ) : (
          <div>
            {list.map((product) => (
              <article className="flex gap-1.5" key={product.id}>
                <div
                  className="flex justify-between items-center bg-white py-3 mb-3 rounded-md shadow-md px-2.5 w-full"
                  aria-hidden="true"
                >
                  {editingId === product.id ? (
                    <EditTask
                      task={product}
                      onSave={(newTitle) => handleEdit(product.id, newTitle)}
                      onCancel={() => setEditingId(null)}
                    />
                  ) : (
                    <>
                      {product.title}
                      <div className="flex gap-4 items-center">
                        <button
                          className="bg-green-200 text-center py-1 px-1 rounded-full hover:cursor-pointer hover:bg-green-300"
                          onClick={() => setEditingId(product.id)}
                        >
                          🖊️
                        </button>

                        <button
                          className="bg-red-200 py-1 px-1 text-center rounded-full hover:cursor-pointer hover:bg-red-300"
                          onClick={() => handleDelete(product.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
