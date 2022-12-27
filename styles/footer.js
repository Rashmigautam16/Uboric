document.getElementById("arrow").addEventListener("click", arrowFun)

  function arrowFun() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }