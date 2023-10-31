import React from "react";
import Button from "../Buttons/buttons";
import Banner from "../Banner/Banner";
import { FaHome, FaPhoneAlt, FaPastafarianism } from 'react-icons/fa';
import { FaEmpire } from 'react-icons/fa6';
import Style from "./Header.module.css";

const Header = ({title,...props}) => {

    const handleclick = (title) => {
      switch (title) {
        case "Accueil":
          props.setBannerData(<Banner title={title} color={'red'} bgColor={'black'}/>)
          break;
        case "Contact":
          props.setBannerData(<Banner title={title} color={'blue'} bgColor={'white'}/>)
          break;
        case "Autre":
          props.setBannerData(<Banner title={title} color={'green'} bgColor={'yellow'}/>)
          break;
        case "Empire":
          props.setBannerData(<Banner title={"Star Wars"} color={'yellow'} bgColor={'black'}/>)
          break;
        default:
          props.setBannerData(null)
          break;
      }
    }

    return (
        <header className={Style.AppHeader}>
            <div className={Style.headerTitle}>
                {title}
                <div>
                    <nav style={{display: "flex", flexDirection: "row"}}>
                        <Button icone={<FaHome />} title={"Accueil"} action={() => handleclick("Accueil")}/>
                        <Button icone={<FaPhoneAlt/>} title={"Contact"} action={() => handleclick("Contact")}/>
                        <Button icone={<FaPastafarianism/>} title={"Autre"} action={() => handleclick("Autre")}/>
                        <Button icone={<FaEmpire/>} title={"Empire"} action={() => handleclick("Empire")}/>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;