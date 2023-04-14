


function main() {
  const notRead = document.querySelectorAll('.not-read');
  const allRedDots = document.querySelectorAll(".red-dot");

  const unreadNotificationsCounter = document.querySelector(
    "#numberOfNotifications"
  );
  unreadNotificationsCounter.textContent = allRedDots.length;
  
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", clearNotifications());
    
    
    function clearNotifications() {
      allRedDots.forEach((redDot) => redDot.remove());
      unreadNotificationsCounter.textContent = 0;
      notRead.forEach((n) => n.classList.remove('not-read'));      
    }
    
    
}


  // main();
  // function main() {
  //   const allRedDots = document.querySelectorAll(".red-dot"); //get all red dots
  //   const unreadNotificationsCounter = document.querySelector(
  //     "#unread-notifications-counter"
  //   ); //get the counter of unread notifications
  //   unreadNotificationsCounter.textContent = allRedDots.length; //display the number of unread notifications

  //   const btnClearAll = document.querySelector(".btn-clear-all"); //get the button to clear all notifications
  //   btnClearAll.addEventListener("click", clearAllNotifications); //add event listener to the button to clear all notifications
  //   function clearAllNotifications() {
  //     allRedDots.forEach((redDot) => redDot.remove()); //remove all red dots
  //     unreadNotificationsCounter.textContent = 0; //set the counter of unread notifications to 0
  //   }
  // }