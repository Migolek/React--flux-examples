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
                <Lunch id={'klasyk'} name="Koltet w płatkach kukurydzianych" />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'carbonara'} name="Spaghetti carbonara" />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'sezam'} name="Koltet w panierce sezamowej" />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'rosol'} name="Rosół" />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'pomidorowa'} name="Pomidorowa" />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'kurczak'} name="Kurczak z frytkami i surówką" />
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