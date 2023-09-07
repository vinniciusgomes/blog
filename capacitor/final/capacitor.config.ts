import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vinniciusgomes.capacitor',
  appName: 'Capacitor POC',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
