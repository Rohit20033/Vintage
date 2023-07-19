import {
  Box,
  Button,
  Center,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/useContext";

import {
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialPintarest,
} from "react-icons/sl";
import { Footer } from "../Components/Footer";
import { Navbar2 } from "../Components/Navbar2";
const initialData = {
  "email": "",
  "password": "",
  "number":""
};
function Signup(){
  const [show, setShow] = React.useState(false);
  const [userData, setUserData] = useState(initialData);
  const [uname,setUname]=useState("")
  const [dis, setDis] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  
  const navigate = useNavigate();
  const toast = useToast();

  const handleData = (e)  => {
    const { name, type, value } = e.target;
    const val = type === "number" ? Number(value) : value;

    setUserData({
      ...userData,
      [name]: val,
    });
  };
  const handleName=(e)=>{
     setUname(e.target.value)
     console.log(uname)
  }
  const loadderFun = () => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  };
  useEffect(() => {
    if (
      userData.name == "" ||
      userData.email === "" ||
      userData.password === ""||
      userData.number === ""
    ) {
      setDis(true);
    } else {
      setDis(false);
    }
  });
  const handleProceed = async () => {
    loadderFun();
    console.log(userData)
    


    axios.post('https://vintage-wheo.onrender.com/signup',userData)
    .then(function (response) {
      console.log(response.data)
      if(response.data=="Email already exits"){
        toast({
          title: 'Emails Already Exists',
          description: "",
          position:"top",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      else{
        toast({
          title: 'Account Created',
          description: "",
          position:"top",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate("/login")
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
   
  };
  const handleClick = () => setShow(!show);
  return (
    <>
      <Navbar2 />
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        height="auto"
        width={"60%"}
        justifyContent="space-evenly"
        margin="auto"
        spacing="40px"
      >
        <Box width={"100%"}>
          <Box p={2}>
            <Image src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png" />
          </Box>
        </Box>
        <Box width={"100%"}>
          <br />
          <Box display={"flex"}>
            <Text textAlign={"justify"} fontSize={"35px"} fontWeight={"bold"}>
              Sign up
            </Text>
          </Box>
          <Box marginTop={"15px"} display={"flex"}>
            <Text textAlign={"justify"} fontSize={"20px"} as={"b"}>
              Hi new buddy, let's get you started with the Elegance!
            </Text>
          </Box>
          <Stack marginTop={"40px"} spacing={3}>
            <Input
              name="name"
              value={uname}
              onChange={handleName}
              border="0"
              borderBottom={"1px solid black"}
              borderRadius={"0"}
              placeholder="Name"
              size="lg"
            />

            <Input
              name="email"
              value={userData.email}
              onChange={handleData}
              border="0"
              borderBottom={"1px solid black"}
              borderRadius={"0"}
              placeholder="Email Id"
              size="lg"
            />

<InputGroup size="lg">
              <Input
                name="number"
                value={userData.number}
                borderBottom={"1px solid black"}
                borderRadius={"0"}
                border="0"
                pr="4.5rem"
                onChange={handleData}
                placeholder="Mobile Number"
              />
            </InputGroup>

            <InputGroup size="lg">
              <Input
                name="password"
                value={userData.password}
                borderBottom={"1px solid black"}
                borderRadius={"0"}
                border="0"
                pr="4.5rem"
                onChange={handleData}
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup size="lg">
              <Input
                name="password"
                value={userData.password}
                borderBottom={"1px solid black"}
                borderRadius={"0"}
                border="0"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Confirm  password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>

          <br />
          <Center>
            {" "}
            <Button
              disabled={dis}
              mt={4}
              onClick={handleProceed}
              colorScheme="teal"
              width={"40%"}
              p={4}
              fontSize={"25px"}
              fontWeight={"0"}
            >
              {isLoading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="red.200"
                  color="blue.500"
                  size="xl"
                />
              ) : (
                "SIGN-UP"
              )}
            </Button>
          </Center>
          <Text fontSize={["9px", "10px", "11px", "13px"]}>
            <br />
            By creating an account or logging in, you agree with Bewakoof's{" "}
            <Link
              fontWeight="medium"
              color={"teal"}
              href="https://chakra-ui.com"
            >
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link
              color={"teal"}
              fontWeight="medium"
              href="https://chakra-ui.com"
            >
              Privacy Policy.
            </Link>
          </Text>
          <br />
          <Center>
            <Box>
              <Icon fontSize={"3xl"} as={SlSocialGoogle} />
              &nbsp;&nbsp;&nbsp;
              <Icon fontSize={"3xl"} as={SlSocialInstagram} />
              &nbsp;&nbsp;&nbsp;
              <Icon fontSize={"3xl"} as={SlSocialLinkedin} />
              &nbsp;&nbsp;&nbsp;
              <Icon fontSize={"3xl"} as={SlSocialPintarest} />
            </Box>
          </Center>
        </Box>
      </SimpleGrid>
      <Footer />
    </>
  );
}

export default Signup;
