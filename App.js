import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import Menu from './Menu.js';
import Request from './request.js';
import Texto from './texto.js';

export default class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        data: []
      }
      this.getEvento = this.getEvento.bind(this);
  }

  componentDidMount() {
    Request.getInfo()
    .then((res) => {
      this.setState({ data: res.data })
    })
    .catch((err) => {
      console.log(err.data);
    });
  }

  getEvento(item, i) {
    return (
      <Texto
        key={i}
        evento={item.evento}
        cidade={item.cidade}
      />

    )
  }


  render() {
    return (
      <View style={styles.container}>
        <Menu></Menu>
        <View style={[styles.div]}>
          <Text style={[styles.colorwhite]}>Teste de aplicativo da uhuu</Text>
          <Text>Aqui ficarão as informações</Text>
          <Text style={[styles.testecss]}>E aqui ficarão os Eventos</Text>
          <View>{this.state.data.map(this.getEvento)}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  testecss: {
    color: 'red',
  },
  colorwhite: {
    color: 'white',
  },
  div: {
    backgroundColor: 'white',
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
