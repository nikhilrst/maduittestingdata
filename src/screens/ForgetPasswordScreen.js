import {View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import CustomBtn from '../common/CustomBtn';

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isSecureEntry2, setIsSecureEntry2] = useState(true);
  const [userName, setUserName] = useState(null);
  const [userOldPwd, setUserOldPwd] = useState(null);
  const [userNewPwd, setUserNewPwd] = useState(null);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/12911176/pexels-photo-12911176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{alignItems: 'center', marginTop: 150}}>
          <CustomTextInput
            placeholder={'Enter User Name'}
            value={userName}
            onChangeTextValue={txt => {
              setUserName(txt);
            }}
          />
          <CustomTextInput
            value={userOldPwd}
            placeholder={'Enter Old Password'}
            isSecureTextEntry={isSecureEntry}
            rightImg={true}
            iconsShow={() => {
              setIsSecureEntry(!isSecureEntry);
            }}
            onChangeTextValue={txt => {
              setUserOldPwd(txt);
            }}
          />
          <CustomTextInput
            value={userNewPwd}
            placeholder={'Set New Password'}
            isSecureTextEntry={isSecureEntry2}
            rightImg={true}
            iconsShow={() => {
              setIsSecureEntry2(!isSecureEntry2);
            }}
            onChangeTextValue={txt => {
              setUserNewPwd(txt);
            }}
          />
          <CustomBtn
            letterSpacing={1}
            title={'Reset'}
            bgColor={'#1F63AB'}
            textColor={'#fff'}
            onPress={() => {
              console.log(userName, userOldPwd, userNewPwd);
              navigation.navigate('Splash');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgetPasswordScreen;
