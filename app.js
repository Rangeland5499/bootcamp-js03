

var handleClick=function (num) {
    // console.log(num)
    fetch("/page"+num+".html")
    .then(function(data){return data.text()})
    .then(function(data){
        var mainText=document.getElementById("main")
        mainText.innerHTML=data;
    })
    
}


// var handleClick=function(num) {
//     fetch("/page"+num+".html")
//     .then(function(data) {
//         return data.text()})
//         .then(function(data){
//             var mainText=document.getElementById("main")
//             mainText.innerHTML=data
            
//         })
    
// }





// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));



// var handleClick=function (num) {
//     // console.log(index)
//     fetch("/page"+num+".html")
//     .then(function(ali){return ali.text()})
//     .then(function(ali){
//         var mainText=document.getElementById("main")
//         mainText.innerHTML=ali;
//     })
    
// }



// var handleClick = function(index) {
//     fetch(("/page"+index+".html")
//     .then(function(data) {return data.text}
//     .then(function (data) {
//         var mainText=document.getElementById("main")
//         mainText.innerHTML
        
//     })
        
//     }))
    
// }

// function getData(pageId) {
//     console.log(pageId);
//     var myRequest = new Request(pageId + '.txt');
//     fetch(myRequest).then(function(response) {
//       return response.text().then(function(text) {
//         myArticle.innerHTML = text;


// var handleClick=function(num) {
//     fetch("page"+num+"html")
//     .then(function(data) {
//         return data.text}
//         .then(function(data) {
//             var mainText=document.getElementById("main")
//             mainText.innerHTML
            
//         }))
    
// }

// function loadSome(url) {
//     let main Element=document.querySelector("main");

//     fetch("url")
//     .then(response => response =response.text())
//     // .then(function (response) {return response =response.text()
//     .then(data=>mainElement.innerHTML=data)
// }

    
// })