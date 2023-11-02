const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
// create constant for main h1 tag
  const h1One = document.createElement(`h1`);
  
    // add text to h1 tag
        h1One.textContent = `Freelancer Forum`;

    // append to document
        document.body.append(h1One);
    
// create const for p tag in between the two h1's
    const paragraph = document.createElement(`p`);

    // add text content to p tag
        paragraph.textContent = `The average startign price is $30.`;

    // append to document
        document.body.append(paragraph);

// create constant for second h1 tag
    const h1Two = document.createElement(`h1`);

    //add text for second h1 tag
        h1Two.textContent = `Available Freelancers`;

    // append to document
        document.body.append(h1Two);
  
  // test
  console.log(h1One);
  console.log(paragraph);
  console.log(h1Two);
  console.log();
  console.log();
