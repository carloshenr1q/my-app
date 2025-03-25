import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, Mundo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Lista</ThemedText>
        <ThemedText>
          Estudo na <ThemedText type="defaultSemiBold">Universidade Fanor Wyden</ThemedText> no 2º semestre em Análise e Desenvolvimento de Sistema
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: '',
              web: ''
            })}
          </ThemedText>{' '}
          Sou desenvolvedor Front-End, estou aprendendo e trabalhando com React Native
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Tela de Login</ThemedText>
        <ThemedText>
          Vamos criar o método input
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <input type="submit" value="Entrar" />
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Criar usuário e senha</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> Vamor criar algoritmo tela de login
          <ThemedText type="defaultSemiBold">Usuário</ThemedText> Senha
          <ThemedText type="defaultSemiBold"> Autenticação</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">Iremos usar o FireBase do Google</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
