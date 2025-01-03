import React from "react";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import cars from "../images/Cars.png";
import BMW from "../images/BMW.png";
import offers from "../images/Offers.png";
import CallNowButton from "../components/CallNowButton";
import Slider from "react-slick";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Service from "../components/Service";
import TopNav from "../components/TopNav";
import AboutUs from "../components/AboutUs";

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

  const aboutUs = [
    {
      headLine: "Comprehensive Insurance",
      description: "Every ride includes hiring insurance for worry-free travel",
    },
    {
      headLine: "Reliable Fleet",
      description:
        "Our vehicles are well-maintained and undergo regular inspections for your safety",
    },
    {
      headLine: "Transparent Pricing",
      description:
        "Enjoy competitive rates with no hidden fees. What you see is what you pay.",
    },
    {
      headLine: "Affordable Rates",
      description: "We offer competitive rates for our services ",
    },
    {
      headLine: "Clean Vehicles",
      description: "Our vehicles are always clean and well-maintained",
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
      {/*  services */}
      <Box>
        <Container
          sx={{
            padding: 0, // Remove any padding
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
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
        </Container>
        <Box
          sx={{
            padding: "150px 0",
            width: "100%",
            backgroundColor: "#fafafa",
            clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
          }}
        >
          <Container>
            {services.map((service, index) => (
              <Box key={index}>
                <Service title={service.service} />
                <hr style={{ margin: "20px 0" }} />
              </Box>
            ))}
          </Container>
        </Box>
      </Box>
      {/* About us */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            width: "50%",
            flexGrow: 1,
            textAlign: "left",
            fontWeight: "600",
          }}
        >
          <Typography variant="h4">
            Our commitment to excellence makes us the preferred taxi service for
            travelers across the region. Here’s why customers trust us:
          </Typography>
          {aboutUs.map((about, index) => (
            <AboutUs
              key={index}
              headLine={about.headLine}
              description={about.description}
            />
          ))}
        
        </Box>
        <Box sx={{ width: "50%", flexGrow: 1 }}>
          <img src={BMW} alt="BMW" style={{ width: "100%" }} />
        </Box>
      </Container>
    </Box>
  );
}
