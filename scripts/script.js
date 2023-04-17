"use strict"
document.addEventListener("DOMContentLoaded", () => {
  let token = localStorage.getItem("token");

  if (!token) {
    if (
      window.location.pathname != "/login/" && 
      window.location.pathname != "/registration/"
    ) {
      window.location.replace("/registration/");
    }
  } else {
      
  }
})