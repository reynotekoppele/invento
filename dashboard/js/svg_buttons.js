const svgs = document.querySelectorAll(".svg"); //find all svg's

svgs.forEach(element => {
  fetch(element.src)
    .then(file => file.text().then(svgString => { //load svg file as text

      let placeholder = document.createElement("div"); //create placeholder to place svg string in

      svgString = svgString.substring(svgString.indexOf("<svg ")); //remove evertything unusefull before <svg tag
      placeholder.innerHTML = svgString.trim();

      let svgElement = placeholder.firstChild; //load svg element

      svgElement.classList.add("img-size-simul"); //add class

      element.replaceWith(svgElement); //replace image element with inline svg element
    }));
});
