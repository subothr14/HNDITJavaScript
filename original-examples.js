// python - print, php - echo, JavaScript - console.log
// console.log("Hello\nWorld")

//Data Types

// String - A-Z, a-z, 0-9, @''#$%^
// Interger or Number - 0-9
// Array or Object - [1,2,3,4, "Hi"]
// Same as Object - {1: "HI", 2:"Hello"}
// Boolean - true, false

// Variables 
var name = 'Cheems' // String
var age = 6 // Integer, Number
var height = 80.6 // Integer, Number
var hobbies = ["Barking", "Eating"] //Object , Array

var time = {
    "Barking": [11, 10, 1, 8],
    "Eating": [8, 1.30, 8]
}

var isSleep = true //1 or 0

// console.log(typeof isSleep)

//Operators 

var a = 9
var b = 10

// a++ a = a + 1 or a--  a = a - 1, a+=1, a-=1



// Boolean Operators 

var c = true
var d = false

// and operator - 1 * 1 = 1, 0 *1 = 0, 0 * 0 = 0
// or operator - 1 + 1 = 1, 0 +1 = 1, 0 + 0 = 0, 1 + 0=1
// not operator = true = false, false = true 

console.log(!(c && d || d || c))

// IF ELSE Conditions

// age = 4
if (age != 4) {
    console.log("Not Vaccine")
}
else {
    if (age >= 4) {
        console.log("Vaccine")
    }

    else {
        console.log("No")
    }
}



function Toggle() {
    var theme = "dark"

    var className = `${theme == "dark" ? "bg-[#000000] text-white" : "bg-[#ffffff] text-black"}`

    console.log(className)
}

Toggle()

function Plus(a, b) {
    if (a && b) {
        console.log(a + b)
    }
    else {
        console.log(a, b)
        console.log(`Enter Number`)
    }
}
Plus()


// API Application Programable Interface  API Fecth and Get 

const FetchData = async () => {
    var DataSets = [];
    await fetch("https://dummyjson.com/products/1")
        .then(d => d.json())
        // .then(data =>
        //     console.log(data)
        // )
        .catch((err) => console.log("Error: ", err))
}

const DataBase = FetchData()

// console.log(DataBase)

//LocalStorage
//Cookies 

// Bank Online

const Local = async() => {
    const Data = {
          name:"Cheems"
    }
    try {
        localStorage?.setItem(
            "TestHNDIT", 
            JSON.stringify(Data)
        )

        console.log("saved")
    }
    catch (err) {
        console.log("Error", err)
    }
}

Local()
