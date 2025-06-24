<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDU1ouyoXpOP0Gz_IFARGGAK0OAu0GZHlI",
    authDomain: "digskills-student-portal.firebaseapp.com",
    projectId: "digskills-student-portal",
    storageBucket: "digskills-student-portal.firebasestorage.app",
    messagingSenderId: "992494289117",
    appId: "1:992494289117:web:de1c682fb12ae9fae69b34",
    measurementId: "G-PKF5FPQN38"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>