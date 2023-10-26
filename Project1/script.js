function showMenu(){
    let navigation = document.querySelector(".menu");
    if (navigation.className === "menu") {
        navigation.className += " visible";
      } else {
        navigation.className = "menu";
      }
}