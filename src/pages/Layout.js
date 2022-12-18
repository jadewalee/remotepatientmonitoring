import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Flex, Avatar } from '@chakra-ui/react';
import {
  FiHome,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiHeart,
  FiBarChart,
} from 'react-icons/fi';

import NavItem from './NavItem';

const Layout = () => {
  const [navSize, changeNavSize] = useState('large');
  return (
    <>
      <Flex
        pos="fixed"
        left="5"
        ml={0}
        h="100vh"
        mt={-60}
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
          <Link to="/Home">
            <NavItem
              navSize={navSize}
              icon={FiHome}
              active
              description="This is the description for the dashboard."
            />
          </Link>
          <Flex mt={10} align="center">
            <Avatar size="md" src="avatar-1.jpg" />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize === 'small' ? 'none' : 'flex'}
            ></Flex>
          </Flex>
          <NavItem navSize={navSize} icon={FiBarChart} />
          <NavItem navSize={navSize} icon={FiHeart} />
          <Link to="/Navsection">
            <NavItem navSize={navSize} icon={FiUser} />
          </Link>
          <NavItem navSize={navSize} icon={FiHelpCircle} />
          <NavItem navSize={navSize} icon={FiSettings} />
        </Flex>
      </Flex>

      <Outlet />
    </>
  );
};

export default Layout;
