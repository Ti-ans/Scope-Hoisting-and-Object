// Scope

// Scope adalah ruang lingkup yang menentukan di mana variabel, fungsi, atau objek dapat diakses atau digunakan di dalam kode.
// Scope memiliki 2 jenis :

// 1. Global Scope : variabel yang dideklarasikan di luar fungsi, yang dapat diakses di seluruh program di mana pun.
// Contoh : 
var globalVar = "Global Scope";
function showVar() {
    console.log(globalVar); 
}
showVar();  

// 2. Local scope : variabel yang dideklarasikan di dalam fungsi hanya bisa diakses dari dalam fungsi itu saja.
// Contoh : 
function showVar() {
    var localVar = "Local Scope";
    console.log(localVar);  
}
showVar();  
// console.log(localVar);  


// Hoisting

// Hoisting : perilaku di mana deklarasi variabel dan fungsi dipindahkan ke atas ruang lingkup mereka sebelum eksekusi kode.
// Hoisting pada fungsi dibagi menjadi 2 :

// 1. Fungsi deklarasi
// konsep yang memungkinkan Anda untuk menggunakan fungsi sebelum mendeklarasikannya dalam kode. 
// Hoisting pada fungsi deklarasi akan di hoisting sempurna, sehingga dapat dipanggil sebelum deklarasi.
// Contoh :
greet("Tian"); 
function greet(name) {
    console.log("Hello, " + name + "!");
};

// 2. Fungsi Ekspresi 
// konsep yang memungkinkan Anda untuk menggunakan fungsi sebelum mendeklarasikannya dalam kode. Namun, nilai fungsi belum diassign pada variabel tersebut, sehingga greet adalah undefined. Akibatnya, Anda mendapatkan kesalahan TypeError.
// Hoisting pada fungsi ekspresi tidak akan di hoisting sempurna.
// Contoh :
console.log(greet()); 
var greet = function() {
    console.log("Hello!");
}
greet(); 


// Object 

// Object adalah kumpulan properti, di mana setiap properti memiliki nama (atau kunci) dan nilai.
// Pembuatan object dibagi menjadi 3 cara :

// 1. Menggunakan Notasi Objek Literal 
// Contoh :
const User = {
    name: "Tian",
    age: 19,
    isStudent: true
};
console.log(User)

// 2. Menggunakan Constructor Function 
// Contoh : 
function User2(name, age) {
    this.name = name;
    this.age = age;
}
const user2 = new User2("Tian", 19);
console.log(user2)

// 3. Menggunakan class
// Contoh :
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user3 = new User3("Tian", 19);
console.log(user3) 

// Mengakses Properti Object

// Mengakses properti object menggunakan 2 cara :

// 1. Notasi Titik
// Contoh : 
console.log(User.name);

// 2. Notasi Bracket
// Contoh :
console.log(User["age"]);

// Menambah dan Mengubah Properti
// Contoh :
User.email = "tian@example.com";
User.age = 20; 
console.log(User)

// Menghapus Properti
// Contoh :
delete User.isStudent;
console.log(User)
