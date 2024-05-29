

const text_input =  document.getElementById("input")
const button = document.getElementById("button")
const list =  document.getElementById("shopping_list")
const heading = document.getElementById("no_name")

button.addEventListener("click",()=>{
    const new_list = document.createElement("li")
    const text_node = document.createTextNode(text_input.value)
    new_list.append(text_node)
    list.append(new_list)
    new_list.style.marginTop = "10px"

    const new_button = document.createElement("button")
    new_button.setAttribute("id","M_M")
    new_button.textContent = "delete"
    document.body.append(new_button)
    new_list.append(new_button)
    new_button.style.cursor = "pointer"
    new_button.style.marginLeft = "20px"
    new_button.style.boxShadow = "0px 5px 12px rgba(0,0,0,0.3)"
    new_button.style.width = "70px"
    new_button.style.border = "none"

    new_button.addEventListener("click",()=>{
        new_button.remove()
        new_list.style.display = "none"
    })
})

const div = document.getElementById("image")

div.setAttribute("id","new_image")
console.log(div.getAttribute("id"))

// call back function
let arr = [2,3,4,5,6,2,3,4,5]

function sqrt(num, func){
    for(const i of num){
        func(i*i)
    }
}

function print(ele){
    console.log(ele)
}
sqrt(arr,print)

// call back hell
function change_color(color,delay,set_color){
    setTimeout(()=>{
        heading.style.color = color
        if(set_color){set_color()}
    },delay)
}

change_color("green",1000,()=>{
    change_color("blue",1000,()=>{
        change_color("pink",1000,()=>{
            change_color("yellow",1000)
        })
    })
})

// example-2
function save_data(time_1,time_2){
    /* Its saves data based on my internet
    1. if>2 = 2mins
    2. >4 = 1 min
     */
    let internetSpeed = Math.ceil(Math.random)*4
    if(internetSpeed>2){time_1()}
    else if(internetSpeed>4){time_2()}
}
save_data(()=>{
    console.log("success: ETA is 2 mins")
},()=>{
    console.log("success: ETA is 1 mins")
})



