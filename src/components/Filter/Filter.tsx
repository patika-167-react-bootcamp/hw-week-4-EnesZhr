import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FilterIcon from "@mui/icons-material/FilterAltTwoTone";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SelectFilterStatu from "../Select/SelectFilterStatu";
import SelectFilterBox from "../Select/SelectFilterBox";

function Filter(props: any) {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          marginTop: "20px",
          marginLeft: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <SelectFilterBox
            name={props.categoryName}
            list={props.categoryList}
            getAllStatuses={props.getAllStatuses}
          />
        </FormControl>
        <FormControl>
          <SelectFilterStatu
            name={props.statuName}
            list={props.statuList}
            categoryList={props.categoryList}
          />
        </FormControl>
        <Button
          variant="outlined"
          startIcon={<FilterIcon />}
          sx={{ height: "55px" }}
        >
          Filter
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ height: "55px" }}
        >
          Clear Filter
        </Button>
      </Box>
    </div>
  );
}

export default Filter;
