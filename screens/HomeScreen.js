import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'A robot',
    name: 'En robot',
    image: require('../assets/images/robot-dev.png'),
  },
  {
    text: 'A star',
    name: 'En stjärna',
    image: require('../assets/images/robot-prod.png'),
  }
];
export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Substantiv</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Glosträning',
};