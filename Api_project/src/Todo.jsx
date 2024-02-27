import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./redux/todoSlicer";

function Todo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  console.log(data);
  // useEffect(() => {
  //   dispatch(fetchTodo());
  // }, []);
  return (
    <div>
      <button onClick={() => dispatch(fetchTodo())}>Fetch Todo</button>
      {data.isLoading ? (
        <h1>Loading....</h1>
      ) : (
        data.data.map((todo, index) => {
          return <p key={index}>{todo.title} </p>;
        })
      )}
    </div>
  );
}

export default Todo;
