document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById('menu');
  const menuItems = document.getElementById('menuItems');
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Toggle mobile menu
  menu.addEventListener('click', function() {
      menuItems.classList.toggle('show');
  });

  // Click on a menu item
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          if (menuItems.classList.contains('show')) {
              menuItems.classList.remove('show'); // Close the menu when a link is clicked
          }
      });
  });

  // Highlight active section in menu
  window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute('href').includes(current)) {
              link.classList.add("active");
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          }
      });
  }, {
      threshold: 0.5  // 50% of the item must be visible
  });

  const stats = document.querySelectorAll('.stats-list li');
  stats.forEach(stat => {
      observer.observe(stat);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  function setupMobileGallery() {
      const arrows = document.querySelectorAll('#équipe .arrow');
      const images = document.querySelectorAll('#équipe .team-photo');
      let currentIndex = 0; // Start showing the first image

      // Clear existing click events to prevent duplicate bindings
      arrows.forEach(arrow => {
          arrow.removeEventListener('click', handleArrowClick);
          arrow.addEventListener('click', handleArrowClick);
      });

      function handleArrowClick() {
          if (this.classList.contains('right')) {
              currentIndex = (currentIndex + 1) % images.length; // Move right
          } else {
              currentIndex = (currentIndex - 1 + images.length) % images.length; // Move left
          }
          updateImageDisplay();
      }

      function updateImageDisplay() {
          images.forEach((img, index) => {
              img.style.display = (index === currentIndex) ? 'block' : 'none';
          });
      }

      updateImageDisplay(); // Initial display setup
  }

  // Setup initially if on mobile
  if (window.innerWidth <= 768) {
      setupMobileGallery();
  }

  // Add event listener for resizing
  window.addEventListener('resize', function() {
      // Check if the new width is within the mobile view and setup if necessary
      if (window.innerWidth <= 768) {
          setupMobileGallery();
      } else {
          // Possibly handle teardown for desktop or other setups when not mobile
          const images = document.querySelectorAll('#équipe .team-photo');
          images.forEach((img) => {
              img.style.display = ''; // Reset display style
          });
          // Remove event listeners if added specifically for mobile setup
          const arrows = document.querySelectorAll('#équipe .arrow');
          arrows.forEach(arrow => {
              arrow.removeEventListener('click', handleArrowClick);
          });
      }
  });
});

function adjustContainerHeight() {
  const container = document.querySelector('#équipe .image-container');
  if (container) {
    container.style.height = `${window.innerHeight}px`;
  }
}

window.addEventListener('resize', adjustContainerHeight);
document.addEventListener('DOMContentLoaded', adjustContainerHeight);


document.addEventListener("DOMContentLoaded", function() {
  const carouselImagesContainer = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const rightArrow = document.querySelector('.right-arrow');
  const leftArrow = document.querySelector('.left-arrow');

  let imageIndex = 0;
  const imageWidth = 812; // Image width

  rightArrow.addEventListener('click', () => {
    if (imageIndex < images.length - 1) {
      imageIndex++;
      updateCarousel();
    }
  });

  leftArrow.addEventListener('click', () => {
    if (imageIndex > 0) {
      imageIndex--;
      updateCarousel();
    }
  });

  function updateCarousel() {
    carouselImagesContainer.style.transform = `translateX(-${imageIndex * imageWidth}px)`;
  }
});

