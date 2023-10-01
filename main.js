let btn = document.querySelector(".btn")
let input = document.querySelector(".input")
let serbas

let getData = async (url) => {
    try{
        fetch(url)
.then((data) => {return data.json()}).then((data) => {serbas= data,console.log(data)})
    }catch{

    }finally{
        btn.addEventListener("click",function(){
            console.log(input.value)
            let imgsNum = input.value
            if (imgsNum > 0 && imgsNum <=11) {
                let imgs = []
                for (let i = 0; i < imgsNum; i++) {
                    imgs[i] = document.createElement("img")
                    imgs[i].src = data.links.download
                }
                for (let i = 0; i < imgsNum; i++) {
                    document.body.append(imgs[i])
                }
            }
        })
    }
    

}


getData("https://api.unsplash.com/photos/?client_id=zaeGjV1MvXqTe0D-EWCIUE7OfOfOQjxcJ2cBRi36AoI")
