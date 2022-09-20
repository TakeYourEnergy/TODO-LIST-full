export type TFilterBy = 'all' | 'active' | 'complited'

export interface IFilterTabsInitialState {
   filterBy: TFilterBy
}

export interface ISetFilterAction {
   type: "SET_FILTER";
   payload: TFilterBy
}