import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

type Variant = "light" | "primary";

interface LogoProps {
  variant?: Variant;
}

export const Logo = styled((props: LogoProps) => {
  const { variant, ...other } = props;

  const color = variant === "light" ? "#C1C4D6" : "#5048E5";

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 235.93 86.12"
      {...other}
    >
      <defs>
        <style />
      </defs>
      <title>{"logo"}</title>
      <path
        className="cls-1"
        d="M39 64.08c-10 0-17.33-7.92-17.33-18.81S29 26.3 39 26.3c7.43 0 13.53 4.7 15.95 11.94h19.67C72.17 23 61.36 11.83 46.74 8.9V1.79H41.3V8.2c-.79 0-1.58-.08-2.38-.08-1.36 0-2.7.07-4 .19V1.79h-5.46v7.42C12.89 13.13 1.38 27.29 1.38 45.27s11.51 32 28.08 35.94v6.7h5.44v-5.8c1.32.12 2.66.19 4 .19.8 0 1.59 0 2.38-.08v5.69h5.44v-6.39c14.89-3 25.78-14.5 28.08-30.39H54.93C53 59 46.79 64.08 39 64.08ZM114.19 9.91H84.13v70.6h19.49V61h10.57c15 0 26.15-10.79 26.15-25.59s-11.15-25.5-26.15-25.5ZM111.85 44h-8.23V26.89h8.23c5.12 0 8.5 3.55 8.5 8.57S117 44 111.85 44Z"
        transform="translate(-1.38 -1.79)"
        fill="#0f3"
      />
      <path
        className="cls-1"
        d="M225.35 8.12h-19.42L189.2 46.53 172.57 8.12h-19.42l-10.68 70.6h19.71l5.43-40.65 18.72 40.76h5.74l18.73-40.77 5.51 40.66h19.62l-10.58-70.6z"
        fill="#0f3"
      />
    </svg>
  );
})``;

Logo.defaultProps = {
  variant: "primary",
};

Logo.propTypes = {
  variant: PropTypes.oneOf<Variant>(["light", "primary"]),
};
