import { Box, Flex, VStack } from '@chakra-ui/react';
import ResponsiveContainer from '../Layout/ResponsiveContainer';

const Section = ({ bgColor, children, height }) => (
    <Box
        width="100%"
        height= {"100%" || height}
        bgColor={bgColor}
        // marginBottom = "3em"
        paddingTop="2em"
        paddingBottom="2em"
    >
      <ResponsiveContainer>
        <Flex minH="400px" marginY="32px">
          <VStack
            spacing="10"
            alignItems="flex-start"
            flexGrow="1"
          >
            {children}
          </VStack>
        </Flex>
      </ResponsiveContainer>
    </Box>
);

export default Section;
