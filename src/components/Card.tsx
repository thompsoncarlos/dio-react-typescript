import { ChakraProvider, Box, Center, Input, Button } from "@chakra-ui/react"
import { login } from "../services/login"

export const Card = () => {
    return (
        <ChakraProvider>
            <Box  minHeight="100vh" backgroundColor="#9413dc" padding="25px">
                <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    <Input placeholder="email" margin="5px 0"/>
                    <Input placeholder="password" margin="5px 0"/>
                    <Center>
                        <Button onClick={login} colorScheme="teal" size='md' margin="5px 0">Button</Button>
                    </Center>
                </Box>
            </Box>
        </ChakraProvider>
    )
}