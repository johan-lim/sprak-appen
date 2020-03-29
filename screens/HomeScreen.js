import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const lesson = {
  name: 'Första lektionen engelska',
  level: 1,
  words: [
    {
      language_from: 'A robot',
      language_to: 'En robot',
      image: require('../assets/images/robot-dev.png'),
    },
    {
      language_from: 'A star',
      language_to: 'En stjärna',
      image: require('../assets/images/robot-prod.png'),
    },
    {
      language_from: 'A pen',
      language_to: 'En penna',
      image: require('../assets/images/robot-prod.png'),    }
  ]
}

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={lesson.words}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.language_from}</Text>
                      <Text note>Substantiv</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.language_to}</Text>
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