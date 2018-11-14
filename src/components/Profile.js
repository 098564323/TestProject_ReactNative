import React from 'react';
import {Platform,
  StyleSheet,
  Text,
  Keyboard,
  Alert,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  Image,TouchableOpacity} from 'react-native';
import * as globalStyles from '../styles/global';

export default class Profile extends React.Component {
    static navigationOptions = {
      header: null,
    };

    constructor(props) {
      super(props);
       this.state = {
          userName: 'Raphael LNG.',
          textIntrest: 'Interests: ',
          textDescription:'Beschreibung :',
          description:'My Passion is design and meeting new people so dont hesitate to contact me',
          textContact:'Also checkout my website',
          textLink:'https://www.incudy.de',
          isUserNameEditable: true,
          isDescriptionEdiatable:true,
          height: 40,
          newValue: '',
        };
    }
    updateSize = (height) => {
   this.setState({
     height
   });
 }

    /**/
    onContentSizeChange = (contentWidth, contentHeight) => {
       // Save the content height in state
       this.setState({ screenHeight: contentHeight });
     };
     /**/
     onUserNameClick = () =>
     {
      //this.setState({ isUserNameEditable: !this.state.isUserNameEditable });
      this.setState({ isUserNameEditable: true, isDescriptionEdiatable:true});
      if(this.state.isUserNameEditable==true){
        this.userNameInput.focus();
      }
    //  console.warn(this.state.isUserNameEditable);
     }
     /**/
     onDescriptionClick = () =>
     {
       //this.setState({ isDescriptionEdiatable: !this.state.isDescriptionEdiatable });
       this.setState({ isUserNameEditable: true, isDescriptionEdiatable:true});
       this.descriptionInput.focus();
      // console.warn(this.state.isDescriptionEdiatable);
     }
     onUserNameSubmitClick = () =>
    {
     console.warn(this.state.userName);
     this.setState({ isUserNameEditable: false, isDescriptionEdiatable:false});

    }
    onSubmitDescriptionClick = () =>
    {
     console.warn(this.state.description);
     this.setState({ isUserNameEditable: false, isDescriptionEdiatable:false});
    }
    render() {

      const {newValue, height} = this.state;

    let newStyle = {
      fontSize:20,
      color:'#4a4a4a',
      marginLeft:35,
      paddingRight:30,
      textAlign:'auto',
      height:50
    }
      return (

          <ScrollView>
          <View style={globalStyles.COMMON_STYLES.background}>
          <StatusBar backgroundColor="#000000" hidden={true}/>
                <View style={styles.containerView}>
                        <View style={{flex:0.09,backgroundColor:'white',flexDirection:'row',justifyContent: 'space-between'}}>
                            <View style={{padding:15}}>
                            <TouchableOpacity>
                                <Image source={require('../images/backBtn.png')} style={styles.iconStyle}/>
                            </TouchableOpacity>
                            </View>

                            <View style={{padding:15}}>
                            <TouchableOpacity>
                                <Image source={require('../images/settingsIcon.png')} style={styles.iconStyle}/>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.imageTouchStyle}>
                            <Image source={require('../images/profilePicture.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <View style={styles.detailDataStyle}>
                            <View style={styles.titleNameStyle}>

                                <TouchableOpacity onPress = {this.onUserNameClick}>
                                    <View style={{width:undefined,flex:0.1,paddingLeft:25,paddingRight:25}}>
                                      <Image source={require('../images/editIcon.png')} style={{width:20,height:20,justifyContent:'center',alignSelf:'center',marginTop:18}}/>
                                    </View>
                                </TouchableOpacity>

                                <View style={{width:undefined,flex:0.9,paddingRight:10,backgroundColor:'white',textAlign:'center',justifyContent:'center'}}>
                                        <TextInput
                                        onSubmitEditing={this.onUserNameSubmitClick}
                                        ref={(ref)=>{this.userNameInput = ref}}
                                          style={{fontSize:32,height:60,color:'black',marginTop:1,alignItems:'center',alignSelf:'center',marginRight:50}}
                                          editable = {this.state.isUserNameEditable}

                                          //editable = {true}
                                          multiline = {false}
                                          onChangeText={(userName) => this.setState({userName})}
                                          value={this.state.userName}/>
                                </View>
                          </View>
                          <View style={styles.viewStyle}>
                              <View style={{width:undefined,flex:1,paddingLeft:10,paddingRight:10,marginRight:30}}>
                                    <View
                                        style={{
                                        borderBottomColor: '#c4c4c4',
                                        borderBottomWidth: 1,
                                        }}/>
                              </View>
                          </View>
                          <View style={styles.intrestStyle}>

                                  <TouchableOpacity onPress = { this.onDescriptionClick }>
                                      <View style={{width:undefined,flex:0.1,paddingLeft:25,paddingRight:10}}>
                                        <Image source={require('../images/editIcon.png')} style={{width:20,height:20,justifyContent:'center',alignSelf:'center',marginTop:18}}/>
                                      </View>
                                  </TouchableOpacity>

                                  <View style={{width:undefined,flex:0.9,paddingLeft:10,paddingRight:10}}>
                                          <TextInput
                                            style={{fontSize:20,height:50,color:'#4a4a4a',marginTop:2}}
                                            editable = {false}
                                            multiline = {false}
                                            onChangeText={(text) => this.setState({text})}
                                            value={this.state.textIntrest}/>
                                  </View>

                          </View>

                          <View style={styles.detailTextStyle}>


                              <View style={{width:undefined,height:50,flex:1,paddingLeft:10,paddingRight:10,marginLeft:20}}>
                                      <TextInput
                                        style={{fontSize:20,height:50,color:'#4a4a4a',marginTop:2,marginLeft:35,paddingRight:30}}
                                        editable = {false}
                                        multiline = {true}
                                        numberOfLines = {10}
                                        onChangeText={(textDescription) => this.setState({textDescription})}
                                        value={this.state.textDescription}/>
                              </View>

                          </View>

                          <View style={styles.detailTextStyle}>


                              <View style={{width:undefined,height:100,flex:1,paddingLeft:10,paddingRight:10,marginLeft:20}}>
                                      <TextInput

                                        onSubmitEditing={this.onSubmitDescriptionClick}
                                        ref={ref => {this.descriptionInput = ref}}

                                        style={{fontSize:20,height:100,color:'#4a4a4a',marginLeft:35,paddingRight:30,textAlign:'auto'}}
                                        editable = {this.state.isDescriptionEdiatable}
                                         onChangeText={(description) => this.setState({description})}
                                         value={this.state.description}
                                         multiline={true}/>

                              </View>

                          </View>

                          <View style={styles.checkoutView}>


                              <View style={{width:undefined,height:70,flex:1,paddingLeft:10,paddingRight:10,marginLeft:20}}>
                                      <TextInput
                                        style={{fontSize:20,height:70,color:'#4a4a4a',marginLeft:35,paddingRight:30,textAlign:'auto'}}
                                        editable = {false}
                                        multiline = {true}
                                        numberOfLines = {10}
                                        onChangeText={(textContact) => this.setState({textContact})}
                                        value={this.state.textContact}/>
                              </View>

                          </View>


                          <View style={styles.checkoutLinkView}>


                              <View style={{width:undefined,height:50,flex:1,paddingLeft:10,paddingRight:10,marginLeft:20}}>
                                      <TextInput
                                        style={{fontSize:20,height:50,color:'#0088ff',marginLeft:35,paddingRight:30,textAlign:'auto'}}
                                        editable = {false}
                                        multiline = {true}
                                        numberOfLines = {10}
                                        onChangeText={(textLink) => this.setState({textLink})}
                                        value={this.state.textLink}/>
                              </View>

                          </View>
                      </View>

                </View>
              </View>
            </ScrollView>

      );
    }
}

const styles = StyleSheet.create({
    containerView:{
      flex:1,
      flexDirection:'column',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight

    },
    iconStyle:{
      height:35,
      width:35
    },
    imageTouchStyle:{
      marginTop:20,
      height:240,
      width:240,
      alignSelf:'center',
    },
    imageStyle:{
      marginTop:20,
      height:220,
      width:220,
      alignSelf:'center',
    },
    detailDataStyle:{
      flex:0.45,
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      height:undefined,
      },
    titleNameStyle:{
        width:Dimensions.get('window').width,
        height:50,
        marginLeft:15,
        marginRight:15,
        flexDirection:'row',
        marginTop:10,

      },
      viewStyle:{
        width:Dimensions.get('window').width,
          height:2,
        marginLeft:15,
        marginRight:15,
        flexDirection:'row',
        marginTop:8,
      },
      intrestStyle:{
        width:Dimensions.get('window').width,
        height:50,
        marginLeft:15,
        marginRight:15,
        flexDirection:'row',
        marginTop:1,
        },
      detailTextStyle:{
          width:Dimensions.get('window').width,
          height:35,
          marginLeft:15,
          marginRight:15,
          flexDirection:'row',
      },
      checkoutView:{
        width:Dimensions.get('window').width,
        height:35,
        marginLeft:15,
        marginRight:15,
        flexDirection:'row',
        marginTop:Platform.OS === 'ios' ? 60 : 30//30
      },

      checkoutLinkView:{
        width:Dimensions.get('window').width,
        height:50,
        marginLeft:15,
        marginRight:15,
        flexDirection:'row',
        marginTop:Platform.OS === 'ios' ? -10 : 15
      }
})
