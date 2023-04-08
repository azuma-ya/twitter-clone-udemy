import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyApY2XXp01cCppa0EmysMhyOtKGpfIRVHk",
	authDomain: "twitter-clone-udemy-6fc79.firebaseapp.com",
	projectId: "twitter-clone-udemy-6fc79",
	storageBucket: "twitter-clone-udemy-6fc79.appspot.com",
	messagingSenderId: "525897371731",
	appId: "1:525897371731:web:c2e7e0d6adbb1d189e36a6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
