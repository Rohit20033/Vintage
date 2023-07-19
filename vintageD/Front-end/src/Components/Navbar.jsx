import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Icon } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import vintage from "../avatars/vintage.png"
import "./Navbar.css";

import { BsFillBagFill , BsPerson } from "react-icons/bs";
import {BiLogOutCircle} from "react-icons/bi"
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/useContext";
import Cookies from "js-cookie";

export const Navbar = () => {
  const navigate = useNavigate();
  let {cartItem,logout,isAuth,deleteFromCart}=useContext(AppContext)

  let n =Cookies.get("token");

  const handleHome = () => {
    navigate("/");
  };
  let [product, setproduct] = useState(0);

   const handleLogout=()=>{
    logout()
   }

  return (
    <>
      <div className={styles.outerMain}>
        <div className={styles.aboveNavbar}>
          
          <div className={styles.aboveLBlock}>
            <div>
              <Link to={"/ContactUs"}>
                <p>Contact Us</p>
              </Link>
            </div>
            <div>
              <p>Track Order</p>
            </div>
          </div>
        </div>
      </div>

      <Box className={styles.navOuterDiv}>
        <div className={styles.nav}>
          <div className={styles.logoDiv}>
            <Link to={"/"}>
              <img
                className={styles.Logo}
                src={vintage}
                alt="elegant logo"
              />
            </Link>
          </div>

          <div className={styles.rightpanel}>
            {
              n ? <Link onClick={handleLogout}>
              <Icon
                
                fontSize={"5xl"}
                as={BiLogOutCircle}
              />
            </Link>  : <Link to="/login" >
              <Icon
                
                fontSize={"5xl"}
                as={BsPerson}
              />
            </Link> 
            }
            
            <div>
              <Link to="/cart">
                <Icon fontSize={"5xl"} as={BsFillBagFill} />
                <span className="badge badge-warning" id="lblCartCount">
                 {cartItem.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
      </Box>
      <Box
        className={styles.banner}
        w={{ lg: "100%", md: "70%", sm: "500px" }}
        fontSize={{ lg: "22px", md: "16px", sm: "12px" }}
      >
        {/* <Link  to="/mens">MEN</Link> */}
        <Link fontWeight="bold" to="/prod">Shop Now</Link>
      </Box>
    </>
  );
};
