const container = document.getElementById("time")
const heading = document.getElementById("no_name")
const div = document.querySelector("#imag")

setInterval(()=> container.innerHTML= new Date().toUTCString(),1000)

let person = {
    name: "suraj", age: "24", address: "warangal",
    nomal_function : function(){
        console.log(this)
        console.log(this.name)
    },
    arrow_function: function(){
        ()=>{
        console.log(this)
        console.log(this.name)
    }}
}

let person_1 = {
    name: "suraj",
    age: "24",
    address: "warangal",
    mail: "garga@gmail.com",
    degree: "Masters"
}
const {name:data,data_1, ...other} = person_1

function set_color(Color,delay,change_color){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                heading.style.color = Color
            )
            reject("Error: error applying the style")
        },delay)
    })
    // setTimeout(()=>{
    //     heading.style.color = Color
    //     if(change_color) {change_color();console.log("color changed")}
    //     else{console.log("there is an error")}
    // },delay)
}
// -----> CALL BACK HELL
// set_color("green",1000,()=>{
//     set_color("blue",1000)
// })
// -------> PROMISE
set_color()
.then(()=>{console.log("Color: blue"); return set_color("blue",1000)})
.then(()=>{console.log("Color: green"); return set_color("green",1000)})
.then(()=> {console.log("Color: yellow"); return set_color("yellow",1000)})
.then(()=>(set_color("pink",1000)))
.catch((error)=>console.error(error))

// -------------ETA TIME : SAVE FILE IN DATA IN DATA BASE -----------------------

/*
1. ------CALL BACK HELL------------
function save_data(file){
    return new Promise((res,rej)=>{
        let internetSpeed = Math.ceil(Math.random()*4)
        if(internetSpeed>2){res(`success: ETA is 2 mins to save ${file}`)}
        else if(internetSpeed>4){res(`success: ETA is 2 mins to save ${file}`)}
        else {rej("error while saving the file")}
    })
}
save_data("File-1",(ele)=>{
    console.log()
    save_data("File-2",(ele)=>{
        console.log(`success: ETA is 2 mins to save ${ele}`)
        save_data("File-3",(ele)=>{
            console.log(`success: ETA is 2 mins to save ${ele}`)
        },(ele)=>{
            console.log(`success: ETA is 1 mins to save ${ele}`)
        })
    },(ele)=>{
        console.log(`success: ETA is 1 mins to save ${ele}`)
    })
},(ele)=>{
    console.log(`success: ETA is 1 mins to save ${ele}`)
})
*/
/*
2. ---------------PROMISE---------------
function save_data(file){
    return new Promise((res,rej)=>{
        let internetSpeed = Math.ceil(Math.random()*3)
        if(internetSpeed<2){res(`success: ETA is 2 mins to save ${file}`)}
        else if(internetSpeed<3){res(`success: ETA is 1 mins to save ${file}`)}
        else {rej("Error while saving the file, Due to low internet connectivity")}
    })
}
let promise_object = save_data("file-1")
promise_object.
then((mess)=>{console.log(mess); return save_data("FILE-2")})
.then((message_2)=>{console.log(message_2); return save_data(("FILE-3"))})
.then((message_3)=> console.log(message_3))
.catch((error)=>{console.error(error)})
*/
/*
3. -------- ASYNC & AWAIT ------------------------
 */

function save_data(file){
    return new Promise((res,rej)=>{
        let internetSpeed = Math.ceil(Math.random()*8)
        console.log(internetSpeed)
        if(internetSpeed>=2){res(`success: ETA is 2 mins to save ${file}`)}
        else if(internetSpeed>=3){res(`success: ETA is 1 mins to save ${file}`)}
        else {rej("Error while saving the file, Due to low internet connectivity")}
    })
}
async function async_function(){
    try{
        await save_data("FILE_1!")
        console.log("FILE_1 saved successfully")
        await save_data("FILE_2!")
        console.log("FILE_2 saved successfully")
        await save_data("FILE_3!")
        console.log("FILE_3 saved successfully")
        await save_data("FILE_4!")
        console.log("FILE_4 saved successfully")
        await save_data("FILE_5!")
        console.log("FILE_5 saved successfully")
        await save_data("FILE_6!")
        console.log("FILE_6 saved successfully")
    }
    catch{
        console.error("Error while saving the file, Due to low internet connectivity")
    }
    console.log("Hello")
}
async_function()


