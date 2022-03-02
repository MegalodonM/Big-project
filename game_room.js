function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

const firebaseConfig = {
    apiKey: "AIzaSyBSBD8qxbp1IkDZ7PnEbZhWk2Fn5i-7be0",
    authDomain: "projectx1-a8d37.firebaseapp.com",
    projectId: "projectx1-a8d37",
    storageBucket: "projectx1-a8d37.appspot.com",
    messagingSenderId: "462361702088",
    appId: "1:462361702088:web:2fc2b66fddf4fcf7773ffd"
};

firebase.initializeApp(firebaseConfig);

function goToGame1() {
    window.location = "game_page1.html";
}

function goToGame2() {
    window.location = "game_page2.html";
}

