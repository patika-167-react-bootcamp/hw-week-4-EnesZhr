import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function SelectStatu(props: any) {
  const [categorySelect, setCategorySelect] = useState();
  const handleCategorySelectChange = (event: any) => {
    setCategorySelect(event.target.value);
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

export default SelectStatu;
