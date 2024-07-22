import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useLang } from "@/hooks/useLang";

type Props = {
  subject: string;
  disabled: boolean;
  setSubject: Dispatch<SetStateAction<string>>;
};

const FormSelect = ({ subject, setSubject, disabled }: Props) => {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLang();
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
        className="bg-[#fff] h-[48px] md:h-[54px] border-white "
        onChange={handleChange}
        onOpen={handleOpen}
        onClose={handleClose}
        defaultValue="Математика"
        open={open}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiList-root": {
                paddingTop: 0,
                paddingBottom: 0,
              },
            },
          },
        }}
      >
        {t[lang].form.fields.subject.subjects.map((subject) => (
          <MenuItem
            key={subject}
            sx={{
              "&.Mui-selected:hover": {
                backgroundColor: "#7A5CFA",
              },
            }}
            className="text-[#666666] md:h-[54px] border border-solid border-[#cccccc] hover:bg-[#7A5CFA] hover:text-white transition-colors duration-300 linear"
            value={subject}
          >
            {subject}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
