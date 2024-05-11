window.addEventListener('scroll', function() {
  const firstPage = document.querySelector('.page.first-page');
  const secondPage = document.querySelector('.page.second-page');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition >= windowHeight / 2) {
    firstPage.classList.remove('active');
    secondPage.classList.add('active');
  } else {
    firstPage.classList.add('active');
    secondPage.classList.remove('active');
  }
});


const scrollButton = document.getElementById("scroll-button");
const section = document.getElementById("login-register");
scrollButton.addEventListener("click", function() {
  section.scrollIntoView({ behavior: "smooth" });
});

function validate() {
  const input = document.getElementById('floatingInput');
  const password = document.getElementById('floatingPassword');
  if ((input.value === "username" || input.value === "username@gmail.com") && password.value === "password") {
    alert("Login Successful");
    window.location = "../html/meetup.html";
    event.preventDefault();
    return false;
  } else {
    alert("Invalid Username/Email or Password");
  }
}

// const animatedText = document.querySelector('.animate__animated.animate__flipInX'); // Assuming this class targets the text
// const options = {
//   root: null, // Observe relative to viewport
//   threshold: 0.5  // Animate when 50% of the element is visible
// };
//
// const observer = new IntersectionObserver(handleIntersection, options);
// function handleIntersection(entries) {
//   for (const entry of entries) {
//     if (entry.isIntersecting) {
//       animatedText.classList.add('animate__animated', 'animate__flipInX'); // Add animation classes
//       observer.unobserve(animatedText); // Stop observing after animation
//     }
//   }
// }
//
// observer.observe(animatedText);
