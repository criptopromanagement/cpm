import {
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { FC, Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Account } from "src/types/user-data/account";

interface Props {
  myAccounts: Account[];
  handleDeleteAccount: (id: string) => void;
}
export const AccountList: FC<Props> = ({ myAccounts, handleDeleteAccount }) => {
  return (
    <List>
      <Divider />
      {myAccounts.map(({ id, name, cbu, coin }) => (
        <Fragment key={id}>
          <ListItem>
            <ListItemText primary={name} secondary={cbu} />
            <ListItemIcon>
              <Chip label={coin} color="primary" />
            </ListItemIcon>
            <ListItemIcon>
              <IconButton onClick={() => handleDeleteAccount(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};
