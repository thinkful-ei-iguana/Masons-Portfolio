function burgerClick() {
  let links = document.getElementById('links');
  if (links.style.display === 'none'){
    links.style.display = 'block';  
  } else {
    links.style.display = 'none';
  }
    
}

// function showList() {
//     let burgerIcon = document.getElementById("burger")
//     if (burgerIcon.style.display === "none") {
//         links.style.display = "inline";
//     }
// }

// document.addEventListener("DOMContentLoaded", showList)
document.addEventListener('DOMContentLoaded', burgerClick);
