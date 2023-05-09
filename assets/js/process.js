if (typeof auth !== 'undefined') {
    var viewsCollection = db.collection('views');
    var likesCollection = db.collection('likes');

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    var update_views = function (node, id) {
        viewsCollection.doc(id).onSnapshot(doc => {
            var data = doc.data();
            if (data) {
                node.innerText = numberWithCommas(data.views)
            }
        })
    }

    var update_likes = function (node, id) {
        likesCollection.doc(id).onSnapshot(doc => {
            var data = doc.data();
            if (data) {
                node.innerText = numberWithCommas(data.likes)
            }
        })
    }


    auth.signInAnonymously()
        .then(() => {
            var views_nodes = document.querySelectorAll("span[id^='views_']")

            for (var i in views_nodes) {
                var node = views_nodes[i]
                var id = node.id ? node.id.replaceAll("/", "-") : node.id
                if (id) {
                    update_views(node, id)
                }
            }

            var likes_nodes = document.querySelectorAll("span[id^='likes_']")

            for (var i in likes_nodes) {
                var node = likes_nodes[i]
                var id = node.id ? node.id.replaceAll("/", "-") : node.id
                if (id) {
                    update_likes(node, id)
                }
            }
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
}