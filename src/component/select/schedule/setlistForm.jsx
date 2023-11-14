import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function setlist({setListPer}) {
    return (
    <FormControl variant="standard" className="w-full">
      <InputLabel id="demo-simple-select-error-label" color="error">
        Setlist
      </InputLabel>
      <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        label="setList"
        name="setList"
        onChange={(e) => setListPer(e.target.value)}
        color="error"
      >
        <MenuItem value='event'><p className="text-base font-poppins">event</p></MenuItem> 
        <MenuItem value='jkt48'><p className="text-base font-poppins">jkt48</p></MenuItem> 
        <MenuItem value='trainee'><p className="text-base font-poppins">trainee</p></MenuItem> 
        <MenuItem value='Cara Meminum Ramune'><p className="text-base font-poppins">Cara Meminum Ramune</p></MenuItem> 
        <MenuItem value='aturan anti cinta'><p className="text-base font-poppins">aturan anti cinta</p></MenuItem> 
        <MenuItem value='banzai jkt48'><p className="text-base font-poppins">banzai jkt48</p></MenuItem> 
        <MenuItem value='pajama drive'><p className="text-base font-poppins">pajama drive</p></MenuItem> 
        
      </Select>
    </FormControl>
  );
}

export default setlist;
