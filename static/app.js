  // Get the filter options elements
  const openFilter = document.getElementById('open-filter');
  const wifiFilter = document.getElementById('wifi-filter');
  const powerFilter = document.getElementById('power-filter');
  const allFilter = document.getElementById('all-filter');

  // Get all cafe cards
  const cafeCards = document.querySelectorAll('.col-12.col-lg-4.col-md-6');

  // Add event listeners to the filter options
  openFilter.addEventListener('change', applyFilters);
  wifiFilter.addEventListener('change', applyFilters);
  powerFilter.addEventListener('change', applyFilters);
  allFilter.addEventListener('change', handleAllFilter)

  // Function to apply filters
  function applyFilters() {
    const isOpenSelected = openFilter.checked;
    const isWifiSelected = wifiFilter.checked;
    const isPowerSelected = powerFilter.checked;

    cafeCards.forEach((card) => {
      const isOpen = card.classList.contains('open-cafe');
      const hasWifi = card.classList.contains('wifi-cafe');
      const hasPower = card.classList.contains('power-cafe');

      if (
        (isOpenSelected && !isOpen) ||
        (isWifiSelected && !hasWifi) ||
        (isPowerSelected && !hasPower)
      ) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    });
  }

// Function to handle the "all" checkbox
function handleAllFilter() {
  if (allFilter.checked) {
    // Uncheck other checkboxes
    openFilter.checked = false;
    wifiFilter.checked = false;
    powerFilter.checked = false;
  }

  // Apply filters
  applyFilters();
}

// Function to handle other checkboxes
function handleOtherFilter() {
  if (openFilter.checked || wifiFilter.checked || powerFilter.checked) {
    // Uncheck the "all" checkbox
    allFilter.checked = false;
  }

  // Apply filters
  applyFilters();
}

// Add event listeners to other checkboxes
openFilter.addEventListener('change', handleOtherFilter);
wifiFilter.addEventListener('change', handleOtherFilter);
powerFilter.addEventListener('change', handleOtherFilter);



function openLightbox(imageSrc) {
      var lightbox = document.querySelector('.lightbox');
      var lightboxImage = document.getElementById('lightboxImage');

      lightboxImage.src = imageSrc;
      lightbox.style.display = 'flex';

      // Add a small delay before applying the transition
      setTimeout(function() {
        lightbox.style.opacity = '1';
      }, 10);

      lightbox.addEventListener('click', closeLightbox);
    }

    function closeLightbox() {
      var lightbox = document.querySelector('.lightbox');

      lightbox.style.opacity = '0';

      // Add a delay before hiding the lightbox to allow the transition to complete
      setTimeout(function() {
        lightbox.style.display = 'none';
      }, 1000);

      lightbox.removeEventListener('click', closeLightbox);
    }





