/* eslint-disable no-undef */
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";
const Component = styled(Box)({
  marginTop: 20,
  "& > p": {
    fontSize: 26,
    marginBottom: 10,
  },
  "& > div >div": {
    marginRight: 20,
    minWidth: 200,
  },
});

const defaultObj = {
  vendor: "",
  product: "",
  amount: 0,
  date: "",
  action: "pending",
};

const AddInvoice = ({setAddInvoice}) => {
  const [invoice, setInvoice] = useState(defaultObj);

  const onValueChange = (e) => {
    setInvoice({...invoice, [e.target.name]: e.target.value});
  };

  const addNewInvoice = async() =>{
await saveInvoice({...invoice, amount:Number(invoice['amount'])});

setAddInvoice(false);
  }

  return (
    <Component>
      <Typography>Add Invoice</Typography>
      <Box>
        <TextField
        required
          variant="standard"
          placeholder="Enter vendor name"
          onChange={() => onValueChange(e)}
          name="vendor"
        //   label="Required"
        />
        <TextField
        required
          variant="standard"
          placeholder="Enter product name"
          onChange={() => onValueChange(e)}
          name="product"
        />
        <TextField
        required
          variant="standard"
          placeholder="Enter amount (in Rs)"
          type="number"
          onChange={() => onValueChange(e)}
          name="amount"
        />
        <TextField
        required
          variant="standard"
          placeholder="Enter date"
          type="date"
          onChange={() => onValueChange(e)}
          name="date"
        />
        <Button 
        variant="contained"
        onClick={()=> addNewInvoice()}
        >Add Invoice</Button>
      </Box>
    </Component>
  );
};
export default AddInvoice;
