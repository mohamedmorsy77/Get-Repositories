let input = document.querySelector(".get-repo input");
let button = document.querySelector(".button");
let dataShow = document.querySelector(".show-data");
button.onclick = function () {
  getRepo();
};

function getRepo() {
  if (input.value == "") {
    dataShow.innerHTML = "<span>Enter Github Name</span>";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((repositories) => {
        dataShow.innerHTML = "";
        repositories.forEach((repo) => {
          console.log(repo)
          let div = document.createElement("div");
          let divContainer = document.createElement("div");
          let a = document.createElement("a");
          let starsSpan = document.createElement("span");
          starsSpan.textContent = `Stars: ${repo.stargazers_count}`
          a.textContent = "Visit";
          a.href = `https://github.com/${input.value}/${repo.name}`;
          a.setAttribute("target", "_blank");
          div.textContent = repo.name;
          divContainer.className = "flex"
          divContainer.appendChild(a);
          divContainer.appendChild(starsSpan);
          div.appendChild(divContainer);
          div.appendChild(divContainer);

          dataShow.appendChild(div);
        });
      });
  }
}
