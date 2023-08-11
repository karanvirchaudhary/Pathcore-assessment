import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import { createNewPart, decrementPart, incrementPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

import './Home.sass';

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const [newPartName, setNewPartName] = useState<string>('');
  const parts = useSelector(partsSelector);
  const dispatch = useDispatch();

  const validateNewPartName = (partName: string) => {
    if (!newPartName || parts.find(part => part.name === partName) || typeof partName !== 'string'){
      return false;
    }

    return true;
  };

  const handleCreateNewPart = () => {
      dispatch(createNewPart(newPartName));
      setNewPartName('');
  };

  return (
    <div>
      <h1>Parts Counter</h1>
      <hr />
      <input
        type='text'
        name='newPartName'
        id='newPartName'
        onChange={e => setNewPartName(e.target.value)} value={newPartName}
      />
      <button
        onClick={() => handleCreateNewPart()}
        disabled={!validateNewPartName(newPartName)}
      >
        Create Part
      </button>

      <ul className="partsList">
        {parts.map(part => (
          <li
            key={part.name}
            onClick={() => setSelectedPart(part.name)}
            style={{backgroundColor: part.name === selectedPart ? '#42e9f5' : 'white'}}
          >
            {part.name} {part.amount}
            <button
              disabled={part.name !== selectedPart}
              onClick={e => {
                dispatch(incrementPart(part.name));
              }}
            >
              +
            </button>
            <button
              disabled={part.name !== selectedPart}
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
          return <PartDescriptor key={part.name} name={part.name} amount={part.amount} />;
        })()}
    </div>
  );
};

export default Home;
