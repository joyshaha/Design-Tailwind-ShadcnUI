import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  MapPinIcon,
  SearchIcon,
  UserIcon,
  BikeIcon,
  StarIcon,
  HandCoins,
  Clock,
  ArrowRightIcon,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import Logo from "@/assets/pics/Logo.png";
import Image from "@/assets/pics/Image.png";

import Restaurant1 from "@/assets/pics/Frame_1.png";
import Restaurant2 from "@/assets/pics/Frame_2.png";
import Restaurant3 from "@/assets/pics/Frame_3.png";
import Restaurant4 from "@/assets/pics/Frame_4.png";

import HowDoesItWork1 from "@/assets/pics/Work1.png";
import HowDoesItWork2 from "@/assets/pics/Work2.png";
import HowDoesItWork3 from "@/assets/pics/Work3.png";
import HowDoesItWork4 from "@/assets/pics/Work4.png";

import LeftItem1 from "@/assets/pics/Item_left.png";
import RightItem1 from "@/assets/pics/Item_right.png";

import PopularItem1 from "@/assets/pics/Item1.png";
import PopularItem2 from "@/assets/pics/Item2.png";
import PopularItem3 from "@/assets/pics/Item3.png";
import PopularItem4 from "@/assets/pics/Item4.png";
import PopularItem5 from "@/assets/pics/Item5.png";

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

function Index() {
  return (
    <div className="container max-w-full m-0 p-0">
      <header className="bg-white p-4 border-b sticky top-0 left-0 right-0 z-50 shadow-sm">
        <nav className="flex justify-between items-center container mx-auto">
          <Link to="/tranzo">
            <img src={Logo} alt="Food Delivery Logo" />
          </Link>
          <div>
            <p className="text-lg font-bold flex items-center gap-3">
              Deliver to:{" "}
              <MapPinIcon className="w-4 h-6 text-yellow-500" strokeWidth={4} />
              <span className="text-[#424242] font-normal">
                {" "}
                Current Location
              </span>
              Mohammadpur Bus Stand, Dhaka
            </p>
          </div>
          <div className="flex gap-8">
            <button className="text-lg font-bold text-[#424242] flex items-center gap-2">
              <SearchIcon
                className="w-4 h-5 text-yellow-400"
                strokeWidth={3.5}
              />
              Search Food
            </button>
            <Button
              variant="default"
              className="text-lg font-bold bg-white-900 text-[#FF8A00] border-white-900 rounded-md shadow-md shadow-[#FFAE004A] w-[120px] h-[46px]"
            >
              <UserIcon className="w-4 h-5" strokeWidth={4} />
              Login
            </Button>
          </div>
        </nav>
      </header>
      <main>
        {/* Hero Section */}
        <section className="bg-[url('/src/assets/pics/Group_1.jpg')] bg-cover bg-center bg-no-repeat h-[620px] relative">
          <div className="absolute bottom-0 right-0">
            <img src={Image} alt="Image" />
          </div>
          <div className="flex flex-col items-start justify-start gap-4 p-33">
            <h1 className="text-[88px] leading-[100px] font-bold text-white">
              Are you starving?
            </h1>
            <p className="text-[#504F4F]">
              Within a few clicks, find meals that are accessible near you
            </p>
            <div className="bg-white w-[856px] h-[194px] border border-white rounded-lg flex flex-col items-center justify-start">
              <div className="border-b border-white-100 w-full h-[80px] flex items-center justify-start gap-2 p-4">
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
              <div className="bg-white w-full flex items-center justify-start gap-2 p-4">
                <div className="bg-gray-100 flex items-center justify-start gap-2 h-[48px] w-[676px] border-b border-white-900 p-4 rounded-lg">
                  <MapPinIcon
                    className="w-4 h-6 text-[#FF7474]"
                    strokeWidth={5}
                  />
                  <input type="text" placeholder="Enter your address" />
                </div>
                <Button
                  variant="default"
                  className="text-lg text-white font-bold bg-[#FF7A7A] border-[#FF7A7A]  hover:bg-[#F65900] duration-300 pt-4.5 pb-4.5 pl-6 pr-6 rounded-md h-[60px] w-[180px]"
                >
                  <SearchIcon className="w-4 h-5" strokeWidth={4} />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Restaurants Section */}
        <section className="container w-11/12 mx-auto h-[445px] m-20">
          <div className="bg-white flex items-center justify-start">
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={Restaurant1} alt="Image" />
                <div className="absolute bottom-0 left-0 bg-[#FFB30E] rounded-bl-lg rounded-tr-3xl w-[140px] h-[84px] flex items-center justify-center">
                  <p className="text-7xl font-bold text-white">15</p>
                  <div className="flex flex-col items-center justify-start text-xl text-white font-bold">
                    <p className="text-2xl">%</p>
                    <p>Off</p>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold">Greys Vage</p>
              <div className="flex items-center justify-start gap-2">
                <div className="bg-[#F1722833] border-[#F1722833] w-2.5/5 p-4 rounded-sm">
                  <p className="text-lg font-bold text-[#F17228]">
                    6 Days Remaining
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={Restaurant2} alt="Image" />
                <div className="absolute bottom-0 left-0 bg-[#FFB30E] rounded-bl-lg rounded-tr-3xl w-[140px] h-[84px] flex items-center justify-center">
                  <p className="text-7xl font-bold text-white">10</p>
                  <div className="flex flex-col items-center justify-start text-xl text-white font-bold">
                    <p className="text-2xl">%</p>
                    <p>Off</p>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold">Greys Vage</p>
              <div className="flex items-center justify-start gap-2">
                <div className="bg-[#F1722833] border-[#F1722833] w-2.5/5 p-4 rounded-sm">
                  <p className="text-lg font-bold text-[#F17228]">
                    9 Days Remaining
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={Restaurant3} alt="Image" />
                <div className="absolute bottom-0 left-0 bg-[#FFB30E] rounded-bl-lg rounded-tr-3xl w-[140px] h-[84px] flex items-center justify-center">
                  <p className="text-7xl font-bold text-white">25</p>
                  <div className="flex flex-col items-center justify-start text-xl text-white font-bold">
                    <p className="text-2xl">%</p>
                    <p>Off</p>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold">Greys Vage</p>
              <div className="flex items-center justify-start gap-2">
                <div className="bg-[#F1722833] border-[#F1722833] w-2.5/5 p-4 rounded-sm">
                  <p className="text-lg font-bold text-[#F17228]">
                    7 Days Remaining
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={Restaurant4} alt="Image" />
                <div className="absolute bottom-0 left-0 bg-[#FFB30E] rounded-bl-lg rounded-tr-3xl w-[140px] h-[84px] flex items-center justify-center">
                  <p className="text-7xl font-bold text-white">20</p>
                  <div className="flex flex-col items-center justify-start text-xl text-white font-bold">
                    <p className="text-2xl">%</p>
                    <p>Off</p>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold">Greys Vage</p>
              <div className="flex items-center justify-start gap-2">
                <div className="bg-[#F1722833] border-[#F1722833] w-2.5/5 p-4 rounded-sm">
                  <p className="text-lg font-bold text-[#F17228]">
                    5 Days Remaining
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How does it work Section */}
        <section className="container max-w-full bg-linear-to-b from-[#FFCE67]/20 to-[#FDEDCA]/10 h-[520px]">
          <p className="text-[#F17228] text-5xl text-center font-bold p-20">
            How does it work
          </p>
          <div className="w-[1340px] mx-auto flex items-center justify-center gap-10 mb-20">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src={HowDoesItWork1} alt="Image" />
              <p className="text-[#434343] text-xl font-bold">
                Select Location
              </p>
              <p className="text-lg text-[#9E9E9E] text-center mt-4">
                Choose the location where your food will be delivered.
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src={HowDoesItWork2} alt="Image" />
              <p className="text-[#434343] text-xl font-bold">Choose Order</p>
              <p className="text-lg text-[#9E9E9E] text-center mt-4">
                Check over hundreds of menus to pick your favorite food
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src={HowDoesItWork3} alt="Image" />
              <p className="text-[#434343] text-xl font-bold">Pay Advanced</p>
              <p className="text-lg text-[#9E9E9E] text-center mt-4">
                It's quick, safe, and simple. Select several methods of payment
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src={HowDoesItWork4} alt="Image" />
              <p className="text-[#434343] text-xl font-bold">Enjoy Meals</p>
              <p className="text-lg text-[#9E9E9E] text-center mt-4">
                Food is made and delivered directly to your home.
              </p>
            </div>
          </div>
        </section>
        {/* Popular Items Section */}
        <section className="container mx-auto h-[520px] m-20 mb-40">
          <div className="flex flex-col items-center justify-center">
            <p className="text-5xl text-center font-bold p-15">Popular items</p>
          </div>
          <div className="bg-white flex items-center justify-center gap-4">
            <img src={LeftItem1} alt="Image" />
            <div className="w-full h-full space-y-3">
              <img src={PopularItem1} alt="Image" />
              <p className="text-2xl font-bold">Cheese Burger</p>
              <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                <MapPinIcon className="w-4 h-5" strokeWidth={4} />
                Burger Arena
              </p>
              <p className="text-2xl font-bold">$3.88</p>
              <Button
                variant="default"
                className="bg-[#F17228] text-lg text-white text-center font-bold shadow-md shadow-[#F17228]/70 w-[280px] h-[60px] hover:bg-[#F65900] duration-300"
              >
                Order Now
              </Button>
            </div>
            <div className="w-full h-full space-y-3">
              <img src={PopularItem2} alt="Image" />
              <p className="text-2xl font-bold">Cheese Burger</p>
              <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                <MapPinIcon className="w-4 h-5" strokeWidth={4} />
                Burger Arena
              </p>
              <p className="text-2xl font-bold">$3.88</p>
              <Button
                variant="default"
                className="bg-[#F17228] text-lg text-white text-center font-bold shadow-md shadow-[#F17228]/70 w-[280px] h-[60px] hover:bg-[#F65900] duration-300"
              >
                Order Now
              </Button>
            </div>
            <div className="w-full h-full space-y-3">
              <img src={PopularItem3} alt="Image" />
              <p className="text-2xl font-bold">Cheese Burger</p>
              <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                <MapPinIcon className="w-4 h-5" strokeWidth={4} />
                Burger Arena
              </p>
              <p className="text-2xl font-bold">$3.88</p>
              <Button
                variant="default"
                className="bg-[#F17228] text-lg text-white text-center font-bold shadow-md shadow-[#F17228]/70 w-[280px] h-[60px] hover:bg-[#F65900] duration-300"
              >
                Order Now
              </Button>
            </div>
            <div className="w-full h-full space-y-3">
              <img src={PopularItem4} alt="Image" />
              <p className="text-2xl font-bold">Cheese Burger</p>
              <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                <MapPinIcon className="w-4 h-5" strokeWidth={4} />
                Burger Arena
              </p>
              <p className="text-2xl font-bold">$3.88</p>
              <Button
                variant="default"
                className="bg-[#F17228] text-lg text-white text-center font-bold shadow-md shadow-[#F17228]/70 w-[280px] h-[60px] hover:bg-[#F65900] duration-300"
              >
                Order Now
              </Button>
            </div>
            <div className="w-full h-full space-y-3">
              <img src={PopularItem5} alt="Image" />
              <p className="text-2xl font-bold">Cheese Burger</p>
              <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                <MapPinIcon className="w-4 h-5" strokeWidth={4} />
                Burger Arena
              </p>
              <p className="text-2xl font-bold">$3.88</p>
              <Button
                variant="default"
                className="bg-[#F17228] text-lg text-white text-center font-bold shadow-md shadow-[#F17228]/70 w-[280px] h-[60px] hover:bg-[#F65900] duration-300"
              >
                Order Now
              </Button>
            </div>
            <img src={RightItem1} alt="Image" />
          </div>
        </section>
        {/* Featured Restaurants Section */}
        <section className="container w-11/12 mx-auto m-20">
          <p className="text-5xl text-center font-bold p-15">
            Featured Restaurants
          </p>
          <div className="bg-white grid grid-cols-4 gap-4 items-center justify-start">
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={FeaturedRestaurant1} alt="Image" />
                <div className="absolute top-0 left-0 flex items-center justify-start m-2">
                  <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <HandCoins className="w-4 h-5" strokeWidth={4} />
                      35% off
                    </p>
                  </div>
                  <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <Clock className="w-4 h-5" strokeWidth={4} />
                      Fast
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={FRestaurant1} alt="Image" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-bold">Foodworld</p>
                  <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                    <StarIcon className="w-4 h-5" strokeWidth={4} />
                    40
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mb-8">
                <div className="bg-[#F1722833] border-[#F1722833] w-3/5 p-2 rounded-full">
                  <p className="text-lg text-center font-bold text-[#F17228]">
                    Opens tomorrow
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={FeaturedRestaurant2} alt="Image" />
                <div className="absolute top-0 left-0 flex items-center justify-start m-2">
                  <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <HandCoins className="w-4 h-5" strokeWidth={4} />
                      20% off
                    </p>
                  </div>
                  <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <Clock className="w-4 h-5" strokeWidth={4} />
                      Fast
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={FRestaurant2} alt="Image" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-bold">Pizzahub</p>
                  <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                    <StarIcon className="w-4 h-5" strokeWidth={4} />
                    36
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mb-8">
                <div className="bg-[#F1722833] border-[#F1722833] w-3/5 p-2 rounded-full">
                  <p className="text-lg text-center font-bold text-[#F17228]">
                    Opens tomorrow
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={FeaturedRestaurant3} alt="Image" />
                <div className="absolute top-0 left-0 flex items-center justify-start m-2">
                  <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <HandCoins className="w-4 h-5" strokeWidth={4} />
                      20% off
                    </p>
                  </div>
                  <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <Clock className="w-4 h-5" strokeWidth={4} />
                      Fast
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={FRestaurant3} alt="Image" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-bold">Donuts hut</p>
                  <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                    <StarIcon className="w-4 h-5" strokeWidth={4} />
                    20
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mb-8">
                <div className="bg-[#79B93C33] border-[#79B93C33] w-3/5 p-2 rounded-full">
                  <p className="text-lg text-center font-bold text-[#79B93C]">
                    Open now
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={FeaturedRestaurant4} alt="Image" />
                <div className="absolute top-0 left-0 flex items-center justify-start m-2">
                  <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <HandCoins className="w-4 h-5" strokeWidth={4} />
                      30% off
                    </p>
                  </div>
                  <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <Clock className="w-4 h-5" strokeWidth={4} />
                      Fast
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={FRestaurant4} alt="Image" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-bold">Ruby Tuesday</p>
                  <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                    <StarIcon className="w-4 h-5" strokeWidth={4} />
                    40
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mb-8">
                <div className="bg-[#79B93C33] border-[#79B93C33] w-3/5 p-2 rounded-full">
                  <p className="text-lg text-center font-bold text-[#79B93C]">
                    Open now
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={FeaturedRestaurant5} alt="Image" />
                <div className="absolute top-0 left-0 flex items-center justify-start m-2">
                  <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <HandCoins className="w-4 h-5" strokeWidth={4} />
                      20% off
                    </p>
                  </div>
                  <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <Clock className="w-4 h-5" strokeWidth={4} />
                      Fast
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={FRestaurant5} alt="Image" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-bold">Kuakata Fried Chicken</p>
                  <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                    <StarIcon className="w-4 h-5" strokeWidth={4} />
                    60
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mb-8">
                <div className="bg-[#79B93C33] border-[#79B93C33] w-3/5 p-2 rounded-full">
                  <p className="text-lg text-center font-bold text-[#79B93C]">
                    Open now
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={FeaturedRestaurant6} alt="Image" />
                <div className="absolute top-0 left-0 flex items-center justify-start m-2">
                  <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <HandCoins className="w-4 h-5" strokeWidth={4} />
                      10% off
                    </p>
                  </div>
                  <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <Clock className="w-4 h-5" strokeWidth={4} />
                      Fast
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={FRestaurant6} alt="Image" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-bold">Kuakata Fried Chicken</p>
                  <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                    <StarIcon className="w-4 h-5" strokeWidth={4} />
                    70
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mb-8">
                <div className="bg-[#79B93C33] border-[#79B93C33] w-3/5 p-2 rounded-full">
                  <p className="text-lg text-center font-bold text-[#79B93C]">
                    Open now
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={FeaturedRestaurant7} alt="Image" />
                <div className="absolute top-0 left-0 flex items-center justify-start m-2">
                  <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <HandCoins className="w-4 h-5" strokeWidth={4} />
                      15% off
                    </p>
                  </div>
                  <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <Clock className="w-4 h-5" strokeWidth={4} />
                      Fast
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={FRestaurant7} alt="Image" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-bold">Red Square</p>
                  <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                    <StarIcon className="w-4 h-5" strokeWidth={4} />
                    40
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mb-8">
                <div className="bg-[#F1722833] border-[#F1722833] w-3/5 p-2 rounded-full">
                  <p className="text-lg text-center font-bold text-[#F17228]">
                    Opens tomorrow
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full space-y-8 shadow-neutral-500">
              <div className="relative">
                <img src={FeaturedRestaurant8} alt="Image" />
                <div className="absolute top-0 left-0 flex items-center justify-start m-2">
                  <div className="bg-[#F17228] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <HandCoins className="w-4 h-5" strokeWidth={4} />
                      25% off
                    </p>
                  </div>
                  <div className="bg-[#FFB30E] m-2 p-1 rounded-lg">
                    <p className="text-xl font-bold text-white flex items-center justify-center px-2 gap-2">
                      <Clock className="w-4 h-5" strokeWidth={4} />
                      Fast
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={FRestaurant8} alt="Image" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-bold">Taco Bell</p>
                  <p className="text-xl text-[#FFB30E] flex items-center justify-start gap-2">
                    <StarIcon className="w-4 h-5" strokeWidth={4} />
                    40
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mb-8">
                <div className="bg-[#F1722833] border-[#F1722833] w-3/5 p-2 rounded-full">
                  <p className="text-lg text-center font-bold text-[#F17228]">
                    Opens tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <Button
              variant="default"
              className="bg-linear-to-r from-[#FFBA26] to-[#FF9A0E] text-lg text-white text-center font-bold hover:from-[#FF9A0E] hover:to-[#FFBA26] duration-300 shadow-md shadow-[#FF9A0E]/70 w-[280px] h-[60px]"
            >
              View All
              <ArrowRightIcon className="w-4 h-5" strokeWidth={4} />
            </Button>
          </div>
        </section>
        {/* Search Food Section */}
        <section className="container max-w-full bg-[#FEFAF1] text-black h-[520px] px-30 py-20">
          <div className="flex items-center justify-between h-[76px] mb-8">
            <p className="text-5xl text-[#212121] text-start font-bold">
              Search By Food
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center mb-4">
                <p className="text-lg text-center text-[#FFB30E] font-bold">
                  View All
                </p>
                <ArrowRightIcon
                  className="w-4 h-5 text-[#FFB30E]"
                  strokeWidth={4}
                />
              </div>
              <div className="flex items-center justify-center object-cover object-center">
                <img
                  src={LeftItem1}
                  alt="Search By Food"
                  className="w-[76px] h-[76px]"
                />
                <img
                  src={RightItem1}
                  alt="Search By Food"
                  className="w-[76px] h-[76px]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-center">
              <img
                src={FeaturedRestaurant1}
                alt="Search By Food"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-lg text-[#212121] font-bold">Pasta</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={FeaturedRestaurant2}
                alt="Search By Food"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-lg text-[#212121] font-bold">Smoothie</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={FeaturedRestaurant3}
                alt="Search By Food"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-lg text-[#212121] font-bold">Pan Cake</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={FeaturedRestaurant4}
                alt="Search By Food"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-lg text-[#212121] font-bold">Cupcake</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={FeaturedRestaurant5}
                alt="Search By Food"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-lg text-[#212121] font-bold">Steak</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={FeaturedRestaurant6}
                alt="Search By Food"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-lg text-[#212121] font-bold">Meat</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className="container max-w-full bg-[#212121] p-30 gap-4 text-white flex flex-col items-start justify-between">
          <p className="text-2xl text-start font-bold mb-8">Our top cities</p>
          <div className="mb-8 flex items-center justify-start gap-[240px] w-full border-b-2 border-[#424242] pb-16 shadow-md">
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-lg text-start">Dhaka</p>
              <p className="text-lg text-start">Chittagong</p>
              <p className="text-lg text-start">Sylhet</p>
              <p className="text-lg text-start">Rajshahi</p>
              <p className="text-lg text-start">Khulna</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-lg text-start">Dhaka</p>
              <p className="text-lg text-start">Chittagong</p>
              <p className="text-lg text-start">Sylhet</p>
              <p className="text-lg text-start">Rajshahi</p>
              <p className="text-lg text-start">Khulna</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-lg text-start">Dhaka</p>
              <p className="text-lg text-start">Chittagong</p>
              <p className="text-lg text-start">Sylhet</p>
              <p className="text-lg text-start">Rajshahi</p>
              <p className="text-lg text-start">Khulna</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-lg text-start">Dhaka</p>
              <p className="text-lg text-start">Chittagong</p>
              <p className="text-lg text-start">Sylhet</p>
              <p className="text-lg text-start">Rajshahi</p>
              <p className="text-lg text-start">Khulna</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-lg text-start">Dhaka</p>
              <p className="text-lg text-start">Chittagong</p>
              <p className="text-lg text-start">Sylhet</p>
              <p className="text-lg text-start">Rajshahi</p>
              <p className="text-lg text-start">Khulna</p>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-start gap-[240px] w-full border-b-2 border-[#424242] pb-16 shadow-md">
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-2xl text-start font-bold mb-8">Company</p>
              <p className="text-lg text-start">About Us</p>
              <p className="text-lg text-start">Team</p>
              <p className="text-lg text-start">Careers</p>
              <p className="text-lg text-start">Blog</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-2xl text-start font-bold mb-8">Contact</p>
              <p className="text-lg text-start">Help Support</p>
              <p className="text-lg text-start">Partner with us</p>
              <p className="text-lg text-start">Ride with us</p>
              <p className="text-lg text-start">Terms of Service</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-2xl text-start font-bold mb-8">Legal</p>
              <p className="text-lg text-start">Terms of Service</p>
              <p className="text-lg text-start">Refund Policy</p>
              <p className="text-lg text-start">Privacy Policy</p>
              <p className="text-lg text-start">Cookie Policy</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-8">
              <p>FOLLOW US</p>
              <div className="flex items-center justify-start gap-2">
                <Instagram className="w-4 h-5" strokeWidth={4} />
                <Facebook className="w-4 h-5" strokeWidth={4} />
                <Twitter className="w-4 h-5" strokeWidth={4} />
              </div>
              <p className="text-lg text-[#BBBBBB] text-start">
                Receive exclusive offers in your mailbox
              </p>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-start gap-2 bg-[#424242] rounded-md p-2 text-[#ADADAD]">
                  <Mail className="w-4 h-5" strokeWidth={4} />
                  <input type="text" placeholder="Enter your email" />
                </div>
                <Button
                  variant="default"
                  className="bg-linear-to-r from-[#FB8000] to-[#FF8A00] text-white shadow-md shadow-[#FF8A00]/70"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-lg text-[#BBBBBB] text-start">
              All rights reserved
              <span className="text-white"> © Food Delivery, 2025</span>.
            </p>
            <p className="text-lg text-[#BBBBBB] text-end">
              Made with <span className="text-yellow-500">❤</span> by{"  "}
              <span className="text-white">Themewagon</span>
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Index;
