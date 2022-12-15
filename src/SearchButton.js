import React from 'react'
import {InputGroup,IconButton,InputLeftElement,Flex,Input} from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';


function SearchButton() {
  return (
    <Flex justifySelf="flex-end" mr={0} >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="white.900" />}
              />
              <Input
                htmlSize={40}
                width="auto"
                variant="filled"
                type="text"
                placeholder="Search..."
              />
            </InputGroup>
            <IconButton
              aria-label="bell"
              variant="solid"
              size="lg"
              ml={10}
              icon={<BellIcon />}
            />
          </Flex>
  )
}

export default SearchButton;