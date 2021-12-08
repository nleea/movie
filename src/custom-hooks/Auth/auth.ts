import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import {
  api_key,
  app_auth,
  app_id,
  app_messag,
  app_project,
  app_storage,
  database_url,
} from "../../util/config";

const firebaseConfig = {
  apiKey: api_key,
  authDomain: app_auth,
  databaseURL: database_url,
  projectId: app_project,
  storageBucket: app_storage,
  messagingSenderId: app_messag,
  appId: app_id,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export const Signup = async (
  name: string,
  email: string,
  password: string,
  age: number,
  lastname: string
) => {
  const id = uuidv4();
  set(ref(database, "/users/" + id), { name, email, age, lastname });
  await createUserWithEmailAndPassword(auth, email, password);
};
