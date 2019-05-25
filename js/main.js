(() => {
	// stub
	console.log('fired!');

  //------------selecting elements--------//

  let samurai1SVG = document.querySelector("#samurai1"),
      samurai2SVG = document.querySelector("#samurai2"),
      samurai3SVG = document.querySelector("#samurai3"),
      samurai4SVG = document.querySelector("#samurai4"),
      samurai5SVG = document.querySelector("#samurai5"),
      samurai6SVG = document.querySelector("#samurai6"),
      samurai7SVG = document.querySelector("#samurai7"),
      samurai8SVG = document.querySelector("#samurai8") ;
      samurai9SVG = document.querySelector("#samurai9") ;
      samurai10SVG = document.querySelector("#samurai10") ;
     

  //----------functions begin here--------//

  function logMyId() {
  console.log(this.id);

  this.style.opacity = 0.5;
}

  //-----------events begin here---------//

  samurai1SVG.addEventListener("click", logMyId);
  samurai2SVG.addEventListener("click", logMyId);
  samurai3SVG.addEventListener("click", logMyId);
  samurai4SVG.addEventListener("click", logMyId);
  samurai5SVG.addEventListener("click", logMyId);
  samurai6SVG.addEventListener("click", logMyId);
  samurai7SVG.addEventListener("click", logMyId);
  samurai8SVG.addEventListener("click", logMyId);
  samurai9SVG.addEventListener("click", logMyId);
  samurai10SVG.addEventListener("click", logMyId);
  

})();
