import layout from './view/layout.js';
import data from './data.js';
import { showSpinner, hideSpinner } from './view/spinner.js';

export default () => {
  const index = document.getElementById('app');
  index.innerHTML = layout();

  const inputValue = document.getElementById('search-term');

  inputValue.addEventListener('change', (event) => {
    if (event.target.value != '') {
      showSpinner();
      data(event.target.value).then((results) => {
        hideSpinner();

        const context = {
          name: [results.name],
          result: [results.country],
        };

        const templateScript = Handlebars.templates.render(context);

        const resultsElement = document.getElementById("results");
        resultsElement.innerHTML = `${templateScript}`;

      });
    }
  });
};
