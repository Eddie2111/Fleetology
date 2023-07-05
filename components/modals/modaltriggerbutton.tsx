import React, { useState } from 'react';
import ExampleModal from './ExampleModal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>Open Modal</Button>
      <ExampleModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default App;