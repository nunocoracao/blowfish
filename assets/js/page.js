const pageScriptElement = document.currentScript;
const oid =
  pageScriptElement && pageScriptElement.getAttribute("data-oid")
    ? pageScriptElement.getAttribute("data-oid")
    : (console.error("data-oid is null"), null);
const oid_likes =
  pageScriptElement && pageScriptElement.getAttribute("data-oid-likes")
    ? pageScriptElement.getAttribute("data-oid-likes")
    : (console.error("data-oid-likes is null"), null);
const liked_page = false;
const id = oid ? oid.replaceAll("/", "-") : oid;
const id_likes = oid_likes ? oid_likes.replaceAll("/", "-") : oid_likes;

if (typeof auth !== "undefined") {
  const viewed = localStorage.getItem(id);

  if (!viewed) {
    auth
      .signInAnonymously()
      .then(() => {
        const docRef = db.collection("views").doc(id);
        localStorage.setItem(id, true);
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              db.collection("views")
                .doc(id)
                .update({
                  views: firebase.firestore.FieldValue.increment(1),
                });
            } else {
              db.collection("views").doc(id).set({ views: 1 });
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }

  const liked = localStorage.getItem(id_likes);

  if (liked) {
    liked_page = true;
    document.querySelectorAll("span[id='button_likes_heart']")[0].style.display = "";
    document.querySelectorAll("span[id='button_likes_emtpty_heart']")[0].style.display = "none";
    document.querySelectorAll("span[id='button_likes_text']")[0].innerText = "";
  }
}

function like_article(id_likes) {
  auth
    .signInAnonymously()
    .then(() => {
      const docRef = db.collection("likes").doc(id_likes);
      docRef
        .get()
        .then((doc) => {
          liked_page = true;
          localStorage.setItem(id_likes, true);
          document.querySelectorAll("span[id='button_likes_heart']")[0].style.display = "";
          document.querySelectorAll("span[id='button_likes_emtpty_heart']")[0].style.display = "none";
          document.querySelectorAll("span[id='button_likes_text']")[0].innerText = "";
          if (doc.exists) {
            db.collection("likes")
              .doc(id_likes)
              .update({
                likes: firebase.firestore.FieldValue.increment(1),
              });
          } else {
            db.collection("likes").doc(id_likes).set({ likes: 1 });
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

function remove_like_article(id_likes) {
  auth
    .signInAnonymously()
    .then(() => {
      const docRef = db.collection("likes").doc(id_likes);
      docRef
        .get()
        .then((doc) => {
          liked_page = false;
          localStorage.removeItem(id_likes);
          document.querySelectorAll("span[id='button_likes_heart']")[0].style.display = "none";
          document.querySelectorAll("span[id='button_likes_emtpty_heart']")[0].style.display = "";
          document.querySelectorAll("span[id='button_likes_text']")[0].innerText = "\xa0Like";
          if (doc.exists) {
            db.collection("likes")
              .doc(id_likes)
              .update({
                likes: firebase.firestore.FieldValue.increment(-1),
              });
          } else {
            db.collection("likes").doc(id_likes).set({ likes: 0 });
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

function process_article() {
  if (!liked_page) {
    like_article(id_likes);
  } else {
    remove_like_article(id_likes);
  }
}
