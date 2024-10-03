import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    // Example API endpoint
    const apiUrl = `https://api.example.com/properties?country=${country}&location=${location}&propertyType=${propertyType}&priceRange=${priceRange}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data); // Handle the data returned from the API
      // You might want to set this data to state to display results
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Handle error appropriately
    }
  };

  return (
    <section className='hero'>
      <div className='container'>
        <Heading title='Search Your Next Home' subtitle='Find new & featured property located in your local city.' />

        <form className='flex' onSubmit={handleSearch}>
          <div className='box'>
            <span>Country</span>
            <input
              type='text'
              placeholder='Country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className='box'>
            <span>City/Street</span>
            <input
              type='text'
              placeholder='Location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className='box'>
            <span>Property Type</span>
            <input
              type='text'
              placeholder='Property Type'
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            />
          </div>
          <div className='box'>
            <span>Price Range</span>
            <input
              type='text'
              placeholder='Price Range'
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>
          <div className='box'>
            <h4>Advance Filter</h4>
          </div>
          <button type='submit' className='btn1'>
            <CiSearch />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
