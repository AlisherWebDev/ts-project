import { ChangeEvent, useState } from "react";
import { data } from "./constants";
import styles from "./Home.module.css";
import { IData } from "./interface";

const App = () => {
  const [title, setTitle] = useState<string>("");
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const handleSubmit = (): void => {
    const newData = {
      id: new Date().getTime(),
      title: title,
      description: "description",
    };
    setArr([...arr, newData]);
    setTitle("");
    if (!title?.length) {
      return;
    }
  };
  const deleteItem = (id: number): void => {
    const newData = arr.filter((c) => c.id != id);
    setArr(newData);
  };
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>APP Todo</h1>
      <input
        type="text"
        value={title}
        placeholder="Enter todo"
        className={styles.input}
        onChange={changeHandler}
      />
      <div className={styles.button}>
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
      <div className={styles.card}>
        {arr.map((c) => (
          <div key={c.id} className={styles.cardItem}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deleteItem(c.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
