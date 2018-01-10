import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import Lunch from '../Lunch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lunchActions from '../../Reducers/Lunch/lunchActions.js';

class MainView extends Component {
  render() {
    const { id, rate } = this.props;
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
                <Lunch id={'klasyk'} name="Koltet w płatkach kukurydzianych" {...this.props} />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'carbonara'} name="Spaghetti carbonara" {...this.props} />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'sezam'} name="Koltet w panierce sezamowej" {...this.props} />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'rosol'} name="Rosół" {...this.props} />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'pomidorowa'} name="Pomidorowa" {...this.props} />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Lunch id={'kurczak'} name="Kurczak z frytkami i surówką" {...this.props} />
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

const mapStateToProps = (state) => {
  return { 
    rate: state.lunch.rate
 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(lunchActions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);