import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker, Item, Form, Text } from 'native-base';

export default class Lunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }
  
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          {this.props.name}
        </Text>
        <Form>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            style={styles.picker}
          >
            <Item label="*" value="key0" />
            <Item label="**" value="key1" />
            <Item label="***" value="key2" />
            <Item label="****" value="key3" />
            <Item label="*****" value="key4" />
          </Picker>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    backgroundColor: 'green',
    flex: 1,
  },
  picker: {
    backgroundColor: 'red',
    flex: 1,
  }
});