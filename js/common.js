window.addEventListener("scroll",function(){
    const header = document.getElementById("header");
    const scroll = window.pageYOffset;      
    
    if (scroll > 1){
        header.className = "header fixed-top"  
    } else if (scroll <=1){
        header.className = "header";
    }
})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  document.querySelector(".gotop").addEventListener("click", function(event){
      window.scrollTo(0,0);
  })

  
    document.getElementById("btn").addEventListener("click", function(event){
        const toggler = document.body;           //  배경 element
        toggler.classList.toggle('dark-mode');   //스위치 같은 메소드
    })

  