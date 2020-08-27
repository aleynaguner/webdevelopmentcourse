var users = [
    {email: "aleynaguner@hotmail.com", pass:"123456"},
    {email: "onurkayabasiguner@hotmail.com", pass:"aleynaaskim"}
]

var twitter = [
    {email: "aleynaguner@hotmail.com", tweet:"hayat çok acımasız"},
    {email: "aleynaguner@hotmail.com", tweet:"aranan programcı olurum bir gün elbet"},
    {email: "onurkayabasiguner@hotmail.com", pass:"Love is Günerke"}
]

var email = prompt("email ? ")
var password = prompt("password ? ")

function logIn(email, password){
    if((email == users[0].email && password == users[0].pass) || (email == users[1].email && password == users[1].pass)){
        console.log(twitter)
    }
    else{
        console.log("Başarısız")
    }
}

logIn(email, password)