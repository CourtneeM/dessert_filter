import '../styles/desserts_container/style.css';

const dessertsContainerController = (() => {

  const generate = () => {
    const dessertsContainer = document.createElement('div');
    
    dessertsContainer.id = 'desserts-container';
    
    return dessertsContainer;
  }

  const removeChildren = () => {
    const dessertsContainer = document.querySelector('#desserts-container');

    while (dessertsContainer.firstChild) {
      dessertsContainer.removeChild(dessertsContainer.firstChild)
    }
  }

  return { generate, removeChildren }
})();

export default dessertsContainerController;

// module.exports = dessertsContainerController;
