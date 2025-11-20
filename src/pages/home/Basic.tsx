import Restaurant1 from "@/assets/pics/Frame_1.png";
import Restaurant2 from "@/assets/pics/Frame_2.png";
import Restaurant3 from "@/assets/pics/Frame_3.png";
import Restaurant4 from "@/assets/pics/Frame_4.png";
import Image from "@/assets/pics/Image.png";
import PopularItem1 from "@/assets/pics/Item1.png";
import PopularItem2 from "@/assets/pics/Item2.png";
import PopularItem3 from "@/assets/pics/Item3.png";
import PopularItem4 from "@/assets/pics/Item4.png";
import PopularItem5 from "@/assets/pics/Item5.png";
import LeftItem1 from "@/assets/pics/Item_left.png";
import RightItem1 from "@/assets/pics/Item_right.png";
import Logo from "@/assets/pics/Logo.png";
import HowDoesItWork1 from "@/assets/pics/Work1.png";
import HowDoesItWork2 from "@/assets/pics/Work2.png";
import HowDoesItWork3 from "@/assets/pics/Work3.png";
import HowDoesItWork4 from "@/assets/pics/Work4.png";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  BikeIcon,
  Clock,
  Facebook,
  HandCoins,
  Instagram,
  Mail,
  MapPinIcon,
  SearchIcon,
  StarIcon,
  Twitter,
  UserIcon,
} from "lucide-react";
import { JSX, useState } from "react";
import { Link } from "react-router";

import FeaturedRestaurant1 from "@/assets/pics/Feature1.png";
import FeaturedRestaurant2 from "@/assets/pics/Feature2.png";
import FeaturedRestaurant3 from "@/assets/pics/Feature3.png";
import FeaturedRestaurant4 from "@/assets/pics/Feature4.png";
import FeaturedRestaurant5 from "@/assets/pics/Feature5.png";
import FeaturedRestaurant6 from "@/assets/pics/Feature6.png";
import FeaturedRestaurant7 from "@/assets/pics/Feature7.png";
import FeaturedRestaurant8 from "@/assets/pics/Feature8.png";
import FRestaurant1 from "@/assets/pics/Feature_11.png";
import FRestaurant2 from "@/assets/pics/Feature_22.png";
import FRestaurant3 from "@/assets/pics/Feature_33.png";
import FRestaurant4 from "@/assets/pics/Feature_44.png";
import FRestaurant5 from "@/assets/pics/Feature_55.png";
import FRestaurant6 from "@/assets/pics/Feature_66.png";
import FRestaurant7 from "@/assets/pics/Feature_77.png";
import FRestaurant8 from "@/assets/pics/Feature_88.png";
import { Login } from "@/pages/Login";

// Typescript props for image objects if needed (not strictly necessary as below)
interface FeaturedRestaurant {
  img: string;
  avatar: string;
  name: string;
  rating: number;
  discount: string;
  isOpen: boolean;
}

