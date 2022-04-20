console.log("Enter 10 digits");
process.stdin.once('data', (numbers) => {
    var phoneNumber = formatPhoneNumber(numbers)
    console.log(`the entered numbers are ${typeof(phoneNumber)}`);
    console.log(phoneNumber);
    process.exit();
});