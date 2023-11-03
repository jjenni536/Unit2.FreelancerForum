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
    
// create const for p tag for avg starting pricing
//this is where "avg starting price" calculation should take place
    const paragraph = document.createElement(`p`);


//create function to calculate the avg starting place
const sumPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
const avgStartingPrice = sumPrices / freelancers.length;

    // add text content to p tag
    paragraph.textContent = `The average starting price is ${avgStartingPrice}.`;

    // append to document
        document.body.append(paragraph);

// create constant for second h1 tag
    const h1Two = document.createElement(`h1`);

    //add text for second h1 tag
        h1Two.textContent = `Available Freelancers`;

    // append to document
        document.body.append(h1Two);

   
  
// create function that displays names
const Names = (freelancers) => {
    return freelancers.map(freelancer => freelancer.name);
   
}
// create array with names only
const namesArr = Names(freelancers);

// add styling to names array


    // append to document
        document.body.append(namesArr)

 // add div for names
 const div1 = document.createElement(`div`);

 // append to document
 document.body.appendChild(div1);

 // add content for div
 div1.textContent = `${namesArr}`


// create function that displays occupation
const occupations = (freelancers) => {
    return freelancers.map(freelancer => freelancer.occupation);
   
}
// create array with names only
const occupationArr = occupations(freelancers);


    // append to document
        document.body.append(occupationArr);


//create const for prices
const prices = (freelancers) => {
    return freelancers.map(freelancer => freelancer.price);
    
}
// create array with names only
const pricesArr = prices(freelancers);


// append to document
document.body.append(pricesArr);


// create function for starting prices

// create array with srating prices only


// test

  console.log();
  console.log();
