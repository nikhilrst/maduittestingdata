import React, {createContext, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../Config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});

  const loginToken = async () => {
    try {
      const resp = await axios.post(`${BASE_URL}/TokenLogin`, {
        username: 'mAudit',
        password: 'Nimda@123',
      });
      let userDetails = resp.data;
      console.log('Access Token :', userDetails);
      setUserInfo(userDetails);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider value={{loginToken}}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
