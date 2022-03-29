import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const classes = {
  formControl: {
    paddingTop: "20px",
  },
  selectEmpty: {
    marginTop: "5px"
  },
}
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #f22f46 30%, #cf3545 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    width: 180,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
        state: "",
        suburb: "",
        street: "",
        postcode: ""
      }
  }

  submit() {
    alert("submitted")
  }
  handleChange (event) {
    this.setState({...this.state, [event.target.id]: event.target.value})
  }

  render() {
    return (
      <div style={{display: "flex",  flexDirection: "row"}}>
        <div style={{display: "flex", alignContent: "space-evenly", justifyContent: "flex-start", flexDirection: "column", maxWidth: "200px", minWidth: "200px", minHeight: "400px", marginLeft: "50px"}}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Sending to</InputLabel>
            <Select
              defaultValue={10}
              value={10}

            >
            <MenuItem value={10}>Australia</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{marginTop: "20px"}}>
            <InputLabel id="demo-simple-select-helper-label">Choose Product</InputLabel>
            <Select
              defaultValue={10}
              value={10}
            >
            <MenuItem value={10}>Size 1 Box</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{display: "flex", alignContent: "space-evenly", justifyContent: "space-between", flexDirection: "column", maxWidth: "150px", minWidth: "150px", minHeight: "400px", marginLeft: "50px"}}>
          <FormControl className={classes.formControl} variant="outlined">
            <Input
              id="outlined-adornment-weight"
              value="4.6"
              endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
              labelWidth={0}
            />
            <InputLabel id="demo-simple-select-label">Weight</InputLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <Input
              id="outlined-adornment-weight"
              value="15"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              labelWidth={0}
            />
            <InputLabel id="demo-simple-select-label">Height</InputLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <Input
              id="outlined-adornment-weight"
              value="12"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              labelWidth={0}
            />
            <InputLabel id="demo-simple-select-label">Length</InputLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <Input
              id="outlined-adornment-weight"
              value="14"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              labelWidth={0}
            />
            <InputLabel id="demo-simple-select-label">Depth</InputLabel>
          </FormControl>
        </div>
        <div style={{display: "flex", alignContent: "space-evenly", justifyContent: "space-between", flexDirection: "column", maxWidth: "400px", minWidth: "400px", minHeight: "400px", marginLeft: "50px"}}>
          <FormControl className={classes.formControl} variant="outlined">
            <Input
              id="street"
              value={this.state.street}
              labelWidth={0}
              onChange={this.handleChange}
            />
            <InputLabel id="demo-simple-select-label">Street Number/Name</InputLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <Input
              id="suburb"
              value={this.state.suburb}
              labelWidth={0}
              onChange={this.handleChange}
            />
            <InputLabel id="demo-simple-select-label">Suburb</InputLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <Input
              id="state"
              value={this.state.state}
              labelWidth={0}
              onChange={this.handleChange}
            />
            <InputLabel id="demo-simple-select-label">State</InputLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <Input
              id="code"
              value={this.state.code}
              labelWidth={0}
              onChange={this.handleChange}
            />
            <InputLabel id="demo-simple-select-label">Postcode</InputLabel>
          </FormControl>
        </div>
        <div style={{display: "flex", alignContent: "space-evenly", justifyContent: "flex-end", flexDirection: "column", maxWidth: "200px", minHeight: "400px", marginLeft: "50px"}}>
          <StyledButton variant="contained" color="secondary" onClick={() => {alert("Shipping cost: $18.50")}}>Calculate Cost</StyledButton>
        </div>
      </div>
    );
  }
}
export default OrderForm
