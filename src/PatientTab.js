import { React, useState } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
} from '@chakra-ui/react';
import { SearchIcon, AddIcon, CalendarIcon } from '@chakra-ui/icons';


function PatientTab() {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div >
      <Breadcrumb separator="" m={10}>
        <BreadcrumbItem isCurrentPage ml={0}>
          <BreadcrumbLink href="#">All Patient</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">New Patient</BreadcrumbLink>
        </BreadcrumbItem>

        <div>
          <BreadcrumbItem ml={100}>
            <BreadcrumbLink href="#">
              <CalendarIcon />  Set Expected DoD
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem ml={100}>
            <BreadcrumbLink href="#">
              <Select variant="filled" placeholder="Assign Specialist">
                <option value="option1"> DR Andron</option>
                <option value="option2">Dr Stephen Jones</option>
                <option value="option3">Dr Mark Pollan</option>
              </Select>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem ml={100}>
            <BreadcrumbLink href="#">
              <AddIcon /> Enroll Patient
            </BreadcrumbLink>
          </BreadcrumbItem>
        </div>
        <Flex>
          <InputGroup ml={200}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="white.900" />}
            />
            <Input
              htmlSize={40}
              width="auto"
              variant="filled"
              type="text"
              placeholder="Search All Patient"
            />
          </InputGroup>
        </Flex>
      </Breadcrumb>
    </div>
  );
}

export default PatientTab;
