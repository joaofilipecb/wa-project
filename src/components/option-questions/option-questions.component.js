import { useState } from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export const OptionQuestions = ({ data, event }) => {
  const [statusOption, setStatusOption] = useState(false);
  const handleOption = (e) => {
    event(e);
    setStatusOption(true);
  };
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        {data.values.map((value, key) => (
          <FormControlLabel
            key={key}
            value={value}
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: value === data.correct ? "green" : "red",
                  },
                }}
                disabled={statusOption}
              />
            }
            label={value}
            onChange={(e) => handleOption(e)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
