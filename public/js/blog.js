const signupFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#email-signup").value.trim();
  const content = document.querySelector("#password-signup").value.trim();

  if (title && content) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ email, password, username }),
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
  .addEventListener("submit", signupFormHandler);
