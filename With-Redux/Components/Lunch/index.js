import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker, Item, Form, Text } from 'native-base';

export default class Lunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.rate
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          {this.props.name}
        </Text>
        <Form style={styles.form}>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selected}
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