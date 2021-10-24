import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultValues = {
    building: "",
    room: 0,
    rating: 0,
  };

export default function Form() {
    const [formVals, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formVals,
        [name]: value,
      });
    };
    const handleSliderChange = (name) => (e, value) => {
      setFormValues({
        ...formVals,
        [name]: value,
      });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      setFormValues(defaultValues);
      console.log(formVals);
      return (
        <p>
          thanks!
        </p>
      );
    };
    return (
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item>
            <TextField
              id="name-input"
              name="building"
              label="Building"
              type="text"
              value={formVals.building}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="room-input"
              name="room"
              label="room"
              type="number"
              value={formVals.room}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            
          </Grid>
          <Grid item>
            
          </Grid>
          <Grid item>
            <div style={{ width: "400px" }}>
              Rating
              <Slider
                value={formVals.rating}
                onChange={handleSliderChange("rating")}
                defaultValue={1}
                step={1}
                min={1}
                max={5}
                marks={[
                  {
                    value: 1,
                    label: "1",
                  },
                  {
                    value: 2,
                    label: "2",
                  },
                  {
                    value: 3,
                    label: "3",
                  },
                  {
                    value: 4,
                    label: "4",
                  },
                  {
                    value: 5,
                    label: "5",
                  },
                ]}
                valueLabelDisplay="off"
              />
            </div>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    );
  }