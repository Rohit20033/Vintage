import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Paymentpage } from "../Pages/Paymentpage";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import Cookies from "js-cookie";



export default function BackdropAdress(cartI) {
  console.log(cartI)
  let n =Cookies.get("email");
  const initialData = {
    "fullName":"",
    "mobileNo":"",
    "pincode":"",
    "address":"",
    "town":"",
    "state":"",
    "pincode":"",
    "userE":n,
    "status":false,
    "products":cartI
  };
  const [userData, setUserData] = useState(initialData);
  const [dis, setDis] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    if (
      userData.fullName == "" ||
      userData.mobileNo === "" ||
      userData.pincode === ""||
      userData.address === ""||
      userData.town === ""||
      userData.state === ""
    ) {
      setDis(true);
    } else {
      setDis(false);
    }
  });
  let handleexit = () => {
    
    toast.success("Order Placed successfuly!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
    notify();
    axios.post(`https://json-server-aeb7.onrender.com/orders`,userData).then((res)=>{
    console.log(res)
  })
    setTimeout(function () {
      onClose();
    }, 1000);
    // setTimeout(function () {
    //   // navigate("/");
    //   console.log(userData)
    // }, 2000);
  };

  const handleData = (e)  => {
    const { name, type, value } = e.target;
    const val = type === "number" ? Number(value) : value;

    setUserData({
      ...userData,
      [name]: val,
    });
    
  };

  return (
    <>
      <Button w={"100%"} colorScheme={"teal"} onClick={onOpen}>
        Continue
      </Button>
      {/* <Button disabled={product.length == 0}></Button> */}
      <Modal
        Centered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Continue to pay</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
            <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Select Address</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Center>
      <div
        style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "whitesmoke",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            textAlign: "left",
            padding: "20px",
          }}
        >
          <Text fontSize="xl" fontWeight="bold">
            Add a new address
          </Text>
          <br />
          <div>
            {/* <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Country/Region
            </label> */}
            {/* <Select
              size="sm"
              placeholder="Select option"
              //   onChange={(e) => setkey(e.target.value)}
            >
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="japan">japan</option>
              <option value="Dubai">Dubai</option>
            </Select> */}
          </div>
          <div>
            <label  style={{ fontSize: "14px", fontWeight: "bold" }}>
              Full name
            </label>
            <Input name="fullName" value={userData.fullName} onChange={handleData} size="sm" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label  style={{ fontSize: "14px", fontWeight: "bold" }}>
                Mobile number
              </label>
              <Input name="mobileNo" value={userData.mobileNo} onChange={handleData} size="sm" />
            </div>
            <div>
              <label  style={{ fontSize: "14px", fontWeight: "bold" }}>
                Pincode
              </label>
              <Input name="pincode" value={userData.pincode} onChange={handleData} size="sm" />
            </div>
          </div>
          <div>
            <label  style={{ fontSize: "14px", fontWeight: "bold" }}>
              Full Address
            </label>
            <Input name="address" value={userData.address} onChange={handleData} size="sm" />
          </div>
          <div>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Landmark
            </label>
            <Input size="sm" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div style={{ width: "50%" }}>
              <label  style={{ fontSize: "14px", fontWeight: "bold" }}>
                Town/City
              </label>
              <Input name="town" value={userData.town} onChange={handleData} size="sm" />
            </div>
            <div style={{ width: "50%" }}>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>
                State
              </label>
              <Select
              name="state"
               value={userData.state} 
               onChange={handleData}
                size="sm"
                w="100%"
                placeholder="Select option"
                //   onChange={(e) => setkey(e.target.value)}
              >
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Rajasthan</option>
                <option value="Chennai">Punjab</option>
                <option value="Karnataka">UP</option>
                <option value="Bengaluru">Bengaluru</option>
              </Select>
            </div>
          </div>
          <div>
            {/* <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Landmark
            </label>
            <Select
              size="sm"
              w="100%"
              placeholder="Select an Address Type "
              //   onChange={(e) => setkey(e.target.value)}
            >
              <option value="Home">Home (7 am —9 pm delivery)</option>
              <option value="Office">
                Office/Commercial (10 AM - 6 PM delivery)
              </option> */}
            {/* </Select> */}
          </div>
        </div>
      </div>
    </Center>
          </TabPanel>
        </TabPanels>
         </Tabs>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button disabled={dis} colorScheme="blue" mr={3} onClick={handleexit}>
              Place Order
            </Button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  );
}
