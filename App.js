/* eslint-disable prettier/prettier */
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
      <Card
        accessable={true}
        accessibilityLabel="CONTAINER"
      >
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
          accessable={true}
          accessibilityLabel="START_SETUP"
          button
          onPress={() => alert('Whoops, not implemented yet')}>
          <Text>Set up</Text>
        </CardItem>
      </Card>
    </Container>
  );
};

export default App;
