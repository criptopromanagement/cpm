import React from 'react';
import data from './data.json';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@mui/material';
import { useSelector } from "react-redux";
import { RootState } from "src/store";
export const AccordionComponent = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);


  const containerStyle = {
    marginTop: "1.5rem",
    borderRadius: 16,
    border: isMobile ? "1px solid white" : "none",
  };

  const accordionStyle = {
    backgroundColor: "transparent",
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      {data.map((item) => (
        <Accordion key={item.id} style={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#0f3" }} />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            style={{ border: "0px solid white"}}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}
            {item.link && (
            <Link href={item.link.url}>
              {item.link.text}
            </Link>
          )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

    </div>
  );
}
