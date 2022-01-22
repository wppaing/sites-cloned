const faq = document.querySelectorAll(".faq-item");
faq.forEach((el) => {
  el.addEventListener("click", () => {
    let child = el.nextElementSibling;
    let svg = el.getElementsByTagName("svg")[0];
    if(child.style.maxHeight){
      svg.style.transform = "rotate(45deg)";
      child.style.maxHeight = null;
    }else{
      svg.style.transform = "rotate(180deg)";
      child.style.maxHeight = child.scrollHeight + "px";
      // child.style.padding = "2rem";
    }
  });
});

// console.log(e.path[0].nextElementSibling)