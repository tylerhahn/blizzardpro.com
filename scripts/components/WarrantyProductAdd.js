import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import _ from "lodash";
import React, { useState } from "react";
import axios from "axios";

const WarrantyProductAdd = ({ userProducts, setUserProducts, products }) => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedSerial, setSelectedSerial] = useState();

  const addable =
    selectedProduct && selectedSerial && selectedSerial.length === 14;

  const renderWarrantyProducts = () => {
    if (userProducts.length > 0) {
      return _.map(userProducts, (item) => {
        return (
          <div className="item">
            <i className="fas fa-check-circle"></i>
            <div className="item-meta">
              <div className="item-name">{item.name}</div>
              <div className="item-serial">{item.serialNumber}</div>
            </div>
            <i
              style={{ cursor: "pointer" }}
              onClick={() => removeProduct(item.serialNumber)}
              className="fas fa-trash"
            ></i>
          </div>
        );
      });
    }
  };

  const removeProduct = (serialNumber) => {
    const prods = _.filter(userProducts, (x) => {
      return x.serialNumber !== serialNumber;
    });
    setUserProducts(prods);
  };

  const addProduct = () => {
    setSelectedProduct();
    setSelectedSerial("");
    setUserProducts([
      ...userProducts,
      {
        productId: selectedProduct.id,
        serialNumber: selectedSerial,
        name: selectedProduct.name,
      },
    ]);
  };
  return (
    <div className="">
      <div className="warranty-adder">
        <Autocomplete
          key={selectedProduct}
          id="tags-outlined"
          options={products ? products : []}
          onChange={(e, v) => {
            setSelectedProduct(v);
          }}
          value={selectedProduct}
          renderOption={(option) => {
            const { name } = option;
            return <span style={{ color: "black" }}>{name}</span>;
          }}
          getOptionLabel={(prod) => prod.name}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Product"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          label=""
          value={selectedSerial}
          onChange={(e) => setSelectedSerial(e.target.value)}
          placeholder="Serial Number"
          margin="normal"
          variant="outlined"
          type="number"
          error={selectedSerial && selectedSerial.length < 14}
          helperText={
            selectedSerial && selectedSerial.length < 14
              ? "The serial number must be 14 numbers long"
              : ""
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <i className="fal fa-hashtag"></i>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          id="dark-bg-button"
          disabled={!addable}
          style={{ width: 150, marginTop: 20 }}
          variant="contained"
          onClick={() => addProduct()}
          color="primary"
          className="btn"
        >
          Add +
        </Button>
      </div>

      <div className="warranty-products">{renderWarrantyProducts()}</div>
    </div>
  );
};

export default WarrantyProductAdd;
