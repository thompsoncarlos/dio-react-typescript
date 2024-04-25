import { ChakraProvider, Input, Box, Button, Center } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { login } from './services/login';

function App() {
   return (
      <ChakraProvider>
         <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
            <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
               <Center>
                  <h1>Faça o login</h1>
               </Center>
               <Input placeholder="email" />
               <Input placeholder="password" />
               <Center>
                  <Button onClick={login} colorScheme="teal" size="sm" width="100%" margin="10px">Button</Button>
               </Center>
            </Box>
         </Box>
      </ChakraProvider>
   );
}

export default App;
