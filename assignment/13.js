function calculateBill(costPerDish, numPeopleSharing) 
{
    const totalBill = costPerDish * numPeopleSharing;
    const billPerPerson = totalBill / numPeopleSharing;
    return 
    {
        totalBill:totalBill, 
        billPerPerson: billPerPerson
    }; 
}

const costPerDish = 100;
const numPeopleSharing = 4;
const bill = calculateBill(costPerDish, numPeopleSharing);
console.log(bill);
