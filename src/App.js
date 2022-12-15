import React from 'react';
import SearchButton from './SearchButton';
import NavSection from './NavSection';
import Section from './Section';
import ListPatient from './ListPatient';
import SideBar from './SideBar';
import Pagination from './Pagination';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" m={5} >
        <SimpleGrid columns={10}>
          <SideBar />

          <Grid>
            <ColorModeSwitcher justifySelf="flex-end" />

            <SearchButton  />

            <NavSection />
            <Section />
            <ListPatient />
          </Grid>
         
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
