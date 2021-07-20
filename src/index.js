import desserts from './desserts/desserts';
import generateDessertSelector from './display_controller/dessert_selector';
import generateDessertContainer from './display_controller/dessert_container';
import dessertsContainerController from './display_controller/desserts_container';

const body = document.querySelector('body');
const dessertsContainer = dessertsContainerController.generate();

const renderAllDesserts = () => {
  for (let dessert in desserts) {
    desserts[dessert].forEach(dessertObj => {
      dessertsContainer.appendChild(generateDessertContainer(dessertObj));
    });
  }
}

const initialRender = (() => {
  const dessertCategories = Object.keys(desserts);
  body.appendChild(generateDessertSelector(dessertCategories));

  renderAllDesserts();

  body.appendChild(dessertsContainer);
})();

const eventHandler = (() => {
  const dessertSelectorListener = (() => {
    const dessertSelector = document.querySelector('#dessert-selector');

    dessertSelector.addEventListener('change', (e) => {
      dessertsContainerController.removeChildren();

      if (e.target.value === 'all') {
        renderAllDesserts();
      } else {
        desserts[e.target.value].forEach(dessertObj => {
          dessertsContainer.appendChild(generateDessertContainer(dessertObj));
        });
      }
      console.log(desserts[e.target.value][0].img);
    });
  })();
})();
