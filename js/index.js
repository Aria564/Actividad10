  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  import { getFirestore, collection, addDoc, doc, setDoc, getDoc} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
  
import {datos} from "./elementos.js"

  const firebaseConfig = {
    apiKey: "AIzaSyDh-kSlQ8P1yQR6ivC-FmQh1TMGf85IEmo",
    authDomain: "test-1d90b.firebaseapp.com",
    projectId: "test-1d90b",
    storageBucket: "test-1d90b.firebasestorage.app",
    messagingSenderId: "667369487759",
    appId: "1:667369487759:web:5d0c91a39ecca384dc1ffa",
    measurementId: "G-NRKE8YGCDW"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  ///SETDOC
  datos.boton.addEventListener("click", async function() {
    try {
     await setDoc(doc(db, "SetDoc", datos.id.value), {
        first: datos.nombre.value,
       last: datos.apellido.value,
       born: Number(datos.fecha.value)
   });
    console.log("Document written with ID: ", datos.id.value);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
  })