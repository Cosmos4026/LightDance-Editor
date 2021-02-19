import React from "react";
import { useSelector, useDispatch } from "react-redux";
// mui
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
// redux selector and actions
import {
  selectGlobal,
  setSelected,
  toggleSelected,
} from "../../slices/globalSlice";
import { selectLoad } from "../../slices/loadSlice";

export default function SelectDancer() {
  // redux states
  const { selected } = useSelector(selectGlobal);
  const { dancerNames } = useSelector(selectLoad);
  const dispatch = useDispatch();

  // selected
  const handleToggleSelected = (name) => {
    dispatch(toggleSelected(name));
  };
  const handleSelectAll = () => {
    dispatch(setSelected(dancerNames));
  };
  const handleCancelSelect = () => {
    dispatch(setSelected([]));
  };

  return (
    <div>
      <FormGroup row>
        {dancerNames.map((name) => (
          <FormControlLabel
            key={name}
            control={
              <Checkbox
                color="primary"
                onChange={() => handleToggleSelected(name)}
                checked={selected.includes(name)}
              />
            }
            label={name}
          />
        ))}
        <Button variant="outlined" size="small" onClick={handleSelectAll}>
          Select All
        </Button>
        <Button variant="outlined" size="small" onClick={handleCancelSelect}>
          Cancel All
        </Button>
      </FormGroup>
    </div>
  );
}
