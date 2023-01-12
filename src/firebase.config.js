import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyALM2NA2KGNhsDAkASX84llMAjIQkBtzDY',
    authDomain: 'v2-internet-provider.firebaseapp.com',
    projectId: 'v2-internet-provider',
    storageBucket: 'v2-internet-provider.appspot.com',
    messagingSenderId: '1073939613694',
    appId: '1:1073939613694:web:ce534075d3050b3ef0e2af',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
