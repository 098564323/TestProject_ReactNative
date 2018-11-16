import React from 'react';
import {Platform,StyleSheet,Text,Keyboard,KeyboardAvoidingView,View,Dimensions,TextInput,ScrollView,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import * as globalStyles from '../styles/global';

export default class Profile extends React.Component {

    static navigationOptions = {
      header: null
    };

    constructor(props) {
      super(props)
      this.state = {
          editable: false,
          userName: 'Raphael LNG.',
          description: 'My passion is design and meeting new people so don\'t hesitate to contact me.'
      }
      this.toggleEditable = this.toggleEditable.bind(this)
    }

    componentWillMount(){
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',()=>{
        this.setState({
            editable:true
        })
      });

      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',()=>{
        this.setState(()=>{
          return{
            editable: false
          }
        })
      this.displayUserName();
      this.displayDescription();
      });
    }

    componentWillUnMount(){
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }

    //User Name Method
    displayUserName(){
      console.warn(this.state.userName);
    }

    //Description Method
    displayDescription(){
      console.warn(this.state.description);
    }

    //onClick Pen Icon
    toggleEditable() {
      this.setState(()=>{
        return{
          editable: true
        }
      })
    }

    render() {
      return (
          <SafeAreaView style={{flex:1,backgroundColor:globalStyles.BG_COLOR}}>
            <View style={[globalStyles.COMMON_STYLES.background,{paddingTop:Platform.OS === 'android' ? 24 : 0}]}>
                    <ScrollView>
                      {/* To Move screen Up when keyboard is open */}
                      <KeyboardAvoidingView behavior="position">
                        {/* Container View */}
                        <View style={styles.containerViewStyle}>
                          {/* ToolBar View */}
                          <View style={{justifyContent: 'space-between',padding:15,flexDirection: 'row'}}>
                            <Image source={require('../images/backBtn.png')} resizeMode="contain" style={{width:30,height:30}}/>
                            <Image source={require('../images/settingsIcon.png')} style={{marginRight:20,width:35,height:35}}/>
                          </View>
                          {/* Profile Image View */}
                          <Image source={require('../images/profilePicture.png')}
                                resizeMode="contain"
                                style={{height: 250, width: 250,alignSelf:'center'}}/>
                          {/* Profile Name View */}
                          <View style={{flexDirection: 'row',marginLeft:25,marginTop:20}}>
                           <TouchableOpacity style={{height: 30, width: 30}} onPress={this.toggleEditable}>
                                     <Image source={require('../images/editIcon.png')}
                                            resizeMode="contain"
                                            style={{height: 30, width: 30}}/>
                           </TouchableOpacity>
                           {/* Profile Name Field */}
                           <TextInput
                               ref={(ref)=>{this.userNameInput = ref}}
                               textAlign={'center'}
                               style={{width:Dimensions.get('window').width-110,height:32,fontSize:32,color:'black',alignItems:'center'}}
                               value={this.state.userName}
                               editable={this.state.editable}
                               autoFocus={this.state.editable}
                               keyboardType='default'
                               returnKeyType='done'
                               autoCapitalize='none'
                               onChangeText={(text)=>this.setState( {userName:text})}
                               autoCorrect={false}
                               underlineColorAndroid='transparent'/>
                          </View>
                          {/* Line View */}
                          <View style={{height:1,backgroundColor:globalStyles.BG_LINE_COLOR,width:Dimensions.get('window').width-55,alignSelf:'center',marginTop:20}}/>
                          {/* Description View */}
                          <View style={{flex:1,height:undefined,width:Dimensions.get('window').width}}>
                            {/* Interest Text View */}
                            <View style={{flexDirection: 'row',marginLeft:25,marginTop:20}}>
                              <TouchableOpacity style={{height: 30, width: 30}} onPress={this.toggleEditable}>
                                        <Image source={require('../images/editIcon.png')}
                                               resizeMode="contain"
                                               style={{height: 30, width: 30}}/>
                              </TouchableOpacity>
                              {/*  Interest Text */}
                              <Text style={{color:globalStyles.TEXT_COLOR,fontSize:18,marginLeft:20}}>Interest</Text>
                            </View>
                            {/* Dscription View */}
                            <View style={{width:Dimensions.get('window').width-100,marginTop:20,marginLeft:75}}>
                              {/*  Description Text */}
                              <Text style={{color:globalStyles.TEXT_COLOR,fontSize:18}}>Beschreibung:</Text>
                              {/*  Description Input Text */}
                              <TextInput
                                          value={this.state.description}
                                          multiline={true}
                                          editable={this.state.editable}
                                          autoFocus={this.state.editable}
                                          keyboardType='default'
                                          returnKeyType='done'
                                          autoCapitalize='none'
                                          numberOfLines = {3}
                                          onSubmitEditing={Keyboard.dismiss}
                                          onChangeText={(text)=>this.setState( {description:text})}
                                          style={{
                                                  color:globalStyles.TEXT_COLOR,
                                                  fontSize:18,
                                                  height:65,
                                                  width:undefined
                                                  }}/>
                              {/*  Website Text */}
                              <Text style={{color:globalStyles.TEXT_COLOR,fontSize:18,marginTop:15}}>Also Checkout my website:</Text>
                              {/*  Website Link */}
                              <Text style={{color:'#077FFF',fontSize:18}}>https://www.incudy.de</Text>
                            </View>
                          </View>
                        </View>
                      </KeyboardAvoidingView>
                    </ScrollView>
            </View>
          </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  containerViewStyle:{
    flex: 1,
    width: Dimensions.get('window').width,
    height: undefined,
    flexDirection: 'column'
  }
})
