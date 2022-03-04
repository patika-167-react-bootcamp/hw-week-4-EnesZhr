import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SelectTodoListBox from "../Select/SelectTodoListBox";
import SelectTodoListStatu from "../Select/SelectTodoListStatu";

function TodoList(props: any) {
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
        <TextField
          id="outlined-basic"
          label="Todo"
          variant="outlined"
          onChange={(event: any) => {
            props.setTodoText(event.target.value);
          }}
          value={props.todoText}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectTodoListBox
            name={props.categoryName}
            list={props.categoryList}
            addedCategory={props.addedCategory}
            getAllStatuses={props.getAllStatuses}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectTodoListStatu name={props.statuName} list={props.statuList} />
        </FormControl>
        <Button
          variant="contained"
          sx={{ height: "55px" }}
          onClick={props.handleSubmit}
          color="success"
        >
          Add Todo
        </Button>
      </Box>
    </div>
  );
}

export default TodoList;
