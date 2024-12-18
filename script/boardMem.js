const data = [
    { "position": "Manager", "name": "John Doe" },
    { "position": "Developer", "name": "Jane Smith" },
    { "position": "Designer", "name": "Alice Johnson" },
    { "position": "Manager", "name": "John Doe" },
    { "position": "Developer", "name": "Jane Smith" },
    { "position": "Designer", "name": "Alice Johnson" },
    { "position": "Manager", "name": "John Doe" },
    { "position": "Developer", "name": "Jane Smith" },
    { "position": "Designer", "name": "Alice Johnson" },
    { "position": "Manager", "name": "John Doe" },
    { "position": "Developer", "name": "Jane Smith" },
    { "position": "Designer", "name": "Alice Johnson" }
  ];
  
  // Directly populate the scrolling items
  function populateScrollItems(data) {
    const scrollInner = document.getElementById("scroll-inner");
    scrollInner.innerHTML = "";
  
    for (let i = 0; i < 2; i++) {
      data.forEach((item) => {
        const scrollItem = document.createElement("div");
        scrollItem.className = "scroll-item";
  
        const heading = document.createElement("h1");
        heading.textContent = item.position;
  
        const paragraph = document.createElement("p");
        paragraph.textContent = item.name;
  
        scrollItem.appendChild(heading);
        scrollItem.appendChild(paragraph);
        scrollInner.appendChild(scrollItem);
      });
    }
  }
  
  populateScrollItems(data);
  