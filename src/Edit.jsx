import { useState } from "react";

export default function EditTask({ task, onSave, onCancel }) {
  const [value, setValue] = useState(task.title);

  return (
    <div className="w-full">
      <form className="flex gap-1.5 w-full" >
        <input
          type="text"
          value={value}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10"
          placeholder="Edit task..."
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex gap-4 items-center">
          <button
            type="button"
            className="bg-green-200 text-center py-1 px-1 rounded-full hover:cursor-pointer hover:bg-green-300"
            onClick={() => onSave(value)}
          >
            💾
          </button>

          <button
            type="button"
            className="bg-red-200 py-1 px-1 text-center rounded-full hover:cursor-pointer hover:bg-red-300"
            onClick={onCancel}
          >
            ❌
          </button>
        </div>
      </form>
    </div>
  );
}
