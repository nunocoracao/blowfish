var liked_page = false

if (typeof auth !== 'undefined') {
    var id = oid ? oid.replaceAll("/", "-") : oid
    var viewed = localStorage.getItem(id);

    if (!viewed) {
        auth.signInAnonymously()
            .then(() => {
                var docRef = db.collection('views').doc(id)
                localStorage.setItem(id, true);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        db.collection('views').doc(id).update({
                            views: firebase.firestore.FieldValue.increment(1)
                        });
                    } else {
                        db.collection('views').doc(id).set({ views: 1 })
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });
    }

    var id_likes = oid_likes ? oid_likes.replaceAll("/", "-") : oid_likes
    var liked = localStorage.getItem(id_likes);

    if (liked) {
        liked_page = true
        document.querySelectorAll("span[id='likes_button_heart']")[0].style.display = ""
        document.querySelectorAll("span[id='likes_button_emtpty_heart']")[0].style.display = "none"
        document.querySelectorAll("span[id='likes_button_text']")[0].innerText = ""
    }

}

function like_article(id_likes) {
    auth.signInAnonymously()
        .then(() => {
            var docRef = db.collection('likes').doc(id_likes)
            docRef.get().then((doc) => {
                liked_page = true
                localStorage.setItem(id_likes, true);
                document.querySelectorAll("span[id='likes_button_heart']")[0].style.display = ""
                document.querySelectorAll("span[id='likes_button_emtpty_heart']")[0].style.display = "none"
                document.querySelectorAll("span[id='likes_button_text']")[0].innerText = ""
                if (doc.exists) {
                    db.collection('likes').doc(id_likes).update({
                        likes: firebase.firestore.FieldValue.increment(1)
                    });
                } else {
                    db.collection('likes').doc(id_likes).set({ likes: 1 })
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
}

function remove_like_article(id_likes) {
    auth.signInAnonymously()
        .then(() => {
            var docRef = db.collection('likes').doc(id_likes)
            docRef.get().then((doc) => {
                liked_page = false
                localStorage.removeItem(id_likes);
                document.querySelectorAll("span[id='likes_button_heart']")[0].style.display = "none"
                document.querySelectorAll("span[id='likes_button_emtpty_heart']")[0].style.display = ""
                document.querySelectorAll("span[id='likes_button_text']")[0].innerText = "\xa0Like"
                if (doc.exists) {
                    db.collection('likes').doc(id_likes).update({
                        likes: firebase.firestore.FieldValue.increment(-1)
                    });
                } else {
                    db.collection('likes').doc(id_likes).set({ likes: 0 })
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
}

function process_article() {
    var id_likes = oid_likes ? oid_likes.replaceAll("/", "-") : oid_likes
    if (!liked_page) {
        like_article(id_likes)
    } else {
        remove_like_article(id_likes)
    }
}