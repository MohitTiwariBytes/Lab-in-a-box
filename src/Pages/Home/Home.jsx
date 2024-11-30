import React, { useState } from "react";
import { ReactLenis, useLenis } from "lenis/react"; // for smooth scroll
import gsap from "gsap"; // pretty good animation library
import ScrollTrigger from "gsap/ScrollTrigger"; // for on scroll triggered animations
import "./Home.css";
import box from "../../assets/box.png";
import HackClubBanner from "../../Components/HackclubBanner";
import coolDino from "../../assets/cooll-dino-transparent.png";
import coolDino2 from "../../assets/cool-dino-2.png";
import Button from "../../Components/Button/Button"

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="main-home-page">
            <div className="homePage">
                <HackClubBanner />
                <div className="firstSection">
                    <h1>
                        L<k>A</k>B I<z>N</z> A BO<r>X</r>
                        <img src={box} alt="" />
                    </h1>
                    <p>nice text about what is it and how good is this idk</p>
                    <span>Completely FREE for high schoolers!</span>
                    <Button
                        text="RSVP Now!"
                        buttonColor="#EF454C"
                        buttonHoverColor="#FC813A"
                        textColor="white"
                        textHoverColor="black"
                        onClick={() => {
                            window.location.replace("https://forms.fillout.com/t/8cd4Er8SRxus");
                        }}
                    />

                    <div
                        className="dino"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img src={isHovered ? coolDino2 : coolDino} alt="Dino" />
                    </div>
                </div>
            </div>
        </div>
    );
}
