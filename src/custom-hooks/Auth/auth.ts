import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDkXN8QygeDtt0z1ejb43luxGNByWDOGh8",
  authDomain: "firts-app-f79b4.firebaseapp.com",
  databaseURL: "https://firts-app-f79b4.firebaseio.com",
  projectId: "firts-app-f79b4",
  storageBucket: "firts-app-f79b4.appspot.com",
  messagingSenderId: "167847847713",
  appId: "1:167847847713:web:a166ec62ff208b68944060",
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
