import React from 'react';
import { Select, Grid, GridItem, Text } from '@chakra-ui/react';

function Section() {
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} m={10} >
        <GridItem w="100%" h="10" bg="white.100" ml={40}>
          <Text>Physician</Text>
          <Select variant="filled" placeholder="" size="lg" w={300}>
            <option value="option1">Select All</option>
            <option value="option2">Robinet MD</option>
            <option value="option3">Robinet MD</option>
          </Select>
        </GridItem>
        <GridItem w="100%" h="10" bg="white.100">
          <Text>Contacted</Text>
          <Select variant="filled" placeholder="" size="lg" w={300}>
            <option value="option1"> All</option>
            <option value="option2">Yes</option>
            <option value="option3">No </option>
          </Select>
        </GridItem>
        <GridItem w="100%" h="10" bg="white.100">
          <Text>Days</Text>
          <Select
            variant="filled"
            placeholder="All Days"
            size="lg"
            w={300}
          ></Select>
        </GridItem>
        <GridItem w="100%" h="10" bg="white.100">
          <Text>Minutes</Text>
          <Select
            variant="filled"
            placeholder="All Minutes"
            size="lg"
            w={300}
          ></Select>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Section;
