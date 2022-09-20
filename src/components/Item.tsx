import {
  ListItem,
  Checkbox,
  Typography,
  IconButton,
  TextField,
  Button
} from "@mui/material";
import styles from "./item.module.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { FC, useState } from "react";
import Confirm from "./confirm";
import { useDispatch } from "react-redux";
import { editButonAction } from "../redux/actions/actionsCreators";
import { useAppSelector } from "..";
import React from "react";

interface IItem {
  text: string;
  complited: boolean;
  id: number;
  toggleStatus: (id: number) => void
}

const Item: FC<IItem> = ({ text, complited, id, toggleStatus }) => {
  const todos = useAppSelector((state) => state.todosReducer.todos);

  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState(false); // флаг для изменения
  const [editInput, setEditInput] = useState("");
  const dispatch = useDispatch();

  const todo = todos.filter((todo) => todo.id === id);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleEdit = () => {
    setEditInput(todo[0].text); // для того, чтобы в инпут попадала та задача, которую хотим изменить
    setEdit(true);
  };

  const handleEditButton = (text: string, id: number) => {
    dispatch(editButonAction(text, id));
    setEdit(false);
  };

  return (
    <ListItem>
      {edit === false ? (
        <>
          <div className={styles.content}>
            <Checkbox
              sx={{ marginRight: "10px", marginLeft: "10px" }}
              className={styles.checkbox}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={complited}
              onChange={() => toggleStatus(id)}
            />
          </div>
          <Typography sx={{ width: "400px" }}>{text}</Typography>
          <div className={styles.button}>
            <IconButton
              sx={{
                padding: "0",
                width: "30px",
                height: "30px",
                marginRight: "25px"
              }}
              onClick={() => handleEdit()}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              sx={{ padding: "0", width: "30px", height: "30px" }}
              onClick={() => handleClickOpen()}
            >
              <DeleteOutlineIcon />
            </IconButton>
            <Confirm open={open} setOpen={setOpen} id={id}></Confirm>
          </div>
        </>
      ) : (
        <>
          <TextField
            sx={{ width: "400px", marginRight: "25px", marginLeft: "25px" }}
            placeholder="Введите текст задачи..."
            variant="standard"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <Button onClick={() => handleEditButton(editInput, id)}>
            Изменить
          </Button>
        </>
      )}
    </ListItem>
  );
};

export default Item;
