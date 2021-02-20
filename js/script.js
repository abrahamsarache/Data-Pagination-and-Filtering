/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
"showPage" function
It creates and appends dinamically a serie of HTML elements to display 9 students per page.
   Parameters
   -list: Uses any database.
   -page: Determines the number of the currently selected page. 
*/

function showPage(list, page) {
   //these 2 variables will help assigning 9 students per page.
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);

   //select the UL where we want to attach the new elements
   let studentList = document.getElementsByClassName('student-list')[0];
      studentList.innerHTML = '';

   //loop over the list parameter to obtain all objects contained in 'list'.
         for (let i=0; i < list.length; i++) {
            
            if (startIndex <= i && endIndex > i) {
               //create a new li and append all elements needed to display all the information of each student
               const li = document.createElement('li');
               li.className = "student-item cf";
               studentList.appendChild(li);

                  //First Div element: Image, full name, email.
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


                  //Second DIV element: Extra info
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
"addPagination" function
It creates the elements needed for the pagination buttons
*/

function addPagination(list) {
  //this small formula will help us creating a dynamic amount of buttons depending on the database's length.
  let buttonsNeeded = Math.ceil(list.length/9);

      //select the UL where we want to attach our buttons.
      let linkList = document.getElementsByClassName('link-list')[0];
      linkList.innerHTML = '';

      for (let i=0; i < buttonsNeeded; i++){
         const li = document.createElement('li');
         linkList.appendChild(li);

         const button = document.createElement('button');
         button.type = "button";
         button.textContent = i+1;
         li.appendChild(button);

         //adds active status to the first button
         const firstButton = document.querySelector('.link-list li button');
         firstButton.className = "active";
      }

      //this event listener will change the active status to a different button if it is clicked
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


// Call our functions
showPage(data, 1);
addPagination(data);
