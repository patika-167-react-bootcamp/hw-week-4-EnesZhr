import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import SelectBox from "../Select/SelectBox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import SelectStatu from "../Select/SelectStatu";

function TodoListItem(props: any) {
  return (
    <div>
      <Box>
        <List
          sx={{
            width: "100%",
            maxWidth: 650,
            marginLeft: "30px",
            padding: "5px",
            backgroundColor: "#c5cae9",
          }}
        >
          {props.todoList.map((value: any) => (
            <ListItem
              sx={{ margin: "10px" }}
              key={value.id}
              disableGutters
              secondaryAction={
                <IconButton>
                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <SelectBox
                      name={props.categoryName}
                      list={props.categoryList}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <SelectStatu
                      name={props.statuName}
                      list={props.statuList}
                    />
                  </FormControl>
                </IconButton>
              }
            >
              <ListItemText primary={`${value.text}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default TodoListItem;