export function Basic(): JSX.Element {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState<boolean>(false);

  // For demonstration, these could be moved to a data file for more advanced customization and localization
  const featuredRestaurants: FeaturedRestaurant[] = [
    {
      img: FeaturedRestaurant1,
      avatar: FRestaurant1,
      name: "Foodworld",
      rating: 40,
      discount: "35% off",
      isOpen: false,
    },
    {
      img: FeaturedRestaurant2,
      avatar: FRestaurant2,
      name: "Pizzahub",
      rating: 36,
      discount: "20% off",
      isOpen: false,
    },
    {
      img: FeaturedRestaurant3,
      avatar: FRestaurant3,
      name: "Donuts hut",
      rating: 20,
      discount: "20% off",
      isOpen: true,
    },
    {
      img: FeaturedRestaurant4,
      avatar: FRestaurant4,
      name: "Ruby Tuesday",
      rating: 40,
      discount: "30% off",
      isOpen: true,
    },
    {
      img: FeaturedRestaurant5,
      avatar: FRestaurant5,
      name: "Kuakata Fried Chicken",
      rating: 60,
      discount: "20% off",
      isOpen: true,
    },
    {
      img: FeaturedRestaurant6,
      avatar: FRestaurant6,
      name: "Kuakata Fried Chicken",
      rating: 70,
      discount: "10% off",
      isOpen: true,
    },
    {
      img: FeaturedRestaurant7,
      avatar: FRestaurant7,
      name: "Red Square",
      rating: 40,
      discount: "15% off",
      isOpen: false,
    },
    {
      img: FeaturedRestaurant8,
      avatar: FRestaurant8,
      name: "Taco Bell",
      rating: 40,
      discount: "25% off",
      isOpen: false,
    },
  ];

  const howWorkImages = [
    {
      img: HowDoesItWork1,
      title: "Select Location",
      desc: "Choose the location where your food will be delivered.",
    },
    {
      img: HowDoesItWork2,
      title: "Choose Order",
      desc: "Check over hundreds of menus to pick your favorite food",
    },
    {
      img: HowDoesItWork3,
      title: "Pay Advanced",
      desc: "It's quick, safe, and simple. Select several methods of payment",
    },
    {
      img: HowDoesItWork4,
      title: "Enjoy Meals",
      desc: "Food is made and delivered directly to your home.",
    },
  ];

  const popularItems = [
    { img: PopularItem1, name: "Cheese Burger", location: "Burger Arena" },
    { img: PopularItem2, name: "Cheese Burger", location: "Burger Arena" },
    { img: PopularItem3, name: "Cheese Burger", location: "Burger Arena" },
    { img: PopularItem4, name: "Cheese Burger", location: "Burger Arena" },
    { img: PopularItem5, name: "Cheese Burger", location: "Burger Arena" },
  ];

  const foodTypes = [
    { img: FeaturedRestaurant1, name: "Pasta" },
    { img: FeaturedRestaurant2, name: "Smoothie" },
    { img: FeaturedRestaurant3, name: "Pan Cake" },
    { img: FeaturedRestaurant4, name: "Cupcake" },
    { img: FeaturedRestaurant5, name: "Steak" },
    { img: FeaturedRestaurant6, name: "Meat" },
  ];

  return (
    <>
      <Login
        isLoginDialogOpen={isLoginDialogOpen}
        setIsLoginDialogOpen={setIsLoginDialogOpen}
      />
      <div className="container m-0 p-0 min-w-full">
        {/* Header */}
        <header className="bg-white px-2 py-3 sm:p-4 border-b sticky top-0 left-0 right-0 z-50 shadow-sm">
          <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-2">
              <Link
                to="/tranzo"
                aria-label="Go to homepage"
                className="shrink-0"
              >
                <img
                  src={Logo}
                  alt="Food Delivery Logo"
                  className="h-7 sm:h-10 w-auto"
                />
              </Link>
            </div>
            {/* Responsive: Hide location info on small screens, allow flex wrap */}
            <div className="hidden md:block shrink mx-auto md:mx-0 my-2 md:my-0">
              <p className="text-sm sm:text-base md:text-lg font-bold flex items-center gap-2 md:gap-3">
                Deliver to:{" "}
                <MapPinIcon
                  className="w-5 h-5 md:w-6 md:h-6 text-yellow-500"
                  strokeWidth={4}
                />
                <span className="text-[#424242] font-normal">
                  Current Location
                </span>
                <span className="hidden sm:inline">
                  Mohammadpur Bus Stand, Dhaka
                </span>
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3 md:gap-6 ml-auto">
              {/* Search button visible on sm and up, icon-only on xs */}
              <button className="flex text-sm md:text-base lg:text-lg font-bold text-[#424242] items-center gap-2">
                <SearchIcon
                  className="w-5 h-5 md:w-6 md:h-6 text-yellow-400"
                  strokeWidth={3.5}
                />
                <span className="hidden sm:block xs:inline">Search Food</span>
              </button>
              <Button
                variant="default"
                className="flex items-center gap-1 text-sm md:text-base lg:text-lg font-bold bg-white-900 text-[#FF8A00] border-white-900 rounded-md shadow-md shadow-[#FFAE004A] px-3 sm:px-5 h-[34px] sm:h-[40px] md:w-[120px] md:h-[46px]"
                onClick={() => setIsLoginDialogOpen(true)}
                aria-label="Login"
              >
                <UserIcon className="w-4 h-5" strokeWidth={4} />
                <span className="hidden sm:block xs:inline">Login</span>
              </Button>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative bg-cover bg-center bg-no-repeat min-h-[360px] md:min-h-[620px] flex flex-col md:flex-row bg-[url('/src/assets/pics/Group_1.jpg')]">
            {/* RIGHT DECOR IMAGE - Only on desktop, takes 40% width */}
            <div className="absolute bottom-0 right-0 lg:w-[60%] md:w-[80%] w-full">
              <img
                src={Image}
                alt="Decor"
                className="h-full w-full object-contain max-h-[520px] max-w-full"
              />
            </div>
            {/* LEFT HERO CONTENT - 100% on mobile, 60% width on desktop */}
            <div className="relative z-10 flex flex-col items-start justify-center gap-3 p-4 md:p-20 md:pl-28 w-full md:w-[60%] max-w-xl md:max-w-none">
              <h1 className="text-2xl sm:text-4xl md:text-[88px] leading-tight md:leading-[100px] font-bold text-white">
                Are you starving?
              </h1>
              <p className="text-[#504F4F] text-base md:text-lg">
                Within a few clicks, find meals that are accessible near you
              </p>
              <div className="bg-white w-full md:w-[500px] md:h-[194px] border border-white rounded-lg flex flex-col items-center md:items-start justify-start">
                {/* Tabs (delivery/pickup) */}
                <div className="border-b border-white-100 w-full min-h-[48px] md:h-[80px] flex items-center justify-start gap-2 p-2 md:p-4">
                  <Button
                    variant="default"
                    className="text-[#F17228] bg-[#F172281A] border-[#F172281A] font-bold hover:bg-orange-200 duration-300"
                  >
                    <BikeIcon className="w-4 h-5" strokeWidth={4} />
                    Deliver
                  </Button>
                  <Button
                    variant="default"
                    className="text-[#757575] font-bold bg-white border-white-900 hover:bg-gray-100 duration-300"
                  >
                    <SearchIcon className="w-4 h-5" strokeWidth={4} />
                    PickUp
                  </Button>
                </div>
                {/* Address Input */}
                <div className="bg-white w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2 p-2 md:p-4">
                  <div className="bg-gray-100 flex items-center gap-2 h-[44px] md:h-[48px] w-full md:w-[676px] border-b border-white-900 px-2 md:p-4 rounded-lg">
                    <MapPinIcon
                      className="w-4 h-6 text-[#FF7474]"
                      strokeWidth={5}
                    />
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="flex-1 bg-transparent outline-none text-sm md:text-base"
                    />
                  </div>
                  <Button
                    variant="default"
                    className="text-sm md:text-lg text-white font-bold bg-[#FF7A7A] border-[#FF7A7A] hover:bg-[#F65900] duration-300 py-2 md:py-4 px-4 md:px-6 rounded-md h-[44px] md:h-[60px] w-full sm:w-[120px] md:w-[180px]"
                  >
                    <SearchIcon className="w-4 h-5" strokeWidth={4} />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Restaurants Offers Section */}
          <section className="container w-full max-w-7xl mx-auto my-6 md:h-[445px] px-2 md:px-0">
            <div className="bg-white flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-0">
              {[Restaurant1, Restaurant2, Restaurant3, Restaurant4].map(
                (img, idx) => (
                  <div
                    className="w-full sm:w-1/2 md:w-1/4 h-full space-y-4 md:space-y-8 shadow-neutral-500 mx-0 sm:mx-2"
                    key={idx}
                  >
                    <div className="relative">
                      <img
                        src={img}
                        alt="Restaurant Offer"
                        className="object-cover w-full rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 bg-[#FFB30E] rounded-bl-lg rounded-tr-3xl w-[90px] md:w-[140px] h-[52px] md:h-[84px] flex items-center justify-center">
                        <p className="text-2xl md:text-7xl font-bold text-white">
                          {[15, 10, 25, 20][idx]}
                        </p>
                        <div className="flex flex-col items-center text-xs md:text-xl text-white font-bold ml-2">
                          <p className="text-base md:text-2xl">%</p>
                          <p>Off</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg md:text-2xl font-bold text-start">
                      Greys Vage
                    </p>
                    <div className="flex items-center justify-start gap-2">
                      <div className="bg-[#F1722833] border-[#F1722833] p-2 md:p-4 rounded-sm">
                        <p className="text-sm md:text-lg font-bold text-[#F17228] text-center">
                          {
                            [
                              "6 Days Remaining",
                              "9 Days Remaining",
                              "7 Days Remaining",
                              "5 Days Remaining",
                            ][idx]
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          {/* How does it work Section */}
          <section className="w-full max-w-full bg-linear-to-b from-[#FFCE67]/20 to-[#FDEDCA]/10 py-8 md:py-20">
            <p className="text-[#F17228] text-2xl md:text-5xl text-center font-bold pb-5 md:pb-10">
              How does it work
            </p>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-10 mx-auto max-w-[1340px] mb-8 md:mb-20 px-2 md:px-3">
              {howWorkImages.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center px-1 md:px-3"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-w-[100px] md:max-w-full"
                  />
                  <p className="text-[#434343] text-base md:text-xl font-bold mt-2">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-lg text-[#9E9E9E] text-center mt-2 md:mt-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Items Section */}
          <section className="w-full max-w-7xl mx-auto py-8 md:py-20 mb-10 md:mb-32 px-2">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl md:text-5xl text-center font-bold pb-5 md:pb-10">
                Popular items
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center gap-3 md:gap-4 rounded-lg py-4 px-1">
              <div className="flex flex-row items-center justify-center w-full gap-4">
                {/* <img
                  src={LeftItem1}
                  alt="Decor Item"
                  className="w-8 md:w-auto"
                /> */}
                {/* <div className="flex flex-col sm:flex-row items-start justify-center gap-3 md:gap-4 w-full"> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                  {popularItems.map((item, idx) => (
                    <div
                      //   className="w-full sm:w-1/2 md:w-1/5 max-w-xs h-full space-y-2 md:space-y-3 p-3 shrink-0 grow-0 text-left"
                      className="col-span-1"
                      key={idx}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-[500px] md:h-auto mb-2"
                      />
                      <p className="text-lg md:text-2xl font-bold text-left">
                        {item.name}
                      </p>
                      <p className="text-base md:text-xl text-[#FFB30E] flex items-center gap-2 justify-start">
                        <MapPinIcon className="w-4 h-5" strokeWidth={4} />
                        {item.location}
                      </p>
                      <p className="text-xl md:text-2xl font-bold text-left">
                        $3.88
                      </p>
                      <Button
                        variant="default"
                        className="bg-[#F17228] text-base md:text-lg text-white font-bold w-full md:w-[180px] h-[40px] md:h-[50px] hover:bg-[#F65900] duration-300 mt-1 text-left"
                      >
                        Order Now
                      </Button>
                    </div>
                  ))}
                </div>
                {/* <img
                  src={RightItem1}
                  alt="Decor Item"
                  className="w-8 md:w-auto"
                /> */}
              </div>
            </div>
          </section>

          {/* Featured Restaurants Grid Section */}
          <section className="container w-full max-w-7xl mx-auto px-2 md:px-0 my-10 md:my-20">
            <p className="text-2xl md:text-5xl text-center font-bold pb-7 md:pb-10">
              Featured Restaurants
            </p>
            <div
              className="
                bg-white 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                gap-5 md:gap-4 
                items-stretch justify-start px-2 md:px-0
                overflow-x-visible
                "
            >
              {featuredRestaurants.map((res, idx) => (
                <div
                  className="w-full h-full space-y-6 md:space-y-8 shadow-neutral-500 rounded-lg px-1 md:px-2"
                  key={res.name + idx}
                >
                  <div className="relative">
                    <img
                      src={res.img}
                      alt={res.name}
                      className="rounded-lg w-full h-44 md:h-auto object-cover"
                    />
                    <div className="absolute top-0 left-0 flex items-center m-2">
                      <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                        <p className="text-base md:text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                          <HandCoins className="w-4 h-5" strokeWidth={4} />
                          {res.discount}
                        </p>
                      </div>
                      <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                        <p className="text-base md:text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                          <Clock className="w-4 h-5" strokeWidth={4} />
                          Fast
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-2 md:px-0">
                    <img
                      src={res.avatar}
                      alt={`${res.name} avatar`}
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      <p className="text-lg md:text-xl font-bold">{res.name}</p>
                      <p className="text-base md:text-xl text-[#FFB30E] flex items-center gap-2">
                        <StarIcon className="w-4 h-5" strokeWidth={4} />
                        {res.rating}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4 md:mb-8 px-2 md:px-0">
                    <div
                      className={`
                      ${
                        res.isOpen
                          ? "bg-[#79B93C33] border-[#79B93C33]"
                          : "bg-[#F1722833] border-[#F1722833]"
                      }
                        w-full p-2 rounded-full
                    `}
                    >
                      <p
                        className={`text-base md:text-lg text-center font-bold ${
                          res.isOpen ? "text-[#79B93C]" : "text-[#F17228]"
                        }`}
                      >
                        {res.isOpen ? "Open now" : "Opens tomorrow"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-8">
              <Button
                variant="default"
                className="bg-linear-to-r from-[#FFBA26] to-[#FF9A0E] text-lg text-white font-bold hover:from-[#FF9A0E] hover:to-[#FFBA26] duration-300 shadow-md shadow-[#FF9A0E]/70 w-[140px] md:w-[200px] h-[44px] md:h-[60px]"
              >
                View All
                <ArrowRightIcon className="w-4 h-5 ml-2" strokeWidth={4} />
              </Button>
            </div>
          </section>

          {/* Search By Food Section */}
          <section className="container max-w-full bg-[#FEFAF1] text-black py-8 md:py-20 px-2 md:px-28">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-8">
              <p className="text-2xl md:text-5xl text-[#212121] font-bold">
                Search By Food
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <p className="text-base md:text-lg text-center text-[#FFB30E] font-bold cursor-pointer">
                    View All
                  </p>
                  <ArrowRightIcon
                    className="w-4 h-5 text-[#FFB30E]"
                    strokeWidth={4}
                  />
                </div>
                <div className="hidden md:flex items-center object-cover object-center gap-2">
                  <img
                    src={LeftItem1}
                    alt="Search By Food"
                    className="w-[48px] h-[48px] md:w-[76px] md:h-[76px]"
                  />
                  <img
                    src={RightItem1}
                    alt="Search By Food"
                    className="w-[48px] h-[48px] md:w-[76px] md:h-[76px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-start md:justify-between gap-4 md:gap-12">
              {foodTypes.map((food) => (
                <div
                  key={food.name}
                  className="flex flex-col items-center gap-2 min-w-[120px] w-[45%] sm:w-[30%] md:w-[200px]"
                >
                  <img
                    src={food.img}
                    alt={`Search By Food: ${food.name}`}
                    className="w-[72px] h-[72px] md:w-[160px] md:h-[160px] rounded-full object-cover"
                  />
                  <p className="text-base md:text-lg text-[#212121] font-bold pt-2">
                    {food.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer>
          <section className="w-full bg-[#212121] py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 text-white flex flex-col items-start justify-between">
            <p className="text-xl md:text-2xl font-bold mb-4 md:mb-6 lg:mb-8 w-full">
              Our top cities
            </p>
            <div className="mb-6 md:mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 w-full border-b-2 border-[#424242] pb-6 md:pb-8 lg:pb-12 px-0">
              {[...Array(5)].map((_, colIdx) => (
                <div
                  key={colIdx}
                  className="flex flex-col items-start justify-center gap-1 md:gap-2"
                >
                  {["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"].map(
                    (city, idx) => (
                      <p
                        key={city + idx}
                        className="text-sm md:text-base lg:text-lg text-start hover:text-[#FF8A00] cursor-pointer transition-colors"
                      >
                        {city}
                      </p>
                    )
                  )}
                </div>
              ))}
            </div>
            <div className="mb-6 md:mb-8 flex flex-col lg:flex-row w-full border-b-2 border-[#424242] pb-6 md:pb-8 px-0 gap-6 md:gap-8">
              {/* Left: Company, Contact, Legal (60%) */}
              <div className="flex-1 flex flex-col sm:flex-row gap-6 md:gap-10 lg:gap-12 w-full max-w-full">
                {/* Company Info */}
                <div className="flex flex-col items-start gap-2 md:gap-3 min-w-[120px] flex-1">
                  <p className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 lg:mb-6">
                    Company
                  </p>
                  {["About Us", "Team", "Careers", "Blog"].map((item) => (
                    <p
                      key={item}
                      className="text-sm md:text-base lg:text-lg text-start hover:text-[#FF8A00] cursor-pointer transition-colors"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                {/* Contact Info */}
                <div className="flex flex-col items-start gap-2 md:gap-3 min-w-[120px] flex-1">
                  <p className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 lg:mb-6">
                    Contact
                  </p>
                  {[
                    "Help Support",
                    "Partner with us",
                    "Ride with us",
                    "Terms of Service",
                  ].map((item) => (
                    <p
                      key={item}
                      className="text-sm md:text-base lg:text-lg text-start hover:text-[#FF8A00] cursor-pointer transition-colors"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                {/* Legal */}
                <div className="flex flex-col items-start gap-2 md:gap-3 min-w-[120px] flex-1">
                  <p className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 lg:mb-6">
                    Legal
                  </p>
                  {[
                    "Terms of Service",
                    "Refund Policy",
                    "Privacy Policy",
                    "Cookie Policy",
                  ].map((item) => (
                    <p
                      key={item}
                      className="text-sm md:text-base lg:text-lg text-start hover:text-[#FF8A00] cursor-pointer transition-colors"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              {/* Right: Social and Newsletter (40%) */}
              <div
                className="flex flex-col items-start gap-3 md:gap-4 lg:gap-6 w-full lg:w-auto lg:max-w-[420px] shrink-0"
                style={{ flexBasis: "40%" }}
              >
                <p className="text-xs md:text-sm lg:text-base font-semibold uppercase tracking-wider">
                  FOLLOW US
                </p>
                <div className="flex items-center gap-2 md:gap-4">
                  <Instagram
                    className="w-5 h-5 md:w-6 md:h-6 hover:text-[#FF8A00] cursor-pointer transition-colors"
                    strokeWidth={4}
                  />
                  <Facebook
                    className="w-5 h-5 md:w-6 md:h-6 hover:text-[#FF8A00] cursor-pointer transition-colors"
                    strokeWidth={4}
                  />
                  <Twitter
                    className="w-5 h-5 md:w-6 md:h-6 hover:text-[#FF8A00] cursor-pointer transition-colors"
                    strokeWidth={4}
                  />
                </div>
                <p className="text-xs md:text-sm lg:text-base text-[#BBBBBB] text-start">
                  Receive exclusive offers in your mailbox
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
                  <div className="flex items-center gap-2 bg-[#424242] rounded-md p-2 md:p-3 text-[#ADADAD] flex-1 min-w-0">
                    <Mail
                      className="w-4 h-4 md:w-5 md:h-5 shrink-0"
                      strokeWidth={4}
                    />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-transparent border-none outline-none text-xs md:text-sm lg:text-base flex-1 min-w-0 placeholder:text-[#ADADAD]"
                    />
                  </div>
                  <Button
                    variant="default"
                    className="bg-linear-to-r from-[#FB8000] to-[#FF8A00] text-white shadow-md shadow-[#FF8A00]/70 px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm lg:text-base whitespace-nowrap hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between w-full gap-3 md:gap-4">
              <p className="text-xs md:text-sm lg:text-base text-[#BBBBBB] text-center sm:text-start">
                All rights reserved
                <span className="text-white"> © Food Delivery, 2025</span>.
              </p>
              <p className="text-xs md:text-sm lg:text-base text-[#BBBBBB] text-center sm:text-end">
                Made with <span className="text-yellow-500">❤</span> by{" "}
                <span className="text-white">Themewagon</span>
              </p>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default Basic;
