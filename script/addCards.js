const divContent = document.getElementById("content");
const myForm = document.getElementById("myForm");

const addNewCard = (e) => {
  e.preventDefault();

  let project = document.createElement("div");
  project.classList.add("card");
  const img = document.createElement("img");
  img.classList.add("img-fluid");
  const title = document.createElement("h1");
  title.classList.add("card-title")
  const subtitle = document.createElement("p");
  subtitle.classList.add("card-subtitle");
  const body = document.createElement("p");
  body.classList.add("card-description");

  img.src = e.target.url_image.value;
  title.innerHTML = e.target.title.value;
  subtitle.innerHTML = e.target.subtitle.value;
  body.innerHTML = e.target.description.value;

  project.appendChild(img);
  project.appendChild(title);
  project.appendChild(subtitle);
  project.appendChild(body);

  divContent.appendChild(project);
};

myForm.addEventListener("submit", addNewCard); 