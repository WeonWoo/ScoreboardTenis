import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import LineUpAddDialog from "../modules/LineUpAddDialog";

const defaultListItem: LineUpListItem[] = [
  {
    id: 0,
    name: "test",
    sex: "male",
    club: ["쏘텐동"],
    startDate: "2022-04-13",
  },
];

export default function AlignItemsList(props: { list: LineUpListItem[] }) {
  return (
    <List sx={{ width: "100%", bgcolor: "#e7ebf0" }}>
      {props.list.map((item: LineUpListItem) => {
        return (
          <React.Fragment>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Card>
                    <CardContent>
                      <Typography
                        component="p"
                        variant="h5"
                        color="text.primary"
                      >
                        {item.name}
                      </Typography>
                      <table>
                        <tr>
                          <td>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Gender
                            </Typography>
                          </td>
                          <td>{item.sex}</td>
                        </tr>
                        {/* <tr>
                          <td>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Club
                            </Typography>
                          </td>
                          <td>{item.club?.join(",") || "-"}</td>
                        </tr> */}
                        <tr>
                          <td>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Doing tennis from &nbsp;
                            </Typography>
                          </td>
                          <td>{item.startDate || "someday"}</td>
                        </tr>
                      </table>
                    </CardContent>
                  </Card>
                }
              />
            </ListItem>
            <Divider variant="middle" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}

export const LineUp = () => {
  const [itemList, setItemList] = useState<LineUpListItem[]>(defaultListItem);
  const [open, setOpen] = React.useState(false);
  const handleFABClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpen(true);
  };

  const addItem = (item: LineUpListItem) => {
    setItemList([...itemList, item]);
  };

  return (
    <div>
      <AlignItemsList list={itemList} />
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        sx={{ position: "absolute", right: "20px", bottom: "20px" }}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleFABClick(e);
        }}
      >
        <AddIcon />
      </Fab>
      <LineUpAddDialog open={open} setOpen={setOpen} addItem={addItem} />
    </div>
  );
};
