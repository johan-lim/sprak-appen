import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import { Container, Header, Content, Button, Text } from 'native-base';

export default function LoginPopup() {
  return (
    <Container>
    <Header />
    <Content>
      <Button primary>
        <Text>Login</Text>
      </Button>
    </Content>
  </Container>
  );
}

LoginPopup.navigationOptions = {
  header: null,
};

