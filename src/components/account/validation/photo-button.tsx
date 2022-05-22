import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import React, { FC, useState, useRef } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { InputLabel } from "@mui/material";

interface ButtonProps {
  setValue: (field: string, value: string) => void;
  value: string;
  name: string;
  label: string;
}
const options = ["Galería de fotos", "Cámara", "Elegir archivo"];

export const PhotoButton: FC<ButtonProps> = ({
  setValue,
  value,
  name,
  label,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (index: number) => {
    setOpen(false);
    const imgUrl: string = "";

    // falta implementar que hará
    switch (index) {
      case 0:
        alert("Abre galeria de imagenes");
        break;
      case 1:
        alert("Abre camara");
        break;
      case 2:
        alert("Abre archivos");
        break;
      default:
        break;
    }
    setValue(name, imgUrl);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <InputLabel id={`photo-button-${name}`} sx={{ mb: 0.5 }}>
        {label}
      </InputLabel>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label={`photo-button-${name}`}
        fullWidth
      >
        <Button
          aria-controls={open ? "file-options" : undefined}
          aria-expanded={open ? "true" : undefined}
          onClick={handleToggle}
          startIcon={<ImageIcon />}
        >
          Agregar Foto
        </Button>
      </ButtonGroup>
      <Popper
        style={{ zIndex: 100, left: 0 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        placement="bottom-start"
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "center top",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="file-options" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      onClick={(event) => handleMenuItemClick(index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
