import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

let UrlOfImage = [
"https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/1410138/pexels-photo-1410138.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/1486976/pexels-photo-1486976.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=600"
]

function Crosuel() {
const [activeIndex, setactiveIndex] = useState(0);

const handlePrevious = () => {
    setactiveIndex(!activeIndex ? UrlOfImage.length - 1 : activeIndex - 1)
}

const handleNext = () => {
    setactiveIndex((activeIndex + 1) % UrlOfImage.length)
};


useEffect(() => {

    const timer = setTimeout(() => {
        handleNext()
    }, 5000);

    return () => {
        clearTimeout(timer);
    }

}, [activeIndex])

  return (
    <div className='flex items-center justify-center m-12'>
      <div className='flex justify-between items-center'>
        <button onClick={handlePrevious}>Previous</button>

        {UrlOfImage.map((url, index) => (
        <img key={index} src={url} className={"h-5/6 w-5/6 p-7 object-contain " + (activeIndex == index ? "block" : "hidden")}  alt="img" />
        ))}

        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Crosuel;