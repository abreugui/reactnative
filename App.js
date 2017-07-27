import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Menu from './Menu.js';
import Request from './request.js';

export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: []
      }
      this.getEvento = this.getEvento.bind(this);
      this.getCidade = this.getCidade.bind(this);
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
  getEvento(item) {
    return item.evento;
  }
  getCidade(item) {
    return item.cidade;
  }

  render() {
    return (
      <View style={styles.container}>
        <Menu></Menu>
        <View style={[styles.div]}>
          <Text style={[styles.colorwhite]}>Teste de aplicativo da uhuu</Text>
          <Text>Aqui ficarão as informações</Text>
          <Text style={[styles.testecss]}>E aqui ficarão os Eventos</Text>
          <Text>{this.state.data.map(this.getEvento)}</Text>
          <Text>{this.state.data.map(this.getCidade)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
