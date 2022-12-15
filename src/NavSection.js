import React from 'react';
import PatientTab from './PatientTab';
import { Heading, Text, Flex } from '@chakra-ui/react';

function NavSection() {
  return (
    <div>
      <Flex align="left">
        <Text ml={2} fontSize="4xl">
          Patient Management
        </Text>
      </Flex>

      <PatientTab />
    </div>
  );
}

export default NavSection;
