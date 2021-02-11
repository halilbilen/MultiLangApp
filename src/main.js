import React, { Component } from 'react'
import {View,Text, TextInput, TouchableOpacity} from 'react-native'
import * as actions from './redux/actions'
import { connect } from 'react-redux';
import styles from './styles'
import { getLanguages } from 'react-native-i18n';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state={
      name:"",
      email:"",
      password:""
    } 
  }

  async componentDidMount(){
    var lang = await getLanguages()
    //this.props.setLanguage(lang[0].split("-")[0])
    this.props.setLanguage("tr")
  }
  
  render() {
    const {language} =this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{language.LabelSignUp}</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={language.LabelName}
            placeholderTextColor={this.state.name===""?"gray":"black"}
            style={styles.textInput}
            value={this.state.name}
            onChange={(text)=>this.setState({name:text})}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={language.LabelEmail}
            placeholderTextColor={this.state.email===""?"gray":"black"}
            style={styles.textInput}
            value={this.state.email}
            onChange={(text)=>this.setState({email:text})}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
          placeholder={language.LabelPassword}
          placeholderTextColor={this.state.password===""?"gray":"black"}
          secureTextEntry={true}
          style={styles.textInput}
          value={this.state.password}
          onChange={(text)=>this.setState({password:text})}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>{language.ButtonSignUp}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.changeButton} onPress={()=>this.props.navigation.push("ChangeLanguageContainer")}>
          <Text>{language.ButtonChangeLanguage}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    language: state.language.language,
  }
}
export default MainContainer = connect(mapStateToProps, actions)(Main);