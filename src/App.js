import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import ElementCard from './ElementCard';
import ElementModal from './ElementModal';

function App() {

  const [elements, setElements] = useState([]);

  const [selectedElement, setSelectedElement] = useState([null]);

  const atomic1And2 = elements?.filter((element) => element?.atomicNumber >= 1 && element?.atomicNumber <= 2);

  const atomic3And4 = elements?.filter((element) => element?.atomicNumber >= 3 && element?.atomicNumber <= 4);

  const atomic5To10 = elements?.filter((element) => element?.atomicNumber >= 5 && element?.atomicNumber <= 10);

  const atomic11And12 = elements?.filter((element) => element?.atomicNumber >= 11 && element?.atomicNumber <= 12);

  const atomic13To18 = elements?.filter((element) => element?.atomicNumber >= 13 && element?.atomicNumber <= 18);

  const lenthanide = elements?.filter((element) => element?.atomicNumber >= 58 && element?.atomicNumber <= 71);

  const actinides = elements?.filter((element) => element?.atomicNumber >= 90 && element?.atomicNumber <= 103);

  const restElements = elements?.filter((element) =>
    !atomic1And2.includes(element) &&
    !atomic3And4.includes(element) &&
    !atomic5To10.includes(element) &&
    !atomic11And12.includes(element) &&
    !atomic13To18.includes(element) &&
    !lenthanide.includes(element) &&
    !actinides.includes(element));

  useEffect(() => {
    fetch("https://neelpatel05.pythonanywhere.com/")
      .then(res => res.json())
      .then(data => {

        setElements(data);
      });
  }, []);


  return (
    <div className="App">
      <div>
        <div className="flex justify-between">
          {atomic1And2?.map((element) => (
            <ElementCard
              setSelectedElement={setSelectedElement}
              element={element}></ElementCard>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex">
            {atomic3And4?.map((element) => (
              <ElementCard
                setSelectedElement={setSelectedElement}
                element={element}></ElementCard>
            ))}
          </div>
          <div className="flex">
            {atomic5To10?.map((element) => (
              <ElementCard
                setSelectedElement={setSelectedElement}
                element={element}></ElementCard>
            ))}

          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            {atomic11And12?.map((element) => (
              <ElementCard
                setSelectedElement={setSelectedElement}
                element={element}></ElementCard>
            ))}
          </div>
          <div className="flex">
            {atomic13To18?.map((element) => (
              <ElementCard
                setSelectedElement={setSelectedElement}
                element={element}></ElementCard>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-18">
          {restElements?.map((element) => (
            <ElementCard
              setSelectedElement={setSelectedElement}
              element={element}></ElementCard>
          ))}
        </div>

        <div className="flex mt-5 w-[70%] mx-auto">
          {lenthanide?.map((element) => (
            <ElementCard
              setSelectedElement={setSelectedElement}
              element={element}></ElementCard>
          ))}
        </div>

        <div className="flex w-[70%] mx-auto">
          {actinides?.map((element) => (
            <ElementCard
              setSelectedElement={setSelectedElement}
              element={element}></ElementCard>
          ))}
        </div>
      </div>
      <ElementModal selectedElement={selectedElement}></ElementModal>
    </div>
  );
}

export default App;