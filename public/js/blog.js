const blogFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-blog").value.trim();
  const content = document.querySelector("#content-blog").value.trim();

  if (title && content) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create blog.");
    }
  }
};
document
  .querySelector("#blog-form")
  .addEventListener("submit", blogFormHandler);
