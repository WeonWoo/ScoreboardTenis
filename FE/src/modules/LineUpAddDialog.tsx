import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import FormLabel from "@mui/material/FormLabel";

export default function LineUpAddDialog(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addItem: (item: LineUpListItem) => void;
}) {
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    props.setOpen(false);
  };

  const [name, setName] = useState<string | undefined>(undefined);
  const [sex, setSex] = useState<SEX>("male");
  const [startDate, setStartDate] = useState<string | undefined>(undefined);

  const itemValidityCheck = () => {
    if (name !== undefined) {
      props.addItem({
        id: 0,
        name,
        sex,
        club: undefined,
        startDate: startDate
          ? moment(startDate).format("YYYY-MM-DD")
          : undefined,
      });
      handleClose();
    }
  };
  const handleSexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSex((event.target as HTMLInputElement).value as SEX);
  };
  const handleStartDate = (date: string | null) => {
    if (date) {
      setStartDate(date);
    }
  };

  return (
    <Dialog
      //   fullScreen={fullScreen}
      open={props.open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Add player on lineup"}
      </DialogTitle>
      <DialogContent>
        <TextField
          required
          id="name-input-required"
          label="Name"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          variant="standard"
          autoFocus
        />
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={sex}
          name="sex-radio-buttons-group"
          onChange={handleSexChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        <DatePicker
          label="Begin of Tennis"
          value={startDate}
          onChange={(newValue) => handleStartDate(newValue)}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={itemValidityCheck}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
