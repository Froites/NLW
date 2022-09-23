import { ImageBackground } from 'react-native';

import backgraundImage from '../../assets/background-galaxy.png';
import { styles } from './styles';

interface Props{
  children: React.ReactNode;
}

export function Background({children}: Props) {
  return (
    <ImageBackground 
      source={backgraundImage} 
      style={styles.container} 
      defaultSource={backgraundImage}
    >
      {children}
    </ImageBackground>
  );
}