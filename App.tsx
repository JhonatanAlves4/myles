import React from 'react';
import AuthProvider from './AuthWrapper';
import { UserProvider } from './src/context/UserContext';

export default function App() {
  return <UserProvider> <AuthProvider /> </UserProvider>
} 