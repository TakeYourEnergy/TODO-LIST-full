import { Paper } from "@mui/material";
import "./styles.css";
import AddFiled from "./components/AddField";
import { Divider, Button, List } from "@mui/material";
import Item from "./components/Item";
import { useDispatch, useSelector } from "react-redux";
import TabsFilter from "./components/tabsFilter/TabsFilter";
import {
  toggleStatusActions,
  deleteAllTasksAction,
  selectAllAction,
  unSelectAllActions,
  setTaskAction
} from "./redux/actions/actionsCreators";
import { useEffect } from "react";
import Spinner from "./components/spinner/spinner";
import React from "react";
import { useAppDispatch, useAppSelector } from ".";



export default function App() {
  const dispatch = useAppDispatch();

  const { filterBy, todos, loading } = useAppSelector((state) => ({
    filterBy: state.filterTabsReducer.filterBy,
    todos: state.todosReducer.todos,
    loading: state.todosReducer.loading
  }));

  useEffect(() => {
    dispatch(setTaskAction());
  }, [dispatch]);

  const toggleStatus = (id: number) => {
    dispatch(toggleStatusActions(id));
  };

  const deleteAllTasks = () => {
    if (window.confirm("Удалить все задачи?")) {
      dispatch(deleteAllTasksAction());
    }
  };

  const selectAll = () => {
    dispatch(selectAllAction());
  };

  const unSelectAll = () => {
    dispatch(unSelectAllActions());
  };

  return (
    <div className="App">
      <Paper className="wrapper" elevation={8}>
        <Paper
          sx={{ backgroundColor: "rgb(93, 93, 255)", color: "white" }}
          className="header"
          elevation={0}
        >
          <h4>Список задач</h4>
        </Paper>
        <AddFiled />
        <Divider />
        <TabsFilter />
        <Divider />
        <div className={loading ? "spinner" : "spin"}>
          <Spinner />
        </div>
        <List>
          {todos
            .filter((todo) => {
              if (filterBy === "all") return true;
              if (filterBy === "complited") return todo.complited;
              if (filterBy === "active") return !todo.complited;
              else return false;
            })
            .map((obj) => {
              return (
                <Item
                  key={obj.id}
                  text={obj.text}
                  complited={obj.complited}
                  id={obj.id}
                  toggleStatus={toggleStatus}
                />
              );
            })}
        </List>
        <Divider />
        <div className="btns">
          {todos.some((todo) => todo.complited === false) ? (
            <Button
              disabled={todos.length === 0}
              onClick={selectAll}
              style={{ marginRight: "33px" }}
            >
              Отметить все
            </Button>
          ) : (
            <Button
              disabled={todos.length === 0}
              onClick={unSelectAll}
              style={{ marginRight: "33px" }}
            >
              Снять отметки
            </Button>
          )}
          <Button disabled={todos.length === 0} onClick={deleteAllTasks}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}
