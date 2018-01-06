import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import Lunch from '../Lunch';

export default class MainView extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Oceny obiadów</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Lunch name="Koltet w płatkach kukurydzianych" rate="5"/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch name="Spaghetti carbonara" rate="3"/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch name="Koltet w panierce sezamowej" rate="4"/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch name="Rosół" rate="5"/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch name="Pomidorowa" rate="2"/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch name="Kurczak z frytkami i surówką" rate="4"/>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}