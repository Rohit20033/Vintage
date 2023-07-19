import { CalendarIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Icon,
  Image,
  SimpleGrid,
  Text,
  Stack,
  ButtonGroup
} from "@chakra-ui/react";
import "./Cart.css";
import React, { useContext, useEffect, useState } from "react";
import BackdropAdress from "../Components/Modaladdress";
import { SinglecartBlock } from "../Components/SinglecartBlock";
import { TbBus } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { AppContext } from "../Context/useContext";
import { useToast } from '@chakra-ui/react'

let styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
};

export const Cart = () => {
let {cartItem,toggleAuth,isAuth,deleteFromCart}=useContext(AppContext)
const toast = useToast()
  let [coupons, setcoupons] = useState(0);
//   let [update, setupdate] = useState(0);

//   let [mrp, setmrp] = useState(0);
//   let [discount, setdiscount] = useState(0);
  let [total, settotal] = useState(0);
  // useEffect(()=>{
  //   console.log(cartItem)
  // },[cartItem])
  const removeBtn=(id)=>{
    toast({
      title: 'Removed From Cart',
      description: "",
      position:"top",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })

    

    deleteFromCart(id)
    

  }
  let handlecoupons = () => {
    setcoupons(30);
  };
  useEffect(()=>{
    let sum=0
   for(var i=0;i<cartItem.length;i++){
        sum+= Number(cartItem[i].Price)
   }
   settotal(sum)
  },[total])
  return (
    <>
      <Navbar />
        
            {/* {
              cartItem.length==0?   <Stack spacing={3} marginTop="100px">
              <Alert 
              variant='solid'
              
              alignItems='center'
              width={"90%"}
             margin="auto"
              height='80px'
              status='info'>
                  <AlertIcon />
                   <Text> Your Cart Is Currently Empty!</Text>
              </Alert>
          </Stack>   :


              
                cartItem.map((e)=>(
                  <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
                  <Stack direction="row" alignItems="center">
                   <Image height={["120px","100px","100px"]} width={["80%","80%","15%"]} src={e.Image}/>
                    
                  </Stack>
            
                  <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent="space-between">
                   <Text fontWeight="semibold">{e.Name}</Text>
                   <Text fontWeight="bold" color={"green.700"}>₹{e.Price}</Text>
                    <Stack direction={{ base: 'column', md: 'row' }}>
                      <ButtonGroup >
                      <Button variant="outline" colorScheme="green">
                        -
                      </Button>
                      <Button variant="outline" colorScheme="green">
                       +
                      </Button>
                      </ButtonGroup>
                      <Button onClick={()=>removeBtn(e.id)} colorScheme="red">Remove</Button>
                    </Stack>
                  </Stack>
                </Stack>
                ))
              }
            */}

<div className="Cart-Product">
        <div className="Cart-Product-left">
          <div>
            <Alert status="info">
              <Icon as={TbBus} fontSize={"2xl"} />
              &nbsp; Yay! You get FREE delivery on this order !!
            </Alert>
          </div>
          {cartItem.length > 0 ? (
            cartItem.map((e) => (
              <SinglecartBlock
                product={e}
                // update={update}
                // setupdate={setupdate}
              />
            ))
          ) : (
            <>
              <Image src="./Images/emptycart.gif" alt="emptycart" />
            </>
          )}
        </div>
        <div className="Cart-Product-right">
          {/* <div className="Cart-Product-right-top">
            <Alert status="warning" justifyContent={"space-between"} mb="20px">
              Save extra ₹40 with TriBe
              <Icon fontSize={"2xl"} as={GiMoneyStack} />
            </Alert>
          </div> */}
          <div className="Cart-Product-right-bottom">
            {/* <Box p={"10px 20px"}>
              Whistles! Get extra <b>10%</b> Cashback on prepaid orders above{" "}
              <br /> Rs.699. <b>Coupon code - OOF10</b>.
            </Box> */}
            {/* {coupons > 0 ? (
              <Alert status="success">
                <AlertIcon />
                Flat -₹30 Coupon Applied !!
              </Alert>
            ) : (
              <div style={styles}>
                <CalendarIcon />
                <Text fontSize="sm"> Apply Coupons</Text>
                <Text color="red" textAlign="center" fontSize="md">
                  Get Upto 50% OFF
                </Text>
                <Button
                  disabled={cartItem.length == 0}
                  // onClick={handlecoupons}
                  size="sm"
                  colorScheme="red"
                >
                  {coupons > 0 ? "Applied" : "Apply"}
                </Button>
              </div>
            )} */}
          </div>
          <div>
            <Alert fontSize={"sm"} status="info" variant="left-accent">
              Price Summary
            </Alert>
            <div className="price-summary">
              <Text>Total MRP (Incl. of taxes)</Text>
              <Text>₹{total}</Text>
            </div>
            <div className="price-summary">
              <Text>Shipping Charges </Text>
              <Text color={"green"}>Free</Text>
            </div>
            {/* <div className="price-summary">
              <Text>Bag Discount </Text>
              <Text>- ₹{discount}</Text>
            </div> */}
            <div className="price-summary">
              <Text>Subtotal </Text>
              <Text>₹{total}</Text>
            </div>
            {/* <div className="price-summary-end">
              <Text
                color={"green"}
              >{`You are saving ₹ ${discount} on this order`}</Text>
            </div> */}
          </div>
          <div>
            <div className="price-summary">
              <div>
                <Text fontSize={"xl"} fontWeight="bold">
                  Total
                </Text>
                <Text fontSize={"xl"} fontWeight="bold">
                  ₹{total}
                </Text>
              </div>
              <div style={{ width: "50%" }}>
                {
                  cartItem.length==0?"":<BackdropAdress cartI={cartItem} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <Center>
        <Text>Similar Products</Text>
      </Center>
      <div className="cart-end-product">
        <Image
          src="https://images.bewakoof.com/t640/stoners-delight-all-over-printed-boxer-235809-1655751256-1.jpg"
          width={"200px"}
        />
        <Image
          src="https://images.bewakoof.com/t640/men-s-grey-and-black-color-block-track-pant-557937-1670248135-1.JPG"
          width={"200px"}
        />
        <Image
          src="https://images.bewakoof.com/t640/men-s-sage-green-slim-fit-shirt-560469-1670823107-1.jpg"
          width={"200px"}
        />
        <Image
          src="https://images.bewakoof.com/t640/men-s-olive-basic-trackpants-459501-1661434183-1.jpg"
          width={"200px"}
        />
      </div> */}

            
       <Footer />
     </>
  )};
