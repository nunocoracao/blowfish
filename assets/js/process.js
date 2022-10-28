if (typeof auth !== 'undefined') {
    var viewsCollection = db.collection('views');
    var likesCollection = db.collection('likes');

    function numberWithCommas(x) {
        //return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    var update_views = function (oid, id) {
        viewsCollection.doc(id).onSnapshot(doc => {
            var data = doc.data();
            if (data) {
                var label = document.querySelectorAll("span[id='" + oid + "']")[0].innerText.split(' ')[1]
                document.querySelectorAll("span[id='" + oid + "']")[0].innerText = numberWithCommas(data.views)
            }
        })
    }

    var update_likes = function (oid, id) {
        likesCollection.doc(id).onSnapshot(doc => {
            var data = doc.data();
            if (data) {
                var label = document.querySelectorAll("span[id='" + oid + "']")[0].innerText.split(' ')[1]
                document.querySelectorAll("span[id='" + oid + "']")[0].innerText = numberWithCommas(data.likes)
            }
        })
    }


    auth.signInAnonymously()
        .then(() => {
            var views_nodes = document.querySelectorAll("span[id^='views_']")

            for (var i in views_nodes) {
                var oid = views_nodes[i].id
                var id = oid ? oid.replaceAll("/", "-") : oid
                if (id) {
                    update_views(oid, id)
                }
            }

            var likes_nodes = document.querySelectorAll("span[id^='likes_']")

            for (var i in likes_nodes) {
                var oid = likes_nodes[i].id
                var id = oid ? oid.replaceAll("/", "-") : oid
                if (id) {
                    update_likes(oid, id)
                }
            }
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
}