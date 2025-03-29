const data = [
    { "position": "President", "name": "ANIL MEHTA" },
    { "position": "Vice President", "name": "SANJAY JAIN" },
    { "position": "Secretary", "name": "NILESH SAKLECHA" },
    { "position": "Vice Secretary", "name": "VAIBHAV JAIN" },
    { "position": "Treasurer", "name": "NILESH RANKA" },
    { "position": "Education Advisor", "name": "DR. RANU SABADRA" },
    { "position": "Member", "name": "KAMAL JAIN" },
    { "position": "Member", "name": "TEJARAM PRAJAPAT" },
    { "position": "Member", "name": "SANDEEP JAIN" },
    { "position": "Member", "name": "PIYUSH MEHTA" },
    { "position": "Principal", "name": "RITUBALA KOTHARI" },
    { "position": "Acting President", "name": "ASHOK BAFNA" }
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
  