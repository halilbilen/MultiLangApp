import React, { Component } from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import * as actions from './redux/actions'
import { connect } from 'react-redux';
import styles from './styles'

class ChangeLanguage extends Component {
  constructor(props) {
    super(props)
    this.state={

    } 
  }
  
  render() {
    const {language} =this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.langButton} onPress={()=>this.props.setLanguage("tr")}>
          <Text>{language.ButtonTR}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.langButton}  onPress={()=>this.props.setLanguage("en")}>
          <Text>{language.ButtonEN}</Text>
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
export default ChangeLanguageContainer = connect(mapStateToProps, actions)(ChangeLanguage);