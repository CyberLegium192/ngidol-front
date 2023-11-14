import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



function tema({setValues, values}) {
    return (
    <FormControl variant="standard" className="w-full">
      <InputLabel id="demo-simple-select-error-label" color="error">
        Tema
      </InputLabel>
      <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        label="Tema"
        name="Tema"
        onChange={(e) => setValues({...values, tema: e.target.value})}
        color="error"
      >
        <MenuItem value="none"><p className="text-base font-poppins">None</p></MenuItem> 
        <MenuItem value="STS"><p className="text-base font-poppins">STS</p></MenuItem> 
        <MenuItem value="Last Show"><p className="text-base font-poppins">Last Show</p></MenuItem> 
      </Select>
    </FormControl>
  );
}

export default tema;
