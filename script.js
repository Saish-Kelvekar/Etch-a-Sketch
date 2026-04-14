function newSheet(){
    
    
    let size=prompt("Enter the size of the grid");
    if(size>0 && size<=100){
    currSheet(size);}
    else{
        alert("Enter a size between 1 and 100");
    }
    
    
    
}
function currSheet( size){
const container=document.querySelector("#container");
container.innerHTML="";
for(let i=0;i<size;i++){
    const squareSize=640/size;
    const row=document.createElement("div");
    row.classList.add("row");
    
    container.appendChild(row);
    for(let j=0;j<size;j++){
        const col=document.createElement("div");
        col.classList.add("col");
        col.style.width=`${squareSize}px`;
        col.style.height=`${squareSize}px`;
        row.appendChild(col);
    }
}
const cols=document.querySelectorAll(".col");
cols.forEach((col)=>{col.addEventListener("mouseover",()=>{
    col.style.backgroundColor="blue";
})})
;}
currSheet(16);
newSheet();

const button=document.querySelector("#new");
    button.addEventListener("click",newSheet);
    