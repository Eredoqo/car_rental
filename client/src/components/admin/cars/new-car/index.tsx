import { useState } from "react";
import axios from "axios";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { APIURL } from "@/utils/constants";

export default function NewCar() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [status, setStatus] = useState("");
  const [carTitle, setCarTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rated, setRated] = useState(0);
  const [body, setBody] = useState("");
  const [price, setPrice] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [transmission, setTransmission] = useState("");
  const [seats, setSeats] = useState(0);
  const [fuel, setFuel] = useState("");
  const [gps, setGps] = useState(false);
  const [childSeat, setChildSeat] = useState("");
  const [aircondition, setAircondition] = useState(false);
  const [music, setMusic] = useState(false);
  const [carKit, setCarKit] = useState(false);
  const [audio, setAudio] = useState(false);
  const [climateControl, setClimateControl] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const car = {
      make,
      model,
      year,
      status,
      carSpec: {
        carTitle,
        image,
        description,
        rated,
        body,
        price,
        mileage,
        transmission,
        seats,
        fuel,
        gps,
        childSeat,
        aircondition,
        music,
        carKit,
        audio,
        climateControl,
      },
    };

    try {
      await axios.post(`${APIURL}/addNewCar`, car, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Car added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add car");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <TextField
        label="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <TextField
        label="Year"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
      />
      <TextField
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <TextField
        label="Car Title"
        value={carTitle}
        onChange={(e) => setCarTitle(e.target.value)}
      />
      <TextField
        label="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Rated"
        value={rated}
        onChange={(e) => setRated(parseInt(e.target.value))}
      />
      <TextField
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <TextField
        label="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <TextField
        label="Mileage"
        value={mileage}
        onChange={(e) => setMileage(parseInt(e.target.value))}
      />
      <TextField
        label="Transmission"
        value={transmission}
        onChange={(e) => setTransmission(e.target.value)}
      />
      <TextField
        label="Seats"
        value={seats}
        onChange={(e) => setSeats(parseInt(e.target.value))}
      />
      <TextField
        label="Fuel"
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox checked={gps} onChange={(e) => setGps(e.target.checked)} />
        }
        label="GPS"
      />
      <TextField
        label="Child Seat"
        value={childSeat}
        onChange={(e) => setChildSeat(e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={aircondition}
            onChange={(e) => setAircondition(e.target.checked)}
          />
        }
        label="Air Condition"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={music}
            onChange={(e) => setMusic(e.target.checked)}
          />
        }
        label="Music"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={carKit}
            onChange={(e) => setCarKit(e.target.checked)}
          />
        }
        label="Car Kit"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={audio}
            onChange={(e) => setAudio(e.target.checked)}
          />
        }
        label="Audio"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={climateControl}
            onChange={(e) => setClimateControl(e.target.checked)}
          />
        }
        label="Climate Control"
      />
      <Button type="submit">Add Car</Button>
    </form>
  );
}
