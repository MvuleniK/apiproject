import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {

  return (
    <Appbar.Header style={{marginTop:40, backgroundColor:'#b0e0e6'}}>
      
      <Appbar.Content title="Biz Connect News" />
      
    </Appbar.Header>
  );
};

export default Header;