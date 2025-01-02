import React from "react";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import cars from "../images/Cars.png";
import offers from "../images/Offers.png";
import CallNowButton from "../components/CallNowButton";
import Slider from "react-slick";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Service from "../components/Service";
import TopNav from "../components/TopNav";

export default function Home() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false, // No dots for navigation
    infinite: true,
    speed: 500, // Transition speed in ms
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides in ms
  };

  const imagesForSlider = [
    { id: 1, src: offers, alt: "Image 1", caption: "First Slide" },
    { id: 2, src: offers, alt: "Image 2", caption: "Second Slide" },
    { id: 3, src: offers, alt: "Image 3", caption: "Third Slide" },
  ];

  const services = [
    {
      service: "Airport Transports",
      description:
        "We provide airport transports to and from the airport. We are always on time and reliable.",
    },
    {
      service: "Point to Point Transfers",
      description:
        "We provide point to point transfers. We are always on time and reliable.",
    },
    {
      service: "Moving by Lorry",
      description:
        "We provide moving by lorry services. We are always on time and reliable.",
    },
    {
      service: "Corporate Transfers",
      description:
        "We provide corporate transfers. We are always on time and reliable.",
    },
  ];

  return (
    <Box>
      <Container
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Header Section */}
        <TopNav />
        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%", // Full width for content
            textAlign: "center",
            padding: "0 16px",
            gap: 4,
          }}
        >
          {/* Heading, Subtext, Contact and Call Button */}
          <Typography
            variant="h1"
            sx={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}
          >
            Reliable{" "}
            <span
              style={{
                backgroundColor: "teal",
                borderRadius: "15px",
                padding: "0 15px",
                color: "#eee",
              }}
            >
              {" "}
              Taxi Service
            </span>
          </Typography>

          <Box sx={{ fontSize: "0.6rem" }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box sx={{ fontSize: "0.6rem" }}>
            <Typography>Do you need a ride? Call Us.</Typography>
            <Link sx={{ fontSize: "1.2rem", color: "teal", fontWeight: "500" }}>
              0753732932
            </Link>
          </Box>

          {/* Call Now Button */}
          <Box>
            <CallNowButton />
          </Box>
        </Box>
        {/* Cars Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "70px 0",
          }}
        >
          <img
            src={cars}
            alt="Cars"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Container>

      {/* Slider Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          mx: "auto",
          marginBottom: "50px",
        }}
      >
        {/* Slider (Outside the Container for full width) */}
        <Slider {...settings} ref={sliderRef}>
          {imagesForSlider.map((image) => (
            <Box key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%", // Ensure the slider images stretch across the container
                  height: "auto", // Maintain aspect ratio
                }}
              />
            </Box>
          ))}
        </Slider>

        {/* Arrow buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            color="warning"
            onClick={() => sliderRef.current.slickPrev()}
            sx={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              minWidth: 0,
            }}
          >
            <ArrowBack />
          </Button>

          <Button
            variant="contained"
            color="warning"
            onClick={() => sliderRef.current.slickNext()}
            sx={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              minWidth: 0,
            }}
          >
            <ArrowForward />
          </Button>
        </Box>
      </Box>

      <Container
        sx={{
          padding: 0, // Remove any padding
        }}
      >
        {/*  services */}
        <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
          <Typography variant="h3">Explore our wide range of</Typography>
          <Typography
            variant="h3"
            sx={{
              display: "inline-block",
              backgroundColor: "teal",
              color: "#eee",
              borderRadius: "15px",
              padding: "0 20px",
            }}
          >
            Services
          </Typography>
        </Box>
        {services.map((service, index) => (
          <Box key={index}>
            <Service title={service.service} />
            <hr style={{ margin: "20px 0" }} />
          </Box>
        ))}
      </Container>
    </Box>
  );
}
