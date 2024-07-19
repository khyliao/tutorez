import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  subject: string;
  disabled: boolean;
  setSubject: Dispatch<SetStateAction<string>>;
};

const FormSelect = ({ subject, setSubject, disabled }: Props) => {
  const [open, setOpen] = useState(false);
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSubject(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <FormControl size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        disabled={disabled}
        value={subject}
        className="bg-[#fff] h-[48px] lg:h-[54px] border-white "
        onChange={handleChange}
        onOpen={handleOpen}
        onClose={handleClose}
        defaultValue="Математика"
        open={open}
      >
        <MenuItem value="Math">Математика</MenuItem>
        <MenuItem value="English">Англійська мова</MenuItem>
        <MenuItem value="Programming">Програмування</MenuItem>
        <MenuItem value="Ukrainian">Українська мова</MenuItem>
        <MenuItem value="History">Історія України</MenuItem>
        <MenuItem value="Biology">Біологія</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FormSelect;
