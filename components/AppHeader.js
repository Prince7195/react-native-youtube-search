import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = () => (
        <Header
            centerComponent={{ text: 'Youtube Search', style: { color: 'white' } }}
            outerContainerStyles={{ backgroundColor: '#e62117' }}
        />
    );

export default AppHeader;
