'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

function renderChart() {
  let appState = new AppState();
  appState.loadItems();
  let labels = [];
  let voteData = [];
  let viewData = [];

  for (let i = 0; i < appState.allProducts.length; i++) {
    let product = appState.allProducts[i];
    labels.push(product.name);
    voteData.push(product.timesClicked);
    viewData.push(product.timesShown);
  }
  let dataObject = {
    labels: labels,
    datasets: [
      {
        label: 'Vote Data',

        data: voteData,
        borderWidth: 2,
        backgroundColor: 'green',
        borderColor: 'black',
      },
      {
        label: 'View Data',
        data: viewData,
        borderWidth: 2,
        backgroundColor: 'black',
        borderColor: 'green',
      }
    ]
  };
  let config = {
    type: 'bar',
    data: dataObject,
    options: {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'lightgray'
          }
        }
      }, 
      
      scales: {
        y: {
          ticks: {
            color: 'lightgray',
          }


        },
        x: {
          beginAtZero: true,
          ticks: {
            color: 'lightgray',
          }
        },
      }
    }
  };
  new Chart(canvasElem, config);
};

renderChart();