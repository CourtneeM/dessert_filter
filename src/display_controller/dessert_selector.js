const generateDessertSelector = dessertCategories => {
  const dessertSelector = document.createElement('select');
  const dessertOptions = ['all', ...dessertCategories];

  dessertSelector.id = 'dessert-selector';

  dessertOptions.forEach(option => {
    const dessertOption = document.createElement('option');

    dessertOption.classList.add('dessert-option');
    dessertOption.textContent = option[0].toUpperCase() + option.slice(1);
    dessertOption.setAttribute('value', option);
  
    dessertSelector.appendChild(dessertOption);
  });

  return dessertSelector;
}

export default generateDessertSelector;

// module.exports = generateDessertSelector;
