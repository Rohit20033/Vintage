import { Badge, Box, Center, Circle, Flex, Icon, Image, SimpleGrid, Text, Tooltip, chakra } from "@chakra-ui/react";
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, NavLink } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { AppContext } from "../Context/useContext";
import { useToast } from '@chakra-ui/react'

function Products() {
 
const [data,setData]=useState([])
const toast = useToast()
const [loading,isLoading]=useState(false)

let {cartItem,logout,isAuth,addToCart}=useContext(AppContext)

useEffect(()=>{
isLoading(true)
  axios.get('https://naughty-moth-sweatshirt.cyclic.app/Products')
  .then(function (response) {
    isLoading(false)
     setData(response.data)
    console.log(response.data);
  })
  .catch(function (error) {
   
    console.log(error);
  })
  .finally(function () {
   
  });
},[])

if(loading===true){
  return <Center>
     <Image src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"/>
  </Center>
}

const myCart=(e)=>{
  toast({
    title: 'Added To Cart',
    description: "",
    position:"top",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
  addToCart(e)
}
 

  return (
    <>
       <Navbar/>
      <SimpleGrid width={"90%"} margin={"auto"} marginTop={"30px"} columns={[1,1,3]} spacing={10}>
      {
        data.map((e)=>{
          return <Box borderRadius={"5px"} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  p={4}>
           
           <Image height={"250px"} w={"100%"}  src={e.Image}/>

           <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {e.Name}
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} width={"95%"} margin={"auto"} marginTop={"10px"}>
              <Box fontWeight={"bold"}>
              ₹{e.Price}
              </Box>
              <Box color={"gray.700"} textDecorationLine={"line-through"} >
              ₹{e.Discount}
              </Box>
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <Box onClick={()=>myCart(e)}  href={'#'} display={'flex'}>
                <Icon  marginTop={"20px"} as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </Box>
            </Tooltip>

          </Box> 
        })
      }  
        
        </SimpleGrid> 

        <Footer/>
    </>
    
  )
}

export default Products