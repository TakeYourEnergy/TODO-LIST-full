export interface ITask {
   id: number;
   text: string;
   complited: boolean
}

export interface iTaskInitialState {
   todos: Array<ITask>;
   loading: boolean
}

interface IAddTaskAction {
   type: 'ADD_TASK',
   payload: {
      text: string;
      check: boolean
   }
}

interface IDeleteTaskAction {
   type: 'DELETE_TODO',
   payload: number
}

interface IToggleAction {
   type: 'TOGGLE_COMPLETED',
   payload: number
}

interface ISelectAllAction {
   type: 'SELECT_ALL',
}

interface IDeleteAllTasksAction {
   type: 'DELETE_ALLTASKS',
}

interface IUnselectAllAction {
   type: 'UNSELECT_ALL',
}

interface IEditTodoAction {
   type: 'EDIT_TODO';
   payload: string;
   id: number
}

interface ISetTaskAction {
   type: 'SET_TASK';
   payload: Array<ITask>;
}

interface ILoaderOnAction {
   type: 'LOADER_ON';
}

interface ILoaderOfAction {
   type: 'LOADER_OFF';
}


export type TActions =
   IAddTaskAction |
   IDeleteTaskAction |
   IToggleAction |
   ISelectAllAction |
   IDeleteAllTasksAction |
   IUnselectAllAction |
   IEditTodoAction |
   ISetTaskAction |
   ILoaderOnAction |
   ILoaderOfAction 
