import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function SelectTodoListBox(props: any) {
  const [categorySelect, setCategorySelect] = useState("");
  const handleCategorySelectChange = (event: SelectChangeEvent) => {
    setCategorySelect(event.target.value as string);
    props.getAllStatuses(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">{`${props.name}`}</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id={`${props.name}Select`}
          value={categorySelect}
          label={`${props.name}`}
          onChange={handleCategorySelectChange}
        >
          {props.list.map((item: any) => (
            <MenuItem value={item.id}>{item.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectTodoListBox;
