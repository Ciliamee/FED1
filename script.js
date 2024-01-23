// **** IN UITKLAP MENUS ***

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.uitklapmenusContainer');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var submenu = button.nextElementSibling; // Select the next sibling element (ul)
        submenu.classList.toggle('active');
      });
    });
  });
  // https://chat.openai.com/c/ed29a705-cec3-46fb-a21f-15b470288b3a
  


//  **** POP-UPS ****
document.addEventListener('DOMContentLoaded', function() {
  var openButtons = document.querySelectorAll('.openButton');
  var popups = document.querySelectorAll('.popup-container');

  openButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          var targetId = button.getAttribute('data-target');
          var targetPopup = document.getElementById(targetId);

          // Close all pop-ups
          popups.forEach(function(popup) {
              popup.style.display = 'none';
          });

          // Open the clicked pop-up
          targetPopup.style.display = 'block';
      });
  });
});

// https://chat.openai.com/c/479bea02-9316-4929-8124-8f21a96f4e3f



// *** CAROUSEL ***
const CarouselContainerSection = document.getElementById('carousel-container');
const CarouselContainerSectionUls = CarouselContainerSection.getElementsByTagName('ul');
const CarouselContainerSectionFirstUlLis = CarouselContainerSectionUls[0].getElementsByTagName('li');

const CarouselContainerSectionDivs = CarouselContainerSection.getElementsByTagName('div');
const CarouselContainerSectionFirstDivButtons = CarouselContainerSectionDivs[0].getElementsByTagName('button');

function ShowCarouselElement(index) {
  const activeItem = CarouselContainerSectionUls[0].getElementsByClassName('active-carousel');
  activeItem[0].classList.remove("active-carousel");
  CarouselContainerSectionFirstUlLis[index].classList.add('active-carousel');
}

// remove all active-carousel items (display none) 
// add active-carousel to element if equal to index (display block)

CarouselContainerSectionFirstDivButtons[0].addEventListener('click', function() {ShowCarouselElement(0)});
CarouselContainerSectionFirstDivButtons[1].addEventListener('click', function() {ShowCarouselElement(1)});
CarouselContainerSectionFirstDivButtons[2].addEventListener('click', function() {ShowCarouselElement(2)});
CarouselContainerSectionFirstDivButtons[3].addEventListener('click', function() {ShowCarouselElement(3)});
CarouselContainerSectionFirstDivButtons[4].addEventListener('click', function() {ShowCarouselElement(4)});

// bron: hulp vam broer 



// **** PLUS MIN DING ***
const LabelPlusMinSectionContainers = document.getElementsByClassName('PlusMinContainer');

// Loop through each container
Array.from(LabelPlusMinSectionContainers).forEach((container, containerIndex) => {
  // Get the input and buttons inside each container
  const inputElement = container.querySelector('input');
  const buttons = container.getElementsByTagName('button');

  // Add click event listeners to the buttons with the corresponding index
  Array.from(buttons).forEach((button, buttonIndex) => {
    button.addEventListener('click', function () {
      updateQuantity(inputElement, buttonIndex);
    });
  });
});

function updateQuantity(inputElement, buttonIndex) {
  let currentValue = parseInt(inputElement.value, 10) || 0;
  // Ensure the value is a number; if not, default to 0
  inputElement.value = Math.max(0, currentValue + (buttonIndex === 1 ? 1 : -1));
}
// https://chat.openai.com/c/ed29a705-cec3-46fb-a21f-15b470288b3a




// *** BACK TO TOP BUTTON ***
document.addEventListener('DOMContentLoaded', function () {
  // Get the button element
  var backToTopBtn = document.querySelector('.BackToTopBtn');

  backToTopBtn.addEventListener('click', function () {
      scrollToTop();
  });

  // Function to smoothly scroll to the top
  function scrollToTop() {
      const scrollOptions = {
          top: 0,
          behavior: 'smooth'
      };

      // For modern browsers
      if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo(scrollOptions);
      } else {
          // For browsers that do not support smooth scrolling
          window.scrollTo(scrollOptions.top, scrollOptions.top);
      }
  }
});
// https://chat.openai.com/c/ed29a705-cec3-46fb-a21f-15b470288b3a


