import { useState } from "react";

import Card from "../UI/Card";

const FormNewList = ({onAdd}) => {
  const [listInput, setListInput] = useState("");

  const listInputHandler = (event) => {
    setListInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    onAdd(listInput)
    setListInput("")
  }

  return (
    <Card classname="mt-10 mb-10">
      <form onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Add List
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="add your list..."
            required
            value={listInput}
            onChange={listInputHandler}
          />
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 mt-3 bg-lime-600 rounded-sm text-sm font-medium text-white">
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default FormNewList;
