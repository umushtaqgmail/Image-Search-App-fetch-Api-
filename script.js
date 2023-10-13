const SearchForm = document.querySelector('#form-search');
const SearchInput = document.querySelector('#Search-box');
const SearchResult = document.querySelector('#search-result')
const ShowMore = document.querySelector('#show-more-btn')
const AccesKey = "i7nJ_tLlOWYuCi7jrR8AW2j3PSsBxRgn5MA_CDq-27w";



//&client_id=i7nJ_tLlOWYuCi7jrR8AW2j3PSsBxRgn5MA_CDq-27w  



let Keyword = "";
let page = 1;


async function SearchImage(){
   Keyword =SearchInput.value;
   const url =`https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${AccesKey} `;
   
   const response = await fetch(url);
   const data = await response.json();
    
     const results= data.results;
  if(page===1){
   SearchResult.innerHTML = "";
  }
   results.map((result) =>{
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add("search");
      const img = document.createElement("img");
      img.src = result.urls.small;
      img.alt=result.alt_description;
      const imgLink = document.createElement('a');
      imgLink.href =result.links.html;
      imgLink.target = "_blank";
      imgLink.textContent = result.alt_description;


      imgWrapper.appendChild(img);
      imgWrapper.appendChild(imgLink);
      SearchResult.appendChild(imgWrapper)
   });
   page++;
   if(page>1){
      ShowMore.style.display = "block";
   }};

  SearchForm.addEventListener("submit", (event)=> {
   event.preventDefault();
   page = 1;
   SearchImage();
  });

  ShowMore.addEventListener('click', ()=>{
   SearchImage();
  });