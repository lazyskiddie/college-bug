const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const authMessage = document.getElementById("auth-message");

// Auth: Signup
function signup() {
  firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then((userCredential) => {
      authMessage.innerText = `Welcome, ${userCredential.user.email}`;
      setTimeout(() => window.location.href = "dashboard.html", 1000);
    })
    .catch((error) => {
      authMessage.innerText = error.message;
    });
}

// Auth: Login
function login() {
  firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then((userCredential) => {
      authMessage.innerText = `Logged in as ${userCredential.user.email}`;
      setTimeout(() => window.location.href = "dashboard.html", 1000);
    })
    .catch((error) => {
      authMessage.innerText = error.message;
    });
}

// Dashboard Logic
firebase.auth().onAuthStateChanged((user) => {
  if (window.location.pathname.includes("dashboard.html")) {
    if (!user) window.location.href = "index.html";
    else loadNotes(user.uid);
  }
});

function submitNote() {
  const subject = document.getElementById("subject").value;
  const chapter = document.getElementById("chapter").value;
  const content = document.getElementById("note-content").value;

  if (!subject || !chapter || !content) {
    alert("Please fill all fields");
    return;
  }

  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  db.collection("notes").add({
    userId: user.uid,
    subject: subject,
    chapter: chapter,
    content: content,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    loadNotes(user.uid);
    document.getElementById("note-content").value = "";
  });
}

function loadNotes(uid) {
  const db = firebase.firestore();
  const notesList = document.getElementById("notes-list");
  if (!notesList) return;

  db.collection("notes").where("userId", "==", uid).orderBy("timestamp", "desc")
    .get()
    .then(snapshot => {
      notesList.innerHTML = "";
      snapshot.forEach(doc => {
        const note = doc.data();
        notesList.innerHTML += `
          <div class="note">
            <h3>${note.subject} - ${note.chapter}</h3>
            <p>${note.content}</p>
          </div>
        `;
      });
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "index.html";
  });
}
