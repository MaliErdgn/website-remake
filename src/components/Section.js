import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#333",
  padding: theme.spacing(3),
  textAlign: "center",
  color: "#fff",
  "&:hover": { backgroundColor: "#e91e63" },
  transition: ".5s",
}));

function Section({ title, description, route, mdValue }) {
  return (
    <>
      <Grid item xs={12} sm={6} md={mdValue} className="items">
        <Link to={route} style={{ textDecoration: "none" }}>
          <Item>
            <h3 className="colorWhite">{title}</h3>
            <div className="colorWhite">{description}</div>
          </Item>
        </Link>
      </Grid>
    </>
  );
}

export default Section;
