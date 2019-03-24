
var userCollection =[];
function addUser(){
    //console.log('test message');
    var name=document.getElementById('txtName');
    var email=document.querySelector('#txtEmail')
    var tbl=document.getElementById('tbl');
    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    td1.innerText=name.value;
    td2.innerText=email.value;
    var u = new User(name.value, email.value);
    userCollection.push(u);
    tr.appendChild(td1);
    tr.appendChild(td2);

    tbl.appendChild(tr);
    name.value='';email.value='';

}


//JS Constructors
/*
  a way to create a class
*/
var product1={
   Name:'vitz', Model:'abc'
};
var product2={
    pname: "coroda"
}
function User(userName,userEmail){
    this.name = userName;
    this.email = userEmail;
    this.display = function(){
        console.log('I\'m a function');
    }
}

var user1 = new User('Gedi','xyz@abc.com');
var user2 = new User("Yusuf","abc@xyz.com");
