import {
  TextField,
  InputAdornment,
  Button,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import WarrantyUploader from "./WarrantyUploader";
import WarrantyProductAdd from "./WarrantyProductAdd";
import WarrantyHeader from "./WarrantyHeader";
import { validateEmail } from "../utils";
import SuccessAni from "./SuccessAni";
import moment from "moment";
import "../index.css";

import { useWindowWidth } from "../hooks/useWindowSize";
import axios from "axios";
import { storage } from "../base";
import _ from "lodash";

const WarrantyCenter = () => {
  const [step, setStep] = useState(1);
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState();
  const [dateOfPurchase, setDateOfPurchase] = useState(new Date());
  const [receipt, setReceipt] = useState();
  const [userProducts, setUserProducts] = useState([]);
  const [view, setView] = useState("registration");

  const theme = createTheme({
    palette: {
      primary: { main: "#282bf6" },
      secondary: { main: "#081016" },
      alert: { main: "#f44336" },
    },
    status: {
      danger: { 500: "#ff4d4d" },
    },
  });

  const handleDateChange = (date) => {
    setDateOfPurchase(moment(date).format("YYYY-MM-DD"));
  };

  React.useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("e");
    if (email) {
      setEmail(email);
    }
    axios
      .get("https://atfullapi.blizzard.lighting/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const submitRegistration = async () => {
    try {
      _.map(receipt, (r) => {
        const date = Date.now();
        const storageRef = storage.ref();
        let fileRef = storageRef.child(
          `/product_registration_receipts/${date}.${r.type.replace(
            "image/",
            ""
          )}`
        );
        let metadata = { contentType: r.type };

        fileRef
          .put(r, metadata)
          .then((storageData) => {
            console.log("yo");
            storageData.ref.getDownloadURL().then((url) => {
              console.log(url);
              let payload = {
                ownerEmail: email,
                purchaseDate: dateOfPurchase,
                receiptUrl: url,
                products: [...userProducts],
              };

              axios
                .post(
                  "https://atfullapi.blizzard.lighting/products/registration",
                  payload
                )
                .then(() => {
                  setStep(4);
                })
                .catch((err) => console.log(err));
            });
          })
          .catch((err) => console.log(err));
      });
    } catch (err) {
      console.log(err);
    }
  };

  const clearForm = () => {
    setStep(1);

    setEmail();
    setReceipt();
    setUserProducts([]);
  };

  const windowWidth = useWindowWidth();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <h3 className="reveal-text">Your Info</h3>
            </div>
            <TextField
              style={{ width: "100%", marginBottom: 20 }}
              label=""
              margin="normal"
              variant="outlined"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email Address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <i className="fas fa-envelope"></i>
                  </InputAdornment>
                ),
              }}
            />

            <MuiPickersUtilsProvider utils={MomentUtils}>
              <h4>Date of Purchase</h4>
              <DatePicker
                inputVariant="outlined"
                format="MM/DD/yyyy"
                autoOk
                value={dateOfPurchase}
                style={{ width: "100%", marginTop: 18 }}
                onChange={handleDateChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fas fa-calendar-alt"></i>{" "}
                    </InputAdornment>
                  ),
                }}
              />
            </MuiPickersUtilsProvider>
          </>
        );
      case 2:
        return (
          <>
            <WarrantyUploader
              maxFileSize={500000000}
              uploadType="media"
              metadata={true}
              setReceipt={setReceipt}
            />
          </>
        );
      case 3:
        return (
          <>
            <h3 className="reveal-text">Choose Products</h3>

            <WarrantyProductAdd
              products={products}
              userProducts={userProducts}
              setUserProducts={setUserProducts}
            />
          </>
        );
      case 4:
        return (
          <>
            <SuccessAni
              marginTop={20}
              title="Submitted Successfully"
            ></SuccessAni>
            <Button
              onClick={() => clearForm()}
              type="submit"
              style={{ margin: "0 auto", display: "table", width: 150 }}
              variant="contained"
              color="primary"
              className="btn"
            >
              Submit Another
            </Button>
          </>
        );
      default:
        return "Nothing";
    }
  };

  const getProgress = () => {
    switch (step) {
      case 1:
        return "10%";
      case 2:
        return "40%";
      case 3:
        return "70%";
      case 4:
        return "100%";

      default:
        return "100%";
    }
  };

  const isDisabled = () => {
    const step1Complete = validateEmail(email) && dateOfPurchase;
    const step2Complete = receipt;
    const step3Complete = userProducts.length > 0;

    if (step === 1 && step1Complete) {
      return false;
    } else if (step === 2 && step2Complete) {
      return false;
    } else if (step === 3 && step3Complete) {
      return false;
    } else return true;
  };
  console.log(step);

  return (
    <ThemeProvider theme={theme}>
      <div className="warranty-center">
        <WarrantyHeader view={view} setView={setView} />
        <div className="flex-container">
          <h2 className="centered-text">Product Registration</h2>

          <div className="progress-bar">
            <div className="progress-icons">
              <div className={`progress-icon ${step === 1 ? "active" : null}`}>
                <i class="fal fa-user-circle"></i>
                <p>Purchase Information</p>
              </div>
              <div className={`progress-icon ${step === 2 ? "active" : null}`}>
                <i class="fal fa-receipt"></i>
                <p>Receipt Upload</p>
              </div>
              <div className={`progress-icon ${step === 3 ? "active" : null}`}>
                <i class="fal fa-lightbulb"></i>

                <p>Product Selection</p>
              </div>
              <div className={`progress-icon ${step === 4 ? "active" : null}`}>
                <i class="fal fa-check-circle"></i>
              </div>
            </div>
            <div className="progress-tube">
              <div
                style={{ height: "100%", width: getProgress() }}
                className="tube-gel"
              ></div>
            </div>
          </div>

          <div className="form-container">
            <div className="info-form">{renderStep()}</div>
            <div className="button-group">
              {step > 1 && step !== 4 && (
                <Button
                  type="submit"
                  onClick={() => setStep(step - 1)}
                  style={{ width: 150, marginRight: 20 }}
                  variant="contained"
                  color="primary"
                  className="btn"
                  id="dark-bg-button"
                >
                  Previous
                </Button>
              )}

              {step === 3 ? (
                <Button
                  id="dark-bg-button"
                  type="submit"
                  onClick={() => submitRegistration()}
                  style={{ width: 150 }}
                  variant="contained"
                  color="primary"
                  disabled={isDisabled()}
                  className="btn"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  id="dark-bg-button"
                  type="submit"
                  onClick={() => setStep(step + 1)}
                  style={{ width: 150 }}
                  variant="contained"
                  color="primary"
                  disabled={isDisabled()}
                  className="btn"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default WarrantyCenter;
