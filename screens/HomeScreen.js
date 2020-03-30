import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { mainConfig } from '../utils/config';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { currentLesson: undefined };
  }

  fetchLesson = async (langFrom, langTo, level) => {
    const response = await fetch(`${mainConfig.storage_url}/lesson_${langFrom}_${langTo}_${level}.json`);
    const currentLesson = await response.json();
    this.setState({ currentLesson });
  }

  componentDidMount() {
    this.fetchLesson('eng', 'swe', 1);
  }

  render() {
    return (
      <Container>
        <View>
          {this.state.currentLesson &&
            <DeckSwiper
            dataSource={this.state.currentLesson.words}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{item.language_from}</Text>
                      <Text note>Substantiv</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Icon name="flag" style={{ color: '#ED4A6A' }} />
                  <Text>{item.language_to}</Text>
                </CardItem>
              </Card>
            }
          />
        }
        </View>
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Glosträning',
};