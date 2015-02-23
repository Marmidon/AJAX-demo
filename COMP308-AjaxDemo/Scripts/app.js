/// <reference path="lib/jquery-2.1.3.js" />

var url = "Content/team.xml";

function init() {

    console.log("App Started");

    var xhr = new XMLHttpRequest();
    
    // Event Handler that loads XML data
    xhr.onreadystatechange = function () {
        console.log("Loading XML Content");
        if ((xhr.readyState == 4) && (xhr.status == 200)) {

            var xmlDoc = xhr.responseXML;
            var team = xmlDoc.getElementsByTagName("teammember");
            var html = "";

            for (var i = 0; i < team.length; i++) {
                html +=
                "<h3>" + xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + "</h3>" +
                "<p>" + xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue + "</p>" +
                "<p>" + xmlDoc.getElementsByTagName("bio")[i].childNodes[0].nodeValue + "</p>" +
                "<p>" + xmlDoc.getElementsByTagName("contact")[i].childNodes[0].nodeValue + "</p><br />";
            }
            //$("#team").text(html);
            document.getElementById("team").innerHTML = html;
        } 

        
    }

    // Load XML Data via AJAX
    xhr.open("GET", url, true);
    xhr.send();

    // Load HTML Content via jQuery
    console.log("Loading HTML Content");
    $("#content").load("content.html");
}