import React from 'react';

const ElementCard = ({ element, setSelectedElement }) => {

    const { symbol } = element;

    const captureElement = () => {
        setSelectedElement(element);
    };


    return (
        <label
            onClick={captureElement}
            htmlFor="elementmodal" className="cursor-pointer w-[75px] h-[100px] text-black hover:text-white bg-blue-300 border-2 border-gray-500 border-solid btn">
            <p className="font-bold text-3xl mt-5">{symbol}</p>
        </label>
    );
};

export default ElementCard;