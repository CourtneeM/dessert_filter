import '../styles/dessert_container/style.css';

const generateDessertContainer = dessertObj => {
  const dessertContainer = document.createElement('div');
  const dessertImg = document.createElement('img');
  const dessertName = document.createElement('p');
  const dessertPrice = document.createElement('p');
  
  dessertContainer.classList.add('dessert-container');
  dessertImg.classList.add('dessert-img');
  dessertName.classList.add('dessert-name');
  dessertPrice.classList.add('dessert-price');

  dessertImg.setAttribute('src', dessertObj.img);
  dessertImg.setAttribute('alt', `picture of a ${dessertObj.type} dessert`);
  dessertName.textContent = dessertObj.type;
  dessertPrice.textContent = `$${dessertObj.price}`;

  [dessertImg, dessertName, dessertPrice].forEach(el => dessertContainer.appendChild(el));

  return dessertContainer;
};

export default generateDessertContainer;

// module.exports = generateDessertContainer;
