import React, { Component, PropTypes  } from 'react';
import _ from 'lodash';
import { StyleSheet, View, SectionList } from 'react-native';
import { Picker, Item, Form, Text } from 'native-base';

export default class Lunch extends React.Component {

  onValueChange(value) {
    const { id, rate } = this.props;
    const { setLunchRate } = this.props.actions;
    setLunchRate(id, value);
    //this.forceUpdate();
  };
  
  render() {
    const { id, rate } = this.props;
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

