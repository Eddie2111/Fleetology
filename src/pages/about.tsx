import React from 'react';
import { Container, Text } from '@nextui-org/react';

export default function About(){
  return (
    <Container className="py-16">
        <div className="flex flex-col items-center space-y-8">

        <Text className="text-center">
          We are a leading provider of online tracking solutions for cargo fleets managed by company managers.
        </Text>
        <div className="max-w-md mx-auto">
          <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" alt="About Us" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="mt-12">
        <p className="mb-4 text-2xl">
          Our Mission
        </p>
        <Text className="text-lg">
          At [Your Company Name], our mission is to empower companies to efficiently manage their cargo fleets by providing accurate and real-time tracking solutions.
        </Text>
      </div>
    </Container>
  );
};
