  // Get the filter options elements
  const openFilter = document.getElementById('open-filter');
  const wifiFilter = document.getElementById('wifi-filter');

  // Get all cafe cards
  const cafeCards = document.querySelectorAll('.col-12.col-lg-4.col-md-6');

  // Add event listeners to the filter options
  openFilter.addEventListener('change', applyFilters);
  wifiFilter.addEventListener('change', applyFilters);

  // Function to apply filters
  function applyFilters() {
    const isOpenSelected = openFilter.checked;
    const isWifiSelected = wifiFilter.checked;

    cafeCards.forEach((card) => {
      const isOpen = card.classList.contains('open-cafe');
      const hasWifi = card.classList.contains('wifi-cafe');

      if (
        (isOpenSelected && !isOpen) ||
        (isWifiSelected && !hasWifi)
      ) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    });
  }