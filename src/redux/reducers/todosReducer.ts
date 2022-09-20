import { iTaskInitialState, TActions } from "./types/todosTypes";

const initialState: iTaskInitialState = {
  todos: [],
  loading: false
};

export const todosReducer = (state = initialState, action: TActions): iTaskInitialState => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.floor(Math.random() * (11300 - 1)) + 1,
            text: action.payload.text,
            complited: action.payload.check
          }
        ]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              complited: !todo.complited
            };
          } else {
            return todo;
          }
        })
      };
    case "SELECT_ALL":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            complited: true
          };
        })
      };
    case "DELETE_ALLTASKS":
      return {
        ...state,
        todos: []
      };
    case "UNSELECT_ALL":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            complited: false
          };
        })
      };
    case "EDIT_TODO":
      const { payload } = action; //тут текст
      const { id } = action;
      const { todos } = state;

      const itemIndex = todos.findIndex((res) => res.id === id);
      const todo = todos.filter((todo) => todo.id === id);

      const nextTodos = [
        ...todos.slice(0, itemIndex),
        { id: todo[0].id, text: payload, complited: todo[0].complited },
        ...todos.slice(itemIndex + 1)
      ];
      return {
        ...state,
        todos: nextTodos
      };
    case "SET_TASK":
      return {
        ...state,
        todos: action.payload
      };
    case "LOADER_ON":
      return {
        ...state,
        loading: true
      };
    case "LOADER_OFF":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
