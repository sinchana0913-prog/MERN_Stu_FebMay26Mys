function saveRecent(project) {
  let recent = JSON.parse(localStorage.getItem("recent")) || [];

  if (!recent.includes(project)) {
    recent.push(project);
    localStorage.setItem("recent", JSON.stringify(recent));
  }
}