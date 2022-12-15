import React from 'react';
import {
  Table,
  TableContainer,
  Tr,
  Thead,
  Td,
  Tfoot,
  Th,
  Tbody,
  CheckboxGroup,
  Checkbox,
  Select,
} from '@chakra-ui/react';

function ListPatient() {
  return (
    <TableContainer ml={-20}>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>
              <Select variant="unstyled" placeholder="Patient" />
            </Th>
            <Th>
              <Select variant="unstyled" placeholder="Physician" />
            </Th>
            <Th isNumeric>
              <Select variant="unstyled" placeholder="Days" />
            </Th>
            <Th>
              <Select variant="unstyled" placeholder="Contact" />
            </Th>
            <Th isNumeric>
              <Select variant="unstyled" placeholder="Minutes" />
            </Th>
            <Th isNumeric>
              <Select variant="unstyled" placeholder="BP" />
            </Th>
            <Th isNumeric>
              <Select variant="unstyled" placeholder="Pulse" />
            </Th>
            <Th isNumeric>
              <Select variant="unstyled" placeholder="Weight" />
            </Th>
            <Th isNumeric>
              <Select variant="unstyled" placeholder="Glucose" />
            </Th>
            <Th isNumeric>
              <Select variant="unstyled" placeholder="REVIEW" />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <CheckboxGroup colorScheme="blue">
            <Tr>
              <Td>
                <Checkbox mr={1} />
                inches
              </Td>

              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                feet
              </Td>

              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                yards
              </Td>

              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                inches
              </Td>

              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                inches
              </Td>

              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                inches
              </Td>

              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                inches
              </Td>

              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                inches
              </Td>

              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                inches
              </Td>

              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
            <Tr>
              <Td>
                {' '}
                <Checkbox mr={3} />
                inches
              </Td>

              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Checkbox size="lg" p={10} />
            </Tr>
          </CheckboxGroup>
        </Tbody>

        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
}

export default ListPatient;
