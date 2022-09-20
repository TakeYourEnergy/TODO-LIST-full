import { Dispatch } from "react";
import { AppDispatch } from "../..";
import { TFilterBy } from "../reducers/types/filterTabs";
import { TActions } from "../reducers/types/todosTypes";

export const addTaskAction = (text: string, check: boolean) => {
  return {
    type: "ADD_TASK",
    payload: {
      text,
      check
    }
  };
};

export const toggleStatusActions = (id: number) => {
  return {
    type: "TOGGLE_COMPLETED",
    payload: id
  };
};

export const deleteTaskAction = (id: number) => {
  return {
    type: "DELETE_TODO",
    payload: id
  };
};

export const deleteAllTasksAction = () => {
  return {
    type: "DELETE_ALLTASKS"
  };
};

export const selectAllAction = () => {
  return {
    type: "SELECT_ALL"
  };
};

export const handleChangeTabsAction = (status: TFilterBy) => {
  return {
    type: "SET_FILTER",
    payload: status
  };
};

export const unSelectAllActions = () => {
  return {
    type: "UNSELECT_ALL"
  };
};

export const editButonAction = (text: string, id: number) => {
  return {
    type: "EDIT_TODO",
    payload: text,
    id: id
  };
};

interface ILoaderOn {
  type: "LOADER_ON"
}

export const loaderOn = (): ILoaderOn => {
  return {
    type: "LOADER_ON"
  };
};

interface ILoaderOff {
  type: "LOADER_OFF"
}

export const loaderOff = (): ILoaderOff => {
  return {
    type: "LOADER_OFF"
  };
};

export const setTaskAction = () => async (dispatch: AppDispatch) => {
  dispatch(loaderOn());
  const resp = await fetch("https://6315cf6833e540a6d385054c.mockapi.io/posts");
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: "SET_TASK",
      payload: data
    });
    dispatch(loaderOff());
  }
};
