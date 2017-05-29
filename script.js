$(document).ready(function(){
  const tableContainer = $('table');
  for (var i=0; i<=29; i++){
    let newRow = $(`<tr class='rows row${i+1}'></tr>`);
    tableContainer.append(newRow);
    for (var j=0; j<=29; j++){
      let newCol = $("<td class='cols'></tr>");
      newRow.append(newCol);
    }
  }
 function startGame(e){ 
  let elem = e.target;
  changeColor(elem);
  let nextElem = nextDiv(elem);
  (function loop(i){
    setTimeout(function(){
      changeColor(nextElem);
      removeColor(elem);
      elem = nextElem;
      nextElem = nextDiv(elem);

      if (--i){
        loop(i);
      }
    }, 300);
  })(20);
}

 // function nextDiv(elem){
 //   let elemId = Number(elem.id) + 1;
 //   let nextElem = $("#" + elemId)[0];
 //   return nextElem;
 // }
  

// const container= $('body');

// container.css({
//   boxSizing: "border-box",
//   minHeight: "100vh"
// })

// var response = 10;
// const gridSize = response * response;
// const setWidth = (100/response) + "%";
// const setHeight = (100/response) + "%";
// for (var i=1; i <=210; i++){
//   const div = $('<div>');
//   div.attr("id",`${i}`)

//   div.css({
//     float: "left",
//     background: "rgb(0,0,0)",
//     color: "white",
//     display: "flex",
//     textAlign: "center",

//     boxSizing: "border-box",
//     width: "30px",
//     height: "30px",
//     // flexBasis: "10%",
//     border: "1px red solid"
//   })
//   container.append(div);
//   div.on('click',startGame);

// }

//  function startGame(e){ 
//   let elem = e.target;
//   changeColor(elem);
//   let nextElem = nextDiv(elem);
//   (function loop(i){
//     setTimeout(function(){
//       changeColor(nextElem);
//       removeColor(elem);
//       elem = nextElem;
//       nextElem = nextDiv(elem);

//       if (--i){
//         loop(i);
//       }
//     }, 300);
//   })(10);
// }
//  function nextDiv(elem){
//    let elemId = Number(elem.id) + 1;
//    let nextElem = $("#" + elemId)[0];
//    return nextElem;
//  }
//  function changeColor(nextElem){
//    $(nextElem).css("background","blue");
//  }
//  function removeColor(elem){
//    $(elem).css("background","black")
//  }
   


})