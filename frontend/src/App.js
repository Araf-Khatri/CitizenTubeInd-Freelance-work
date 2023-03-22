import { Route, Routes, useHref } from "react-router-dom";
import { Fragment, lazy, useEffect, useState } from "react";

import Navbar from "./components/View/navbar";
import HomePage from "./components/View/home-page";
import AboutPage from "./components/View/about-page";
import ContactUsPage from "./components/View/contact-us-page";
import ProductsPage from "./components/View/products-page";
import Product from "./components/View/product";

import "./App.css";
import LoadingPage from "./components/View/loading-page";
import CertificatePage from "./components/View/certificate-page";

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const randomNo = Math.ceil(Math.random() * 2);
    setTimeout(() => {
      setAppLoaded(true);
    }, randomNo * 1000);
  });

  const productsArr = [
    {
      productName: "Pipe & Tubes",
      link: "pipe-and-tubes",
      // types: [
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Stainless Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img2.jpg",
      //     name: "Carbon Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Alloy Steel",
      //   },
      // ],
      mainImage: "/imgs/PipesATubes.png",
      detail:
        "These are essential components in various industrial and commercial applications such as oil and gas, power generation, construction, automotive, and aerospace. Our pipes and tubes are made from different types of steel such as carbon steel, alloy steel, and stainless steel, each with their own specific properties and advantages.",
      size: 'Upto 24" NB. (Seamless & Welded)',
      thickness: "Sch. 5S to Sch. XXS",
      prodType: "Round, Square, Rectangular.",
      typesAndDetails: [
        {
          name: "Stainless Steel",
          typeDetails:
            "ASTM A312 TP 304/ 304L/ 304H/ 316/ 316L/ 317/ 317L/ 321/310/ 347/ 904L etc.",
        },
        {
          name: "Carbon Steel",
          typeDetails:
            "ASTM A53 GR. B/ A106 GR. B/ API 5L GRADE B/ API 5L GR.X42/46/52/56/60/65/70/ Low Temperature, A333 Gr.3/Gr.6 etc.",
        },
        {
          name: "Alloy Steel",
          typeDetails: "ASTM A335 GR. P1/ P5/ P9/ P11/ P22/ P91 etc.",
        },
        {
          name: "Nickel Alloys",
          typeDetails:
            "Monel, Nickel, Inconel, Hastalloy, Titanium, Tantalum, Bismuth, Aluminium, High Speed Steel",
        },
        {
          name: "Non Ferrous Metal",
          typeDetails: "Copper, Brass, Bronze, Zinc, Lead etc",
        },
      ],
    },
    {
      productName: "Buttweld Fittings",
      link: "buttweld-fittings",
      mainImage: "/imgs/buttweld.png",
      detail:
        "These are used to connect pipes and other fittings in a plumbing or piping system. They provide a strong, leak-free connection and are commonly used in high-pressure applications.",
      size: '1/4" NB TO 32" NB. (Seamless & Welded)',
      thickness: "Sch. 5S To Sch. XXS.",
      // types: [
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Stainless Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img2.jpg",
      //     name: "Carbon Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Alloy Steel",
      //   },
      // ],
      typesAndDetails: [
        {
          name: "Stainless Steel",
          typeDetails:
            "ASTM A403 WP 304/ 304L/ 304H/316/ 316L/ 317/ 317L/ 321/ 310/ 347/904L etc.",
        },
        {
          name: "Carbon Steel",
          typeDetails:
            "ASTM A234 WPB/A420 WPL3/A420 WPL6/ MSS-SP-75 WPHY 42/46/52 / 56/60/65/70.",
        },
        {
          name: "Alloy_Steel",
          typeDetails: "ASTM A234 WP1/WP5/WP9/ WP11/WP22/WP91 etc.",
        },
      ],
    },
    {
      productName: "Sheet, Plates and Coils",
      link: "sheet-plates-and-coils",
      mainImage: "/imgs/sheetPC.png",
      detail:
        "These products are used in a wide range of applications, including construction, manufacturing, and industrial machinery. Our sheets, plates, and coils are made from high-quality steel and are available in a range of thicknesses and dimensions to meet the specific requirements of our customers.",
      // types: [
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Stainless Sheet, Plates and Coils",
      //   },
      //   {
      //     image: "/imgs/citizentube--img2.jpg",
      //     name: "Alloy Sheet, Plates and Coils",
      //   },
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Carbon Sheet, Plates and Coils",
      //   },
      // ],
      typesAndDetails: [
        {
          name: "Stainless Steel",
          typeDetails:
            "As per ASTM A 240 Gr. TP 304, 304L, 304LN, 309, 309S, 309H, 310S, 310H, 316, 316L, 316H, 316LN, 316TI, 317, 317L, 321, 321H, 347, 347H, 348, 348H, 409, 410, 420, 430 etc.",
        },
        {
          name: "Alloy Steel Plates",
          typeDetails:
            "As per ASTM A 387 Gr. 2, 5, 9, 11, 12 & 22 in class 1 & 2, ASTM A 204, Gr. A & B, DIN 17175 Gr. 15Mo3 & 16Mo3 with IBR Test Certificate.",
        },
        {
          name: "Carbon Steel / Boiler Quality",
          typeDetails:
            "As per IS 2062 Gr. A, B & C, IS 2002 Gr. 1& 2, ASTM A516 Gr. 60 & 70 ASTM A515 Gr. 70. High Nickel Alloy : Monel, Nickel, Inconel, Hastalloy, Copper, Brass, Bronze, Brass, Titanium, Tantalum, Bismuth, Aluminium, High Speed Steel, Zinc, Lead, etc. ",
        },
        {
          name: "High Nickel Alloy",
          typeDetails:
            "Monel, Nickel, Inconel, Hastalloy, Copper, Brass, Bronze, Brass, Titanium, Tantalum, Bismuth, Aluminium, High Speed Steel, Zinc, Lead, etc.",
        },
        {
          name: "Super Duplex Steel",
          typeDetails: "UNS S31803, UNS S32750, UNS 532760, 904L.",
        },
      ],
      extra: ["Alloy 20 Types: Sheet, Plates, Strips, etc."],
    },
    {
      productName: "Screwed Fittings",
      link: "forged-socket-weld-and-screwed-fittings",
      mainImage: "/imgs/screw.png",
      detail:
        "These fittings are used to connect pipes, valves, and other equipment in a plumbing or piping system. They provide a strong, leak-free connection and are commonly used in high-pressure and high-temperature applications.",
      size: '1/4" NB TO 4" NB. (Socketweld &Threaded)',
      prodClass: "3000#, 6000#, 9000#.",
      // types: [
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Stainless Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img2.jpg",
      //     name: "Carbon Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Alloy Steel",
      //   },
      // ],
      typesAndDetails: [
        {
          name: "Stainless Steel",
          typeDetails:
            "ASTM A182 F304/ 304L/ 304H/ 316/ 316L/ 317/ 317L/ 321/310/ 347/ 904L etc.",
        },
        {
          name: "Carbon Steel",
          typeDetails:
            "ASTM A105 /A694 F42/46/ 52/56/ 60/ 65/70 / A350 LF3/ A350 LF2.",
        },
        {
          name: "Alloy Steel",
          typeDetails: "ASTM A182 F1/ F5/ F9/ F11/ F22/F91 etc.",
        },
        {
          name: "Types",
          typeDetails:
            "Elbow, Tee, Union, Cross, Coupling, Cap, Bushing , Plug, Swage Nipple, Welding Boss, Hexagon Nipple, Barrel Nipple, Welding Nipple, Parraler Nipple, Street Elbow, Hexagon Nut, Hose Nipple, Bend, Adapter, Insert, Weldolet, Elbow let, Sockolet, Thredolet, Nipolet, Letrolet, etc.",
        },
        {
          name: "Others",
          typeDetails:
            "Monel, Nickel, Inconel, Hastalloy, Copper, Brass, Bronze, Titanium, Tantalum, Bismuth, Aluminum, High Speed Steel, Zinc, Lead, etc.",
        },
      ],
    },
    {
      productName: "Ferrule Fittings",
      link: "ferrule-fittings",
      mainImage: "/imgs/ferrule.png",
      detail:
        "These fittings are used to connect pipes and other fittings in a plumbing or piping system. They are known for their durability and resistance to corrosion and are commonly used in applications that require a high level of hygiene, such as in the food and beverage industry.",
      // types: [
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Stainless Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img2.jpg",
      //     name: "Carbon Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Alloy Steel",
      //   },
      // ],
      typesAndDetails: [
        {
          name: "Stainless Steel",
          typeDetails:
            "ASTM A182 F304/ 304L / 304H / 316 / 316L / 317 / 317L / 321 / 310 / 347 / 904L etc.",
        },
        {
          name: "Carbon Steel",
          typeDetails:
            "ASTM A105 / A694 F42/46/ 52/56/ 60/65/70 /A350 LF3/ A350 LF2.",
        },
        {
          name: "Alloy Steel",
          typeDetails: "ASTM A182 Fl/ F5/ F9/ F11/ F22/F91 etc.",
        },
        {
          name: "Super Duplex Steel",
          typeDetails: "UNS S31803, UNS S32750, UNS S32760, 904L, Alloy 20.",
        },
        {
          name: "Other",
          typeDetails:
            "Stainless Steel, Nickel Alloys, Carbon Steel, Alloy Steel, Monel, Nickel, Inconel, Hastalloy, Copper, Brass, Bronze, Titanium, Tantalum, Bimuth, Aluminium, High Speed Steel, Zinc, Lead, Etc.",
        },
        {
          name: "Types",
          typeDetails:
            "Nipples, Adaptors, Crosses, Union Ball Joints, Reducing Bushing, Reducers, Pipe Caps, Couplings, Pipe Plug, Hollow Hex Plug, Elbow, Reducing Union, 90 Deg. Union Elbow, Reducing 90 Deg. Union Elbow Etc. Extender Leg 90 Deg. Union Elbow, 45 Deg. Union Elbow, Union Tee, Female Connector, Male Connector, Manifold Tee, Locator Union, Extended Run Leg Union Tee, Reducing Tee, Tribow, ATW Weld Ring, Tube Socket weld To Pipe Butt Weld, Tube Butt Weld To Tube Socket Weld, Port Connector, Etc.",
        },
      ],
    },
    {
      productName: "Flanges",
      link: "flanges",
      mainImage: "/imgs/flanges.png",
      detail:
        "These are used to connect pipes, valves, and other equipment in a plumbing or piping system. They provide a strong, leak-free connection and are commonly used in high-pressure and high-temperature applications. Our flanges are made from high-quality steel and are available in a range of sizes and pressure ratings to meet the specific requirements of our customers.",
      size: '1/2" N B TO 24" NB.',
      prodClass: "150#, 300#, 400#, 600#, 900#, 1500# & 2500#.",
      // types: [
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Stainless Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img2.jpg",
      //     name: "Carbon Steel",
      //   },
      //   {
      //     image: "/imgs/citizentube--img1.jpg",
      //     name: "Alloy Steel",
      //   },
      // ],
      typesAndDetails: [
        {
          name: "Stainless Steel",
          typeDetails:
            "ASTM A182 F304/ 304L/ 304H/316/ 316L/ 317/ 317L/ 321/ 310/ 347/ 904L etc.",
        },
        {
          name: "Carbon Steel",
          typeDetails:
            "ASTM A105/ A694F42/46/52/56/60/65/70/A350 LF3/A350 LF2, etc. Alloy Steel : ASTM A182 Fl/ F5/ F9/ F11/ F22/ F91 etc. ",
        },
        {
          name: "Super Duplex Steel",
          typeDetails: "U NS S31803, UNS S32750, U NS S32760, 904L, Alloy 20.",
        },
        {
          name: "Nickel Alloys",
          typeDetails:
            "Monel, Nickel, Inconel, Hastalloy, Titanium, Tantalum, Bismuth, Aluminium, High Speed Steel",
        },
        {
          name: "Others",
          typeDetails: "U NS S31803, UNS S32750, U NS S32760, 904L, Alloy 20.",
        },
        // {
        //   name: "Types",
        //   typeDetails:
        //     "Weldneck, Slipon, Blind, Socket Weld, Lap Joint, Spectacles, Ring Joint, Oriface, Long Weldneck, Deck Flange, RTJ.",
        // },
      ],
      extra: [
        "Types: Weldneck, Slipon, Blind, Socket Weld, Lap Joint, Spectacles, Ring Joint, Oriface, Long Weldneck, Deck Flange, RTJ.",
      ],
    },
  ];
  const param = useHref();
  const productID = param.split("=")?.[1];

  return (
    <div className="App">
      {
        !appLoaded && <LoadingPage />
      }
      {appLoaded && (
        <Fragment>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/contact"} element={<ContactUsPage />} />
            <Route path={"/certificate"} element={<CertificatePage />} />
            <Route
              path={"/products"}
              element={<ProductsPage products={productsArr} />}
            />
            <Route
              path={"/products/:id"}
              element={<Product product={productsArr[productID]} />}
            />
            <Route path={"*"} element={<h1>Page Not Found!</h1>} />
            {/* <Route path={"/products"} element={<Home />} /> */}
          </Routes>
        </Fragment>
      )}
    </div>
  );
}

export default App;
