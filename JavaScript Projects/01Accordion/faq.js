const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];
for(let i=0; i<faqData.length;i++){
  let elem = faqData[i];
  faqs.push(elem);
}



function createFaq() {

  let creatMain = document.createElement("main");
  accordianBody.append(creatMain);
  creatMain.setAttribute("class","faq faq_header");
  
  let creatHeader = document.createElement("header");
  creatMain.appendChild(creatHeader);
  creatHeader.setAttribute("class","faq_header");

  let creatH = document.createElement("h3");
  creatHeader.appendChild(creatH);
  creatH.setAttribute("class", "faq ");

  
  let creatBtn = document.createElement("button");
  creatHeader.appendChild(creatBtn);
  creatBtn.setAttribute("class", " show_btn")
  creatBtn.textContent="+";
  
  let creatP = document.createElement("p");
  creatMain.appendChild(creatP);
  creatP.setAttribute("class", "faq hidden");

}

for(let i=0; i<faqs.length; i++){
  createFaq();

}  



function showFaq() {
  
  for(let i=0; i<faqs.length; i++){

    document.querySelectorAll("h3")[i].innerHTML=faqs[i].question
    document.querySelectorAll("p")[i].innerHTML=faqs[i].answer
    
  }

  }
  
  showFaq()

  

function btnStatusUpdate() {

  for(let i=0; i<faqs.length; i++){
    let para = document.querySelectorAll(".hidden").item(i);


    let btn = document.querySelectorAll("button");
  
    btn.item(i).addEventListener("click", hidenFun);
    function hidenFun (){
      if (para.style.display !== "none") {
        para.style.display = "none";
      } else {
        para.style.display = "block";
      }
    }

  }

}

btnStatusUpdate()


