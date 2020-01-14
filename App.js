/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {Container, Card, CardItem, Text, Body} from 'native-base';

const App: () => React$Node = () => {
  return (
    <Container>
      <Card>
        <CardItem header>
          <Text>Greetings</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              Seems like you have not set up your routine just yet. Let’s do it
              now!
            </Text>
          </Body>
        </CardItem>
        <CardItem
          footer
          button
          onPress={() => alert('Whoops, not implemented yet')}>
          <Text>Set up</Text>
        </CardItem>
      </Card>
    </Container>
  );
};

export default App;
