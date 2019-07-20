// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabMaker = data => {
  const tab = document.createElement("div");

  tab.classList.add("tab");

  // tab.textContent = document.querySelectorAll(".tab").forEach(topic => topic.data.topics);

  tab.textContent = data.topics;

  console.log(data.topics);
  return tab;
};

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(resolve => {
    console.log(resolve);
    document.querySelector(".topics").appendChild(tabMaker(resolve.data));
  })
  .catch(error => console.log(error));
