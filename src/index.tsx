import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import App from "./App";

import { createStore, applyMiddleware, Dispatch, ActionCreator, Action } from "redux";
import { Provider, TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import React from "react";
import { TActions } from "./redux/reducers/types/todosTypes";
import { ISetFilterAction } from "./redux/reducers/types/filterTabs";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>; //главный стейт
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //типизация useSelector

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = Dispatch<TActions | ISetFilterAction>;

// Типизация всех экшенов приложения
type TApplicationActions = TActions | ISetFilterAction;


// Типизация thunk в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;


export const useAppDispatch = () => useDispatch<any>()

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
