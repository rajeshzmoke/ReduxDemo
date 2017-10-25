
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { fetchPeopleFromAPI } from './actions/actions';

class App extends Component {
 let { people, isFetching } = props.people;
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}> Redux App </Text>
        <TouchableHighlight onPress={props.getPeople} style={styles.button}>
          <Text style={styles.buttonText}> Fetch data </Text>
        </TouchableHighlight>
        {
          isFetching && <Text>Loading</Text>
        }
        {
        people.length ? (
          people.map((person, i) => {
            return <View key={i} >
                    <Text>Name: {person.name}</Text>
                    <Text>Birth Year: {person.birth_year}</Text>
                  </View>
          })
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 100,
      paddingLeft: 20,
      paddingRight: 20
    },
    text: {
      textAlign: 'center'
    },
    button: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0b7eff'
    },
    buttonText: {
      color: 'white'
    }
})
function mapStateToProps(state){
  return{
    people: state.people
  }
}
function mapDispatchToProps(dispatch){
  return{
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
