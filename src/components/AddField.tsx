import { Checkbox } from "@mui/material";
import styles from "./AddField.module.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../redux/actions/actionsCreators";
import React from "react";
import { useAppDispatch } from "..";

const AddFiled = () => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();

  const addTask = (text: string, check: boolean) => {
    if (text.length !== 0) {
      dispatch(addTaskAction(text, check));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const chengeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const addBtn = () => {
    addTask(value, checked);

    setValue("");
    setChecked(false);
  };

  return (
    <div className={styles.field}>
      <Checkbox
        sx={{ marginRight: "10px", marginLeft: "10px" }}
        className={styles.checkbox}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        onChange={chengeCheckbox}
        checked={checked}
      />
      <TextField
        sx={{ width: "100%" }}
        placeholder="Введите текст задачи..."
        variant="standard"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={addBtn}>
        <AddIcon fontSize="medium" />
      </Button>
    </div>
  );
};

export default AddFiled;
