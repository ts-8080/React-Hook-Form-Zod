import { Box, Button, Center, ChakraProvider, Input, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      
      <Center  className="form-container">
        
        <Card minW={'md'} minH={'md'} p={10} mt={150}>
          <Text textAlign={'center'} fontSize='4xl'>Login Form</Text>
          <label htmlFor="名前">名前</label>
          <Input variant='outline' placeholder='name' />
          <label htmlFor="メールアドレス">メールアドレス</label>
          <Input variant='outline' placeholder='email' />
          <label htmlFor="パスワード">パスワード</label>
          <Input variant='filled' placeholder='password' />

          <Button mt={100} colorScheme='blue'>送信</Button>
        </Card>
      </Center>
      
    </ChakraProvider>
  );
}

export default App;
