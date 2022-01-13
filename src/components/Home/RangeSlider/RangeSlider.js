import * as React from "react";
import { Box } from "@mui/system";
import { Slider } from "@mui/material";
import history from "../../../helpers/history";
import { productsContext } from "../../../context/ProductContext";

function valueText(value) {
  return `${value} $`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 1000]);

  const { getPaintings } = React.useContext(productsContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const search = new URLSearchParams(history.location.search);
    search.set("price_gte", newValue[0]);
    search.set("price_lte", newValue[1]);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getPaintings(search.toString());
  };

  return (
    <center>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          max="1000"
        />
      </Box>
    </center>
  );
}
