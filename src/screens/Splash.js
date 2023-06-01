/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CustomBtn from '../common/CustomBtn';
import Heading from '../common/Heading';
import {AuthContext} from '../context/AuthProvider';

const Splash = () => {
  const [userName, setUserName] = useState(null);
  const [userPwd, setUserPwd] = useState(null);

  const {loginToken} = useContext(AuthContext);

  const navigation = useNavigation();

  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const opacity = new Animated.Value(0);

  useEffect(() => {
    loginToken();
    Animated.timing(opacity, {
      useNativeDriver: true,
      toValue: 1,
      // duration: 4000,
      delay: 2000,
    }).start();
  }, []);

  const onPressLogin = () => {
    return console.log(userName, userPwd);
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/12911176/pexels-photo-12911176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Heading />
        <Animated.View
          style={{
            alignItems: 'center',
            marginTop: 50,
            opacity,
          }}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: '#F8F8FF'}}>
            Login
          </Text>
          <CustomTextInput
            placeholder={'User Name'}
            value={userName}
            onChangeTextValue={txt => {
              setUserName(txt);
            }}
          />
          <CustomTextInput
            value={userPwd}
            placeholder={'Password'}
            isSecureTextEntry={isSecureEntry}
            iconName={'eye-outline'}
            iconsShow={() => {
              setIsSecureEntry(!isSecureEntry);
            }}
            rightImg={true}
            onChangeTextValue={txt => {
              setUserPwd(txt);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}
            style={{alignSelf: 'flex-end', marginTop: 20, marginRight: 35}}>
            <Text
              style={{
                fontSize: 20,
                color: 'blue',
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                letterSpacing: 1.5,
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
          <CustomBtn
            letterSpacing={1}
            textColor={'#ffff'}
            bgColor={'#1F63AB'}
            title={'Login'}
            onPress={() => {
              onPressLogin();
              // navigation.navigate('ClientSelectionScreen');
            }}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
