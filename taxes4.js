var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumCompanySales(salesArray) {
  var salesTotal = 0;

  for (var c = 0; c < salesArray.length; c++) {
    salesTotal += salesArray[c];
  }

  return salesTotal;
}

function calcTaxes(taxes, totalSales) {
  return taxes * totalSales;
}

function calculateSalesTax(salesData, taxRates) {
  //want an object and to return the object
  //in object: want total sales & taxes to be grouped by company name
  totalResult = {};  //created empty object  && created return

  //build a for loop to go through all salesData
  for (var c = 0; c < salesData.length; c++) {
    //want to record 'name' as an object in empty object created
    //(totalResult) if it isn't already there
    var companyData = salesData[c]
    //going through each array separately at "c"
    var companyName = companyData['name'];
    var sumSales = sumCompanySales(companyData['sales']);
    if (!totalResult[companyName]) {
        // totalResult[] -- referring to the keys in objects

      totalResult[companyName] = {
        totalSales: sumSales,
        totalTaxes: calcTaxes(taxRates[companyData['province']], sumSales) //taxes and total sales
      };
        //created an object for each companyName

    } else {
      //if the object has the company name
      //you want to add the sales and add the taxes
      //need to go through the sales array to add each number in array
        //done in for loop below
      totalResult[companyName]['totalSales'] += sumSales;
      totalResult[companyName]['totalTaxes'] += calcTaxes(taxRates[companyData['province']], sumSales);
      }

    }




  console.log(totalResult);
  return totalResult;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);