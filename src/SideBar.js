import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiBarChart
} from 'react-icons/fi';

import NavItem from './NavItem';

export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large');
  return (
    <Flex
      pos="sticky"
      left="5"
      ml={-40}
      mh="80vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      w={navSize === 'small' ? '75px' : '50px'}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="4%"
        flexDir="column"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
       
        <NavItem
          navSize={navSize}
          icon={FiHome}
          active        
          description="This is the description for the dashboard."
        />
        <NavItem navSize={navSize} icon={FiUser} />
        <NavItem navSize={navSize} icon={FiBarChart} />
        <NavItem navSize={navSize} icon={FiHelpCircle}  />
        <NavItem navSize={navSize} icon={FiSettings} />
        <NavItem navSize={navSize} icon={FiBarChart}  />
      </Flex>
    </Flex>
  );
}
