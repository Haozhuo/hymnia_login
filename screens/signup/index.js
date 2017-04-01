import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Navigator,
  TouchableHighlight
} from 'react-native'

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const mark = require("./login1_mark.png");

export default class SignupVriew extends Component {
  constructor(props){
      super(props);
      this.state = {"where":"SignUp"};
  }
  render() {
    if(this.state.where == "SignUp"){
        return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>
              <TouchableOpacity style={styles.headerBackButtonView}>
                <Image
                  source={backIcon}
                  style={styles.backButtonIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={emailIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF"
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={lockIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.whiteFont]}
                placeholder="Password"
                placeholderTextColor="#FFF"
              />
            </View>


          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Join</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}
                onPress={()=>{
                    this.setState({"where":"Login"})
                }}
                > Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
    }
    else{
        return(
            <View style={styles.container}>
              <Image source={background} style={styles.background} resizeMode="cover">
                <View style={styles.markWrap}>
                  <Image source={mark} style={styles.mark} resizeMode="contain" />
                </View>
                <View style={styles.wrapper}>
                  <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                      <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                    </View>
                    <TextInput
                      placeholder="Username"
                      placeholderTextColor="#FFF"
                      style={styles.input}
                    />
                  </View>
                  <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                      <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                    </View>
                    <TextInput
                      placeholderTextColor="#FFF"
                      placeholder="Password"
                      style={styles.input}
                      secureTextEntry
                    />
                  </View>
                  <TouchableOpacity activeOpacity={.5}>
                    <View>
                      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.5}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Sign In</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.container}>
                  <View style={styles.signupWrap}>
                    <Text style={styles.accountText}>Do not have an account?</Text>
                    <TouchableOpacity activeOpacity={.5}>
                      <View>
                        <Text style={styles.signupLinkText}
                        onPress={()=>{
                            this.setState({"where":"SignUp"})
                        }}
                        >Sign Up</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Image>
            </View>
        );
    }
  }
}

let styles = StyleSheet.create({
    mark: {
      width: null,
      height: null,
      flex: 1,
  },
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
},
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width:null,
    height:null,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
})
