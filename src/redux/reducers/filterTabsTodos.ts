import { IFilterTabsInitialState, ISetFilterAction } from "./types/filterTabs";

const initialState: IFilterTabsInitialState = {
  filterBy: "all" //для табов
};

export const filterTabsReducer = (state = initialState, action: ISetFilterAction) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filterBy: action.payload
      };
    default:
      return state;
  }
};
