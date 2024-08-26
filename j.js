document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('cont').classList.add('show');
    }, 100);
});
const noteTextarea = document.getElementById('noteInput');
const noteInput1= document.getElementById('noteInput1');
const noteInput2= document.getElementById('noteInput2');
const mainTextarea = document.getElementById('mainInput');
const mainInput1 = document.getElementById('mainInput1');
const mainInput2 = document.getElementById('mainInput2');
const notebtn = document.getElementById('notebtn');
const sidenav= document.querySelector('.sidenav');
const hmbrgr = document.querySelector('.humburger');

const option1 = document.getElementById('op1');
const op11 = document.querySelector('[data-option="op11"]');
const backBtn = document.getElementById('op4');
const backBtn44 = document.getElementById('op44');
const resetBtn = document.getElementById('op2');
const resetBtn22 = document.getElementById('op22');
const op111 = document.querySelector('[data-option="op111"]');
const backBtn444 = document.getElementById('op444');
const resetBtn222 = document.getElementById('op222');
const delBtn = document.getElementById('op5');
const fav =  document.getElementById('op3');
const delBtn2 = document.getElementById('op55');
const fav2 =  document.getElementById('op33');
const delBtn3 = document.getElementById('op555');
const fav3 =  document.getElementById('op333');

 // a manual fun//
 function saveTextToLocalStorage(text) {
    localStorage.setItem('savedText', text);
  }
  function saveTextToLocalStorage2(text) {
    localStorage.setItem('savedText2', text);
  } function saveTextToLocalStorage3(text) {
    localStorage.setItem('savedText3', text);
  }
  const navbar = document.getElementById('navbar1');
  const savedText = localStorage.getItem('savedText');
  const savedText2 = localStorage.getItem('savedText2');
  const savedText3 = localStorage.getItem('savedText3');

  if (savedText||savedText2||savedText3) {
    noteTextarea.value = savedText;
    mainTextarea.value=savedText;
    noteInput1.value = savedText2;
    mainInput1.value=savedText2;
    noteInput2.value=savedText3;
    mainInput2.value=savedText3;

  } 

mainTextarea.scrollTop=80;
mainTextarea.scrollLeft=20;

mainInput1.scrollTop=80;
mainInput1.scrollLeft=20;

mainInput2.scrollTop=80;
mainInput2.scrollLeft=20;


const name = document.querySelector('.nameNote');
const nameShade = document.querySelector('.nameNoteShade');

document.getElementById('button').addEventListener('click', function() {
    // Hide the first interface
    document.getElementById('inter').classList.add('hidden');
    name.style.display='none';
    nameShade.style.display='none';

    setTimeout(function() {
        document.getElementById('inter1').classList.remove('hidden');
    }, 500); // Adjust the delay to match the transition duration in CSS
});
noteTextarea.addEventListener('click',function(){
    navbar1.style.display = 'block';
    mainInput.style.display = 'block';
  noteTextarea.classList.add('hidden');
  hmbrgr.style.display='none';
  sidenav.style.display='none';

  });
  noteInput1.addEventListener('click',function(){
    navbar2.style.display = 'block';
    mainInput1.style.display = 'block';
    noteTextarea.classList.add('hidden');
    noteInput1.classList.add('hidden');
    hmbrgr.style.display='none';
    sidenav.style.display='none';
  });
  noteInput2.addEventListener('click',function(){
    navbar3.style.display = 'block';
    mainInput2.style.display = 'block';
    noteTextarea.classList.add('hidden');
    noteInput1.classList.add('hidden');
    noteInput2.classList.add('hidden');
    hmbrgr.style.display='none';
    sidenav.style.display='none';
  });

  option1.addEventListener('click', function() {
    saveTextToLocalStorage(mainTextarea.value); // Save text to local storage
    alert('Text saved in Local Storage'); // Display confirmation
    noteTextarea.value=mainTextarea.value;
    navbar.style.display = 'none';
    mainInput.style.display= 'none';
    noteTextarea.classList.remove('hidden');
    hmbrgr.style.display='block';
    sidenav.style.display='block';
  
  });
