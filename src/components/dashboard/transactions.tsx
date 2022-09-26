import {
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import { FC, Fragment } from "react";
import { Transaction } from "src/types";

interface Props {
  transactions: Transaction[];
}

export const Transactions: FC<Props> = ({ transactions }) => {
  const theme = useTheme();
  return (
    <List component={Paper}>
      {transactions.map(
        ({ id, type, amount, currency, date, criptoCurrency }) => {
          const text =
            type === "carga"
              ? `Cargaste`
              : type === "inversion"
              ? `Invertiste`
              : `Retiraste`;
          const formatedDate = date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          const formatedAmount = `${currency} ${amount.toFixed(2)}`;
          const formatedAmountCrypto = `${amount.toFixed(2)} ${criptoCurrency}`;
          const transacction =
            type === "carga"
              ? `+ ${formatedAmountCrypto}`
              : type === "inversion"
              ? `+ ${formatedAmountCrypto}`
              : `- ${formatedAmountCrypto}`;

          const to =
            type === "carga"
              ? `A tu cuenta`
              : type === "inversion"
              ? `Foundation`
              : `De tu cuenta`;

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
        }
      )}
    </List>
  );
};
