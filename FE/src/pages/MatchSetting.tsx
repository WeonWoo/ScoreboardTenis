import React, { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const MatchSetting = () => {
  const [gameType, setGameType] = useState<GAME_TYPE>("Doubles");

  return (
    <div>
      <h3>Setting</h3>
      <FormLabel id="demo-radio-buttons-group-label">Match Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        value={gameType}
        name="sex-radio-buttons-group"
        onChange={(value) => setGameType(value.target.value as GAME_TYPE)}
      >
        <FormControlLabel value="Doubles" control={<Radio />} label="Doubles" />
        <FormControlLabel value="Singles" control={<Radio />} label="Singles" />
      </RadioGroup>
    </div>
  );
};
