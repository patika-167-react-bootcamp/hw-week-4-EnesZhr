import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";
import TodoListItem from "../TodoListItem/TodoListItem";
import Modals from "../Modals/Modals";
import axios from "axios";
import Button from "@mui/material/Button";

interface Todo {
  id: number;
  text: string;
  category: Category;
}

interface Category {
  id: number;
  name: string;
  status?: Status;
}

interface Status {
  id: number;
  name: string;
}

function Todo() {
  const [addedCategory, setAddedCategory] = useState<any>({});
  const [addedStatu, setAddedStatu] = useState<any>({});
  const [open, setOpen] = React.useState(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [statuList, setStatuList] = useState<Status[]>([]);
  const [categorySelect, setCategorySelect] = useState("");
  const [status, setStatus] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoListNew, setTodoListNew] = useState<any>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [categoryText, setCategoryText] = useState<string>("");
  const [statuText, setStatuText] = useState<string>("");
  const [newTodoList, setNewTodoList] = useState<any>({});

  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts?.pop()?.split(";").shift();
  }
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    const tokenTemp = getCookie("token");
    axios
      .get("http://localhost:80/category", {
        headers: {
          Authorization: "Bearer " + tokenTemp,
        },
      })
      .then((response) => {
        setCategoryList(response.data);
      });
  };

  const getAllStatuses = (id: any) => {
    const tokenTemp = getCookie("token");
    let responselist: Status[] = [];

    axios
      .get(`http://localhost:80/status?categoryId=${id}`, {
        headers: {
          Authorization: "Bearer " + tokenTemp,
        },
      })
      .then((response) => {
        response.data.map((item: any) => {
          responselist.push(item);
        });
      })
      .finally(() => setStatuList(responselist));
  };

  const handleCategoryAdded = () => {
    const tokenTemp = getCookie("token");
    axios
      .post(
        "http://localhost:80/category",
        { title: categoryText },
        {
          headers: {
            Authorization: "Bearer " + tokenTemp,
          },
        }
      )
      .then((response) => {
        setAddedCategory({
          id: response.data.id,
          name: response.data.title,
        });
        getAllCategories();
      });
  };

  const handleStatusAdded = (statuAdd: any) => {
    const tokenTemp = getCookie("token");
    axios
      .post("http://localhost:80/status", statuAdd, {
        headers: {
          Authorization: "Bearer " + tokenTemp,
        },
      })
      .then((response) => {
        response.data.map((item: any) => {
          statuList.push(item);
        });
      })
      .finally(() => setStatuList(statuList));
  };

  const handleTodoAdded = () => {
    const tokenTemp = getCookie("token");
    console.log(newTodoList);
    axios
      .post("http://localhost:80/todo", newTodoList, {
        headers: {
          Authorization: "Bearer " + tokenTemp,
        },
      })
      .then((response) => console.log(response.data));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: Math.round(Math.random() * 1000),
        text: todoText,
        category: {
          id: Math.round(Math.random() * 1000),
          name: categorySelect,
          status: {
            id: Math.round(Math.random() * 1000),
            name: status,
          },
        },
      },
    ]);
    console.log(todoList);
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Filter
        categoryList={categoryList}
        statuList={statuList}
        categoryName={"category"}
        statuName={"statu"}
        getAllStatuses={getAllStatuses}
      />
      <TodoList
        todoText={todoText}
        setTodoText={setTodoText}
        categoryList={categoryList}
        statuList={statuList}
        categoryName={"category"}
        statuName={"statu"}
        handleSubmit={handleSubmit}
        addedCategory={addedCategory}
        getAllStatuses={getAllStatuses}
        setNewTodoList={setNewTodoList}
        newTodoList={newTodoList}
      />
      <TodoListItem
        todoList={todoList}
        categoryList={categoryList}
        statuList={statuList}
        categoryName={"category"}
        statuName={"statu"}
      />
      <Modals
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        categoryText={categoryText}
        setCategoryText={setCategoryText}
        categoryList={categoryList}
        statuList={statuList}
        setStatu={setStatuList}
        statuText={statuText}
        setStatuText={setStatuText}
        handleCategoryAdded={handleCategoryAdded}
        handleStatusAdded={handleStatusAdded}
      />
    </>
  );
}

export default Todo;
