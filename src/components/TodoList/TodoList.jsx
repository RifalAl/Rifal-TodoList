import { useState } from "react";

import FormNewList from "./FormNewList";
import List from "./List";

const TodoList = () => {
  let [dataList, setDataList] = useState([
    { id: 1, judul: "Meeting Dengan Client" },
    { id: 2, judul: "Menyiapkan Agenda Rapat" },
  ]);

  const addListHandler = (newDataList) => {
    setDataList((prevItem) => [{id: Math.random() * 10, judul: newDataList}, ...prevItem])
  };

  const removeListHandler = (id) => {
    setDataList(dataList.filter(item => item.id !== id))
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[40%]">
        <FormNewList onAdd={addListHandler} />
        <List dataList={dataList} onRemove={removeListHandler}/>
      </div>
    </div>
  );
};

export default TodoList;
