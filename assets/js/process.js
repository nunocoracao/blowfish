if (typeof auth !== 'undefined') {
    var viewsCollection = db.collection('views');

    function numberWithCommas(x) {
        //return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    var update_views = function (oid, id) {
        viewsCollection.doc(id).onSnapshot(doc => {
            var data = doc.data();
            if (data) {
                var label = document.querySelectorAll("span[id='" + oid + "']")[0].innerText.split(' ')[1]
                document.querySelectorAll("span[id='" + oid + "']")[0].innerText = numberWithCommas(data.views) + " " + label
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
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
}