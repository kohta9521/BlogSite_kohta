// getDownloadURL.js
const { initializeApp } = require('firebase/app');
const { getStorage, ref, getDownloadURL } = require('firebase/storage');

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

console.log(firebaseConfig);

const storage = getStorage();
const markdownRef = ref(storage, 'Untitled-1.md'); // ここはFirebase Storageにアップロードした正確なファイルパスにする

getDownloadURL(markdownRef)
  .then((url) => {
    console.log('Markdown file download URL:', url);
    // このURLをFirestoreに保存するか、アプリケーションで直接使用する
  })
  .catch((error) => {
    console.error('Error getting download URL: ', error);
  });
