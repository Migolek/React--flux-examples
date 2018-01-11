import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import Lunch from '../Lunch';
import { observer } from 'mobx-react';

@observer
export default class MainView extends Component {
  render() {
    const { store } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{store.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Lunch id={'klasyk'} name="Koltet w płatkach kukurydzianych" {...this.props}/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'carbonara'} name="Spaghetti carbonara" {...this.props}/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'sezam'} name="Koltet w panierce sezamowej" {...this.props}/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'rosol'} name="Rosół" {...this.props}/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'pomidorowa'} name="Pomidorowa" {...this.props}/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'kurczak'} name="Kurczak z frytkami i surówką" {...this.props}/>
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