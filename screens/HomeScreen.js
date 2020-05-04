import React, { Component } from 'react';
import { Container, Spinner, View, DeckSwiper, Card, CardItem, Right, Text, Left, Body, Icon } from 'native-base';
import { mainConfig } from '../utils/config';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { currentWordList: [], isLoading: false, knownWords: [] };
  }

  fetchLesson = async (langFrom, langTo, level) => {
    this.setState({ isLoading: true });
    const response = await fetch(`${mainConfig.storage_url}/lesson_${langFrom}_${langTo}_${level}_small.json?bustcache=true`);
    const currentLesson = await response.json();
    this.setState({ currentWordList: currentLesson.words, isLoading: false });
  }

  componentDidMount() {
    this.fetchLesson('eng', 'swe', 1);
  }

  shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }

  knownWord = (item) => {
    this.setState({ knownWords: [...this.state.knownWords, item], currentWordList: this.state.currentWordList.filter(word => word !== item) });
  }

  render() {
    return (
      <Container>
        <View>
          <Text>Words I know:</Text>
          {this.state.knownWords.map((item, i) => <Text key={i}>{item.language_from}</Text>)}
          {this.state.isLoading && <Spinner />}
          {this.state.currentWordList.length > 0 &&
            <DeckSwiper
            dataSource={this.shuffleArray(this.state.currentWordList)}
            onSwipeRight={(item) => this.knownWord(item)}
            looping={false}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{item.language_from}</Text>
                      <Text note>English</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text>{item.language_to}</Text>
                      <Text note>Swedish</Text>
                    </Body>
                  </Right>
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