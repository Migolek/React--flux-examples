import React, { Component, PropTypes  } from 'react';
import _ from 'lodash';
import { StyleSheet, View, SectionList } from 'react-native';
import { Picker, Item, Form, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lunchActions from '../../Reducers/Lunch/lunchActions.js';

class Lunch extends React.Component {

  onValueChange(value) {
    const { id, actions } = this.props;
    const { setLunchRate } = actions;
    setLunchRate(id, value);
  };

  render() {
    const { id, rate } = this.props;
    console.log(id,_.get(rate, id));
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          {this.props.name}
        </Text>
        <Form style={styles.form}>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={_.get(rate, id)}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Item label="*" value="1" />
            <Item label="**" value="2" />
            <Item label="***" value="3" />
            <Item label="****" value="4" />
            <Item label="*****" value="5" />
          </Picker>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    flex: 1,
    width: '100%',
  },
  form: {
    width: 100,
  }
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Lunch);