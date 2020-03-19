import * as Font from 'expo-font';
import { Database } from "./db";


export async function bootstrap() {
  try {
    await Font.loadAsync({
      'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    await Database.init();
    console.log('Database started...')
  } catch (e) {
    console.log(e);
  }
}