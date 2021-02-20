/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {

   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);

   let studentList = document.getElementsByClassName('student-list')[0];
      studentList.innerHTML = '';

   //loop over the list parameter

         for (let i=0; i<list.length; i++) {
            
            if (startIndex <= i && endIndex > i) {
               const li = document.createElement('li');
               li.className = "student-item cf";
               studentList.appendChild(li);

                  //First Div element
                  const detailsDiv = document.createElement('div');
                  detailsDiv.className = "student-details";
                  li.appendChild(detailsDiv);

                     const img = document.createElement('img');
                     img.className = "avatar";
                     img.src = data[i].picture.large;
                     img.alt = "Profile Picture";
                     img.onload = function() {
                     };
                     detailsDiv.appendChild(img);
                     

                     const h3 = document.createElement('h3');
                     h3.textContent = data[i].name.first + ' ' + data[i].name.last;
                     detailsDiv.appendChild(h3);

                     const emailSpan = document.createElement('span');
                     emailSpan.className = "email";
                     emailSpan.textContent = data[i].email;
                     detailsDiv.appendChild(emailSpan);


                  //Second DIV element

                  const joinedDiv = document.createElement('div');
                  joinedDiv.className = "joined-details";
                  li.appendChild(joinedDiv);

                     const joinedSpan = document.createElement('span');
                     joinedSpan.className = "date";
                     joinedSpan.textContent = data[i].registered.date;
                     joinedDiv.appendChild(joinedSpan);
            }
         }
      return studentList;  
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  let buttonsNeeded = Math.ceil(data.length/9);

      let linkList = document.getElementsByClassName('link-list')[0];
      linkList.innerHTML = '';

      for (let i=0; i<buttonsNeeded; i++){
         const li = document.createElement('li');
         linkList.appendChild(li);

         const button = document.createElement('button');
         button.type = "button";
         button.textContent = i+1;
         li.appendChild(button);

         const firstButton = document.querySelector('.link-list li button');
         firstButton.className = "active";
      }

      linkList.addEventListener('click', (e)=>{
         if(e.target.tagName === 'BUTTON') {
            let activeButton = document.querySelector(".active");
            activeButton.className = "";
            e.target.className = "active";
            showPage(data, e.target.textContent);
         }
      })
   return linkList;
};


// Call functions
showPage(data, 1);
addPagination(data);
