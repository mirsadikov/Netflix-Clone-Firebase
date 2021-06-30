import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';
import config from './config';

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
