import React from 'react';
import AuthRoutes from './src/routes/AuthRoutes';
import Routes from './src/routes/Routes';

export default function AuthProvider() {
  return <>{ isSigned ? <Routes /> : <AuthRoutes /> }</>
} 