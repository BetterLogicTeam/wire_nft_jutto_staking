import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Web3 from "web3";
import { API } from "../../store/actions/API";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { loginAction } from "../../store/actions/login";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"
export default function FormDialog({ setRegistered }) {
  const history=useHistory();
  const dispatch=useDispatch()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRegistered(false);
  };
  const [sId, setSId] = useState(null);
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const metamask = async () => {
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
      }
      if (isConnected === true) {
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        let chain = await web3.eth.getChainId();
        setChainId(chain);
        window.ethereum.on("accountsChanged", async function (accounts) {
          setAccount(accounts[0]);
          let chain = await web3.eth.getChainId();
          setChainId(chain);
        });
      }
    } catch (error) {
      console.log("error message", error?.message);
    }
  };

  const registered = async () => {
    try {
      const res = await API.post(`/registraction`, {
        sid: sId,
        uid: "",
        accountnumber: account,
        email: "",
        addresslist: "",
        paymentType: "",
        amount: "",
        traxn: account,
        status: "success",
        amount1: "",
        amount2: "",
      });
      console.log(res);
      handleLogin2(account);
      toast.success("Successfully registered !");
    } catch (e) {
      console.log("error", e);
      toast.error("Something went wrong !");
    }
  };
  const handleLogin2 = async (ids) => {
    let res = await dispatch(loginAction(ids));
    if (res) {
      setTimeout(() => {
        history.push("/dashboard");
      }, 1000);
      // window.location.reload()
    } else {
      toast.error("Something went wrong ! ");
    }
  };
  useEffect(() => {
    metamask();
  }, []);
  return (
    <div>
      <ToastContainer />

      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        className="modalContainer"
      >
        <DialogTitle
          id="form-dialog-title"
          className="d-flex justify-content-center align-items-center"
          style={{ fontSize: "20px" }}
        >
          Register an Account
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="number"
            placeholder="Please enter upline ID or referral link "
            fullWidth
            value={sId}
            onChange={(e) => setSId(e.target.value)}
          />
          <DialogContentText className="mt-1 textStyle">
            Enter the account id or referral link
          </DialogContentText>
        </DialogContent>
        <DialogActions className="d-flex justify-content-center align-items-center">
          <Button onClick={registered} className="loginbtn">
            Ok
          </Button>
          <Button onClick={handleClose} className="loginbtn">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
