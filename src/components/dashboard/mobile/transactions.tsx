import {
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Skeleton,
} from "@mui/material";
import { FC, Fragment } from "react";
import { Transaction } from "src/types";
import { TransactionSkeleton } from "./transaction-skeleton";
import { TransactionsProps } from "../interfaces/transactions";



export const Transactions: FC<TransactionsProps> = ({ transactions, showLoader }) => {
  const currency = "USDT";
  const criptoCurrency = "USDT";
  return (
    <List component={Paper}>
      {showLoader && (
        <>
          <TransactionSkeleton />
          <TransactionSkeleton />
          <TransactionSkeleton />
        </>
      )}
      {transactions.map(({ id, type, text, formatedAmount, formatedDate, transactionTypeDescription, to }) => {


        return (
          <Fragment key={id}>
            <ListItem>
              <ListItemText primary={text} secondary={formatedDate} />
              <ListItemText
                primary={transactionTypeDescription}
                secondary={to}
                primaryTypographyProps={{
                  color: type === "retiro" ? "error" : "primary",
                }}
              />
              <ListItemIcon>
                <Chip
                  label={formatedAmount}
                  color={type === "retiro" ? "error" : "primary"}
                />
              </ListItemIcon>
            </ListItem>
            <Divider />
          </Fragment>
        );
      })}
    </List>
  );
};
