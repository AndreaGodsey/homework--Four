import { changePageContent } from "../model/model.js";

 


function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePageContent(pageID);
    // console.log(hashTag + " " + pageID);

    if(pageID != ""){
    $.get(`pages/${pageID}/${pageID}.html`, function(data){
        console.log("data" + data);
        $("#app").html(data);
    });
} else{
    $.get(`pages/home/home.html`, function(data){
        console.log("data" + data);
        $("#app").html(data);
    });
}
}

function initURLListeners(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

// Making Variable Appear
let createSubmit = "#createsubmit";

// listens for the submit button
$(document).on("click", createSubmit, function(e) {
    e.preventDefault();
    let firstName = $("#fName").val();
    let middleName = $("#mName").val();
    let lastName = $("#lName").val();
    let dateofbirth = $("#dateofbirth").val();
    let placeofbirth = $("#placeofbirth").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let address = $("#address").val();
    let hometown = $("#hometown").val();
    let state = $("#state").val();
    let username = $("#username").val();
    let password = $("#password").val();
    console.log("inputs " + firstName + " " + middleName + " " + lastName + " " + dateofbirth + " " + placeofbirth + " " + email + " " + phone + " " + address + " " + hometown + " " + state + " " + username + " " + password);
})

let edit = "#edit";

$(document).on("click", edit, function(e) {
    e.preventDefault();

    let userObj = {
        fName: "Andrea",
        mName: "Charlene",
        lName: "Godsey",
        dateofbirth: "04/05/2003",
        placeofbirth: "North Carolina",
        email: "andreagodsey@email.com",
        phone: "123-456-7890",
        address: "123 Wall Street",
        hometown: "Homeville",
        state: "Indiana",
        username: "catdog1234",
        password: "catdoggo1234",
    };

    console.log(userObj);
    $("#fName").val(userObj.fName);
    $("#mName").val(userObj.mName);
    $("#lName").val(userObj.lName);
    $("#dateofbirth").val(userObj.dateofbirth);
    $("#placeofbirth").val(userObj.placeofbirth);
    $("#email").val(userObj.email);
    $("#phone").val(userObj.phone);
    $("#address").val(userObj.address);
    $("#hometown").val(userObj.hometown);
    $("#state").val(userObj.state);
    $("#username").val(userObj.username);
    $("#password").val(userObj.password);
    // console.log("inputs " + firstName + ' ' + lastName);
});


$(document).ready(function (){
    initURLListeners();
})