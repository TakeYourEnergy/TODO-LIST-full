import { Tabs, Tab } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../..";
import { handleChangeTabsAction } from "../../redux/actions/actionsCreators";
import { TFilterBy } from "../../redux/reducers/types/filterTabs";

const filterIndex: Record<TFilterBy, number> = {
  all: 0,
  active: 1,
  complited: 2
};

const TabsFilter = () => {
  const dispatch = useDispatch();
  const filterBy = useAppSelector((state) => state.filterTabsReducer.filterBy);

  const handleChangeTabs = (_: unknown, newIndex: number) => {
    const status = Object.keys(filterIndex)[newIndex] as TFilterBy; //делается массив ключей и по индексу обращаемся к нужному
    dispatch(handleChangeTabsAction(status));
  };

  return (
    <Tabs
      sx={{ marginBottom: "10px" }}
      onChange={handleChangeTabs}
      value={filterIndex[filterBy]}
    >
      <Tab label="Все"></Tab>
      <Tab label="Активные"></Tab>
      <Tab label="Завершенные"></Tab>
    </Tabs>
  );
};

export default TabsFilter;
