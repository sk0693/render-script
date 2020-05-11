(function (params) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("image_name").innerHTML += xhttp.responseText;

            var img = document.createElement('img');
            img.src = xhttp.responseText;
            // img.width = '200';
            // let parent_node = document.currentScript.parentNode
            // parent_node.appendChild(img);
            var current_script = (function () {
                var scripts = document.getElementsByTagName('script');
                return scripts[scripts.length - 1];
            })();

            var parent_div = current_script.parentNode;

            parent_div.insertBefore(img, parent_div.lastChild);

            // setInterval(() => console.log(current_script.src, current_script.parentNode), 2000);
        }
    };
    xhttp.open("GET", '/getImage', true);
    xhttp.send();
})()