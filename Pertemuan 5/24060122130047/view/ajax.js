//Fungsi untuk membuat objek XMLHttpRequest
function getXMLHTTPRequest() {
    if (window.XMLHttpRequest) {
        //Code for modern browsers
        return new XMLHttpRequest();
    } else {
        //Code for old IE browsers
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

//Fungsi untuk melakukan request ke get_server_time.php melalui ajax
function get_server_time() {
    // TODO 1: Lengkapi fungsi get_server_time()
    var xmlhttp = getXMLHTTPRequest();
    var page = "get_server_time.php";
    xmlhttp.open("GET", page, true);
    xmlhttp.onreadystatechange = function () {
        document.getElementById('showtime').innerHTML = '<img src="../images/ajax_loader.png" alt="Loading...">';
        if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
            document.getElementById('showtime').innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
}

function add_customer_get() {
    var xmlhttp = getXMLHTTPRequest();
    //get input value
    var name = encodeURI(document.getElementById('name').value);
    var address = encodeURI(document.getElementById('address').value);
    var city = encodeURI(document.getElementById('city').value);

    //validate
    if (name != "" && address != "" && city != "") {
        //set url and inner
        var url = "add_customer_get.php?name=" + name + "&address=" + address + "&city=" + city;
        //alert (url)
        var inner = "add_response";
        //open request
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function() {
            document.getElementById(inner).innerHTML = '<img src ="images/ajax_loader.png"/>';
            if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
                document.getElementById(inner).innerHTML = xmlhttp.responseText;
            }
            return false;
        }
        xmlhttp.send(null);
    } else {
        alert ("Please fill all the fields");
    }
}

function add_customer_post() {
    var xmlhttp = getXMLHTTPRequest();
    //get input value
    var name = encodeURI(document.getElementById('name').value);
    var address = encodeURI(document.getElementById('address').value);
    var city = encodeURI(document.getElementById('city').value);

    //validate
    if (name != "" && address != "" && city != "") {
        //set url and inner
        var url = "add_customer_post.php"; alert(url);
        //alert (url)
        var inner = "add_response";
        //open request
        var params = "name=" + name + "&address=" + address + "&city=" + city;
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function() {
            document.getElementById(inner).innerHTML = '<img src ="images/ajax_loader.png"/>';
            if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
                document.getElementById(inner).innerHTML = xmlhttp.responseText;
            }
            return false;
        }
        xmlhttp.send(params);
    } else {
        alert ("Please fill all the fields");
    }
}

function callAjax(url, inner) {
    // TODO 4: Lengkapilah fungsi callAjax()
    var xmlhttp = getXMLHTTPRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function () {
        console.log(xmlhttp.readyState);
        console.log(xmlhttp.status);
        document.getElementById(inner).innerHTML = '<img src="../images/ajax_loader.png" alt="Loading...">';
        if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
            document.getElementById(inner).innerHTML = xmlhttp.responseText;
        }
        return false;
    }
    xmlhttp.send(null);
}

function showCustomer(customerid) {
    // TODO 5: Lengkapilah fungsi showCustomer()
    var inner = "detail_customer";
    var url = 'get_customer.php?id=' + customerid;
    if (customerid == "") {
        document.getElementById(inner).innerHTML = "";
    } else {
        callAjax(url, inner);
    }
}