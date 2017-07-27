import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Texto extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={texto.container2}>
        <View style={[texto.div]}>
          <Text style={[texto.evento]}>{this.props.evento}, {this.props.cidade}</Text>
        </View>
      </View>
    );
  }
}

const texto = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  evento: {
    color: 'green',
  },
  div: {
    backgroundColor: 'yellow',
  },
});
