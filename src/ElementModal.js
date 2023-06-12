import React from 'react';


const ElementModal = ({ selectedElement }) => {
    console.log(selectedElement);

    const { symbol, name, atomicNumber, electronicConfiguration, atomicMass, density } = selectedElement;

    return (
        <div>
            <input type="checkbox" id="elementmodal" className="modal-toggle" />
            <label htmlFor="elementmodal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div className="flex justify-between">
                        <p>{atomicNumber}</p>
                        <p className="font-bold text-2xl">{name}</p>
                        <p>{atomicMass}</p>
                    </div>
                    <p className="text-9xl font-bold my-10">{symbol}</p>
                    <p className="text-2xl">{electronicConfiguration}</p>
                    <p className="text-2xl">{density}</p>
                </label>
            </label>
        </div>
    );
};

export default ElementModal;