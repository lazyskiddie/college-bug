You can Acces the website :- https://college-bug.web.app/dashboard.html


# Project Overview: College Bug

Purpose:
A free-to-access website where students can:
- Organize and share subject-wise, chapter-wise notes.
- easy access of notes.
- Keep it simple and lightweight, supporting around 500 concurrent users.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

👍Core Features

1. User Authentication
- Handled using Firebase Authentication.
- Options like Email/Password login, Google login, etc.

3. Database for Notes
- Using Firebase Firestore to store:
- Notes content.
- Subject and chapter structure.
- User information (who created/edited content).

4. Editable Content
- Logged-in users can edit, add, or delete notes.
- Changes are reflected in real time using Firestore.

5. Frontend Stack
- HTML, CSS, JavaScript

-----------------------------------------------------------------------------------------------

🫠How the System Flows

1. User visits site → Lands on index.html.
2. Login/Register → Via Firebase Authentication.
3. Dashboard → Displays structured notes:
4. Subjects → Chapters → Notes.
6. Data Save → Saves/updates in Firestore.

-------------------------------------------------------------------------------------------------

🤖Technologies Used

- Authentication	Firebase Authentication
- Database	Firebase Firestore
- Hosting (Backend)	Firebase Functions
- Frontend	HTML, CSS, JavaScript

--------------------------------------------------------------------------------------------------

chat System
Introducing the chat system for the users. so, they can chat will all the fello met who is available on the web site till 24hrs after that the chat will be deleted from the system automatically.

--------------------------------------------------------------------------------------------------

💁Possible Next Steps (If You Haven’t Done These Yet)

- Add subject filtering and search bar for easier navigation.
- Add user roles: e.g., Admin can approve edits.
- Improve UI using Tailwind CSS or Bootstrap.
- Write proper README and documentation.
- integrating the chat system.