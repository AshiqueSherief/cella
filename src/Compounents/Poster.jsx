import React from "react";
import Box from "@mui/material/Box";
import "./Poster.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Poster = () => {
  return (
    <div>
      <div className="poster md:flex justify-evenly bg-indigo-100 py-6 md:py-12">
        <div className="md:flex md:w-1/3 md:flex-wrap mt-6 md:mt-12 items-start">
          <h1 className="text-4xl md:text-5xl mb-2 font-bold text-white text-left">
            Premium Quality
            <br />
            Mobile Batteries
            <br />
          </h1>
          <h3 className="text-large md:text-large mb-2 text-white text-left">
            We are India’s biggest lithium-ion mobile battery brand. We got a
            battery for all your needs.
          </h3>
        </div>
        <div className="md:flex md:w-1/3 md:flex-wrap mt-6 md:mt-12 items-start">
          <Box
            sx={{
              backgroundColor: "red",
              display: "inline-block",
              mx: "2px",
              transform: "scale(0.8)",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              border: "1p solid white",
            }}
          ></Box>
        </div>
      </div>
    </div>
  );
};

export default Poster;
