import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState, FC } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface Props {
  touched: boolean | undefined;
  error: string | undefined;
  handleBlur:
    | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  value: string | undefined;
  label: string | undefined;
  name: string | undefined;
  placeholder: string;
}
export const PasswordField: FC<Props> = ({
  touched,
  error,
  handleBlur,
  handleChange,
  value,
  label,
  name,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel
        htmlFor="outlined-adornment-password"
        error={Boolean(touched && error)}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        style={{ width: "100%" }}
        error={Boolean(touched && error)}
        fullWidth
        name={name}
        label={label}
        onBlur={handleBlur}
        onChange={handleChange}
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {!showPassword ? (
                <VisibilityOff color="primary" />
              ) : (
                <Visibility color="primary" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      {!!Boolean(touched && error) && (
        <FormHelperText error id="accountId-error">
          {touched && error}
        </FormHelperText>
      )}
    </FormControl>
  );
};