op11.addEventListener('click', function() {
  saveTextToLocalStorage2(mainInput1.value); // Save text to local storage
  alert('Text saved in Local Storage'); // Display confirmation
  noteInput1.value=mainInput1.value;
  navbar2.style.display = 'none';
  mainInput1.style.display= 'none';
 noteInput1.classList.remove('hidden');
  noteTextarea.classList.remove('hidden');
  hmbrgr.style.display='block';
    sidenav.style.display='block';

});
op111.addEventListener('click', function() {
    saveTextToLocalStorage3(mainInput2.value); // Save text to local storage
    alert('Text saved in Local Storage'); // Display confirmation
    noteInput2.value=mainInput2.value;
    navbar3.style.display = 'none';
    mainInput2.style.display= 'none';
   noteInput1.classList.remove('hidden');
   noteInput2.classList.remove('hidden');
   noteTextarea.classList.remove('hidden');
   hmbrgr.style.display='block';
    sidenav.style.display='block';
  
  });
  backBtn.addEventListener('click',function(){
    navbar.style.display = 'none';
    mainInput.style.display= 'none';
   noteTextarea.classList.remove('hidden');
   hmbrgr.style.display='block';
   sidenav.style.display='block';

  });
backBtn44.addEventListener('click', function() {
  navbar2.style.display = 'none';
  mainInput1.style.display= 'none';
 noteTextarea.classList.remove('hidden');
 noteInput1.classList.remove('hidden');
 hmbrgr.style.display='block';
   sidenav.style.display='block';
});
backBtn444.addEventListener('click', function() {

    navbar3.style.display = 'none';
    mainInput2.style.display= 'none';
   noteTextarea.classList.remove('hidden');
   noteInput1.classList.remove('hidden');
   noteInput2.classList.remove('hidden');
   hmbrgr.style.display='block';
   sidenav.style.display='block';

  });


resetBtn.addEventListener('click', function() {
    mainTextarea.value = ''; 
  });

resetBtn22.addEventListener('click', function() {
    mainInput1.value = ''; 
  });
  resetBtn222.addEventListener('click', function() {
    mainInput2.value = ''; 
  });
 
  delBtn.addEventListener('click',function(){
    // const current = noteTextarea.value;
    // const update = current.replace(new RegExp(textTodel, 'g'), '');
    const update ='';
    noteTextarea.value= update;
    mainTextarea.value='';
    noteTextarea.value=''
    saveTextToLocalStorage(update);
    navbar.style.display='none';
    mainTextarea.style.display= 'none';
   noteInput.classList.remove('hidden');
   alert('Text DELETED ');
   hmbrgr.style.display='block';
    sidenav.style.display='block';

  });
  delBtn2.addEventListener('click',function(){
  
    const update1 ='';
    noteInput1.value='';
    mainInput1.value='';
    saveTextToLocalStorage2(update1);
    navbar2.style.display='none';
    mainInput1.style.display= 'none';
   noteInput.classList.remove('hidden');
   noteInput1.classList.remove('hidden');
   alert('Text DELETED ');
   hmbrgr.style.display='block';
    sidenav.style.display='block';

  });
  delBtn3.addEventListener('click',function(){
    
    const update2 ='';
    noteInput2.value='';
    mainInput2.value='';
    saveTextToLocalStorage3(update2);
    navbar3.style.display='none';
    mainInput2.style.display= 'none';
   noteInput.classList.remove('hidden');
   noteInput1.classList.remove('hidden');
   noteInput2.classList.remove('hidden');
   hmbrgr.style.display='block';
    sidenav.style.display='block';

   alert('Text DELETED ');

  });
  fav.addEventListener('click',function(){
    mainInput.style.backgroundColor='rgb(225, 225, 145)';
    noteInput.style.backgroundColor='rgb(225, 225, 145)';
});
fav2.addEventListener('click',function(){
  mainInput1.style.backgroundColor='rgb(225, 225, 145)';
  noteInput1.style.backgroundColor='rgb(225, 225, 145)';
}); 
fav3.addEventListener('click',function(){
  mainInput2.style.backgroundColor='rgb(225, 225, 145)';
  noteInput2.style.backgroundColor='rgb(225, 225, 145)';
});



  let firstinp= false;
  notebtn.addEventListener('click',function(event){
    event.preventDefault(); 
    if(!firstinp){
    noteInput1.style.display='block';
    firstinp=true}
    else{
    noteInput2.style.display='block';
    }
  });


window.onload = function(){

    const menu_btn = document.querySelector('.humburger');
    
    const nav_menu = document.querySelector('.sidenav');
    
    menu_btn.addEventListener('click' , function (){
        menu_btn.classList.toggle('is-active');
        nav_menu.classList.toggle('is-active');
    });
    
    }

