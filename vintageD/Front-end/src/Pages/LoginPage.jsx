import React from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
  Center
} from '@chakra-ui/react';
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext, AuthContext } from "../Context/useContext";
import { Footer } from "../Components/Footer";
import { Navbar2 } from "../Components/Navbar2";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Cookies from 'js-cookie';

const initialData = {
  "email": "",
  "password": "",
};
function LoginPage(){
  const [email, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [loading,isLoading]=useState(false)
  const [udata,setUdata]=useState([])
  let {login,isAuth}=useContext(AppContext)
  const navigate = useNavigate();
  const toast = useToast()
   
  
  const handleName=(e)=>{
     setMail(e.target.value)
  }
  const handlePass=(e)=>{
     setPass(e.target.value)
  }
  const handleClick=()=>{
    isLoading(true)
    axios.post(`https://vintage-wheo.onrender.com/login`,{
      "email":email,
      "password":pass
    }).then((res)=>{
     isLoading(false)
       if(res.data=="Log in failed ! Check your password"){
        toast({
          title: 'Log in failed ! Check your password',
          description: "",
          position:"top",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        
      }
      else if(res.data=="Create your Account or wrong email"){
        toast({
          title: 'Create your Account or wrong email',
          description: "",
          position:"top",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        
        }
        else{
          toast({
            title: 'Signin Completed',
            description: "",
            position:"top",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          Cookies.set('email', `${email}`, { expires: 7 })
          Cookies.set('token', `${res.data}`, { expires: 7 });
          login()
          navigate("/")
        }
        
      
 

     })
      
     
  }

  if(loading===true){
    return <Center>
      <Image src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"/>
    </Center>
  }

  return (
    <>
      <Navbar2 />
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input value={email} onChange={handleName} type="email" />
          </FormControl>
          <FormControl value={pass} onChange={handlePass} id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
             
               <Link to="/signup"  color={'blue.500'}>Create Account?</Link>
            </Stack>
            <Button onClick={handleClick} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      {/* <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={
            'https://cdn.dribbble.com/users/142452/screenshots/1036668/dribbble-logoswish-flat-design.gif'
          }
        />
      </Flex> */}
    </Stack>
      <Footer />
    </>
  );
}

export default LoginPage;
