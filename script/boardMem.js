
  async function fetchDataAndPopulate() {
    try {
      // Fetch JSON data
      const response = await fetch("../board_member/data.json");
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      const scrollInner = document.getElementById("scroll-inner");
  
      // Clear the container
      scrollInner.innerHTML = "";
  
      // Add each item twice for seamless looping
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
    } catch (error) {
      console.error("Error fetching or displaying data:", error);
    }
  }
  
  // Fetch data and initialize
  fetchDataAndPopulate();
  