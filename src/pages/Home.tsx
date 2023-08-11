import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import { decrementPart, incrementPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

import './Home.sass';

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const parts = useSelector(partsSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Parts Counter</h1>
      <hr />
      <ul className="partsList">
        {parts.map(part => (
          <li
            key={part.name}
            onClick={() => setSelectedPart(part.name)}
            style={{backgroundColor: part.name === selectedPart ? '#42e9f5' : 'white'}}
          >
            {part.name} {part.amount}
            <button
              onClick={e => {
                dispatch(incrementPart(part.name));
              }}
            >
              +
            </button>
            <button
              onClick={e => {
                dispatch(decrementPart(part.name));
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Part Info</h2>
      {selectedPart &&
        (() => {
          const part = parts.find(x => x.name === selectedPart);
          return <PartDescriptor name={part.name} amount={part.amount} />;
        })()}
    </div>
  );
};

export default Home;
