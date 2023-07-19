import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Flex, Image, Select, Stack, Text } from "@chakra-ui/react";
import { AppContext } from "../Context/useContext";

export const SinglecartBlock = ({ product, update, setupdate }) => {
  let [quantity, setquantity] = useState(0);
  let {cartItem,toggleAuth,isAuth,deleteFromCart}=useContext(AppContext)

  let handlesubQuant = () => {
    setquantity(quantity - 1);
  };
  let handleaddQuant = () => {
    setquantity(quantity + 1);
  };

  const removeBtn=(id)=>{
    // toast({
    //   title: 'Removed From Cart',
    //   description: "",
    //   position:"top",
    //   status: 'error',
    //   duration: 9000,
    //   isClosable: true,
    // })

    

    deleteFromCart(id)
    

  }
  return (
    <div className="Cart-Product-block">
      <div className="Cart-Product-top">
        <div className="Cart-Product-top-left">
          <Text fontSize={"xl"}>{product.Name}</Text>
          <div className="Cart-product-inline-price">
            <Text fontSize={"2xl"} fontWeight="bold">
              ₹{product.Price}
            </Text>
            <Text as={"s"}>₹{product.Discount}</Text>
          </div>
          <Text color={"green"}>
            You saved ₹ {product.Discount - product.Price}!
          </Text>
          <div className="Cart-product-inline-price">
            &nbsp;&nbsp;
            <Button disabled={quantity == 0} onClick={handlesubQuant}>
              -
            </Button>
            <Button>{quantity}</Button>
            <Button disabled={quantity == 10} onClick={handleaddQuant}>
              +
            </Button>
          </div>
        </div>
        <div className="Cart-Product-top-right">
          <Image src={product.Image} w="80%" />
        </div>
      </div>
      <div className="Cart-Product-bottom">
        <Flex gap={"5%"} ml="10%">
          <Button
            w={"30%"}
            colorScheme={"teal"}
            onClick={() => removeBtn(product.id)}
          >
            Remove
          </Button>
        </Flex>
      </div>
    </div>
  );
};
