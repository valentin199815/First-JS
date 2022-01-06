$(".login").on("click", function(){
    $(".loginBox").css("display","block");
    $(".loginBox").animate({right:"2%", top:"10%"}, "slow");
    
})
$(".close").on("click", function(){
    $(".loginBox").animate({top:"20%"}, "slow");
    $(".loginBox").animate({right:"-20%"}, "fast"); 
    $(".loginBox").hide(function(){
        $(".loginBox").hide();
    })
})
var username = $("input[type=text], input[type=password], input[type=email]");
username.on("focus", function(event){
    $(event.target).css("background-color", "gray");
})
username.on("blur", function(event){
    if($(event.target).val()=="" || $(event.target).val()==null){
        $(event.target.nextElementSibling).css("display","block");
        $(event.target).css("border", "2px solid red");
    }else{
        $(event.target).css("background-color", "white");
        $(event.target.nextElementSibling).css("display","none");
        $(event.target).css("border", "none");
    }
})
$(".register").on("click", function(){
    $(".regBox").css("display","block");
    $(".regBox").animate({right:"10%", top:"10%"}, "slow");
    $(".regBox").animate({right:"2%"}, "slow");
})
$(".close").on("click", function(){
    $(".regBox").animate({top:"20%"}, "slow");
    $(".regBox").animate({right:"-20%"}, "fast"); 
    $(".regBox").hide(function(){
        $(".regBox").hide();
    })
})
var password1 = $("input[name=passwordOrg]");
var password2 = $("input[name=passwordRep]");
password2.on("blur",function(event){
    if($(event.target).val() != password1.val()){
        $(".popup1").css("display", "block");
    }else{
        $(".popup1").css("display", "none");
        $(event.target).css("background-color", "white");
    }
})
var rock = {"Led Zeppelin":"LZ", "Queen":"QQ", "The Beatles":"TB"};
var reggae = {"Maluma":"ML", "Daddy Yankee":"DY", "Don Omar":"DO"};
var dance = {"Britney Spears":"BS", "Rihanna":"RH", "Lady Gaga":"LG"};


var select = $(".select");
var selecOpt = $(".selectOpt");
console.log(selecOpt);
select.attr("disabled","disabled");

function addoption(select, optionText, optionValue){
    var option = document.createElement("option");
    option.innerHTML = optionText;
    option.value = optionValue;
    select.append(option);
    
}
window.addEventListener("load", function(){
    for(var i=0; i<selecOpt.length;i++){
        selecOpt[i].addEventListener("change", putOptions)
    }
})
function putOptions (event){
    select.html("");
    select.removeAttr("disabled");
    choose = event.target.value;
    if(choose == "rock"){
        for(var key in rock){
            addoption(select, key, rock[key]);
        }
    }else if(choose == "reggae"){
        for(var key in reggae){
            addoption(select, key, reggae[key]);
        }
    }else if(choose == "dance"){
        for(var key in dance){
            addoption(select, key, dance[key]);
        }
    }
}
var modal = document.querySelector("#modalcontainer");
window.addEventListener('click',function(event){
    console.log(event.target);
    if(event.target == modal){
        $(".regBox").css("display","none");
    }
})

