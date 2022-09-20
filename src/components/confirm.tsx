import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle
} from "@mui/material";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteTaskAction } from "../redux/actions/actionsCreators";

interface IConfirm {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  id: number
}

const Confirm: FC<IConfirm> = ({ open, setOpen, id }) => {
  const dispatch = useDispatch();

  const deleteTask = (id: number) => {
    dispatch(deleteTaskAction(id));
  };

  const handleCloseYes = () => {
    deleteTask(id);
    setOpen(false);
  };

  const handleCloseNo = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Вы действительно хотите удалить задачу?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Выберите да или нет.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseYes}>Да</Button>
        <Button onClick={handleCloseNo} autoFocus>
          Нет
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
