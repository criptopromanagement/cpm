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

interface Props {
  transactions: Transaction[];
  showLoader: boolean;
}

export const Transactions: FC<Props> = ({ transactions, showLoader }) => {
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
      {transactions.map(({ id, type, amount, createdAt, fund }) => {
        const text =
          type === "buy"
            ? `Invertiste`
            : type === "inversion"
            ? `Invertiste`
            : `Retiraste`;
        const created = new Date(createdAt);
        const formatedDate = created.toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        const formatedAmount = `${currency} ${amount.toFixed(2)}`;
        const formatedAmountCrypto = `${amount.toFixed(2)} ${criptoCurrency}`;
        const transacction =
          type === "buy"
            ? `+ ${formatedAmountCrypto}`
            : type === "inversion"
            ? `+ ${formatedAmountCrypto}`
            : `- ${formatedAmountCrypto}`;

        const to = fund.name;

        return (
          <Fragment key={id}>
            <ListItem>
              <ListItemText primary={text} secondary={formatedDate} />
              <ListItemText
                primary={transacction}
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
