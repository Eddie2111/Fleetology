import dynamic from 'next/dynamic';
import React from 'react';

const Button = dynamic(() => import('@chakra-ui/react').then((mod) => mod.Button));
const Modal = dynamic(() => import('@chakra-ui/react').then((mod) => mod.Modal));
const ModalOverlay = dynamic(() => import('@chakra-ui/react').then((mod) => mod.ModalOverlay));
const ModalContent = dynamic(() => import('@chakra-ui/react').then((mod) => mod.ModalContent));
const ModalHeader = dynamic(() => import('@chakra-ui/react').then((mod) => mod.ModalHeader));
const ModalFooter = dynamic(() => import('@chakra-ui/react').then((mod) => mod.ModalFooter));
const ModalBody = dynamic(() => import('@chakra-ui/react').then((mod) => mod.ModalBody));
const ModalCloseButton = dynamic(() => import('@chakra-ui/react').then((mod) => mod.ModalCloseButton));


const ButtonPropsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Modal content goes here...</p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExampleModal;