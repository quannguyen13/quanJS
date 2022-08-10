/**
 * A strategy pattern in programming involves having multiple "strategies" or special methods that correspond to the same action.
 * We will look at a strategy pattern for allowing users to checkout.
 *
 * Our goal here is to run a generic checkout for various users
 * We must decide which method or strategy to use during checkout
 * The allowable strategies are already provided below
 * @param checkout should call a more appropriate checkout method
 * @param checkoutCC should add user's lastFour as part of record
 * @param checkoutPaypal should add user's email as part of record
 * @param checkoutWallet should adjust user's wallet and add record
 *
 *
 * GOAL 1: add logic to @param checkout to decide appropriate method to call
 * GOAL 2: add logic to non-generic methods to save records into @param checkoutRecords list
 */

// START HERE

  // Iterate through our users and perform a proper checkout for each

  /** Hypothetical DB of users */
  const users = [
    { id: 1, paymentType: "visa", lastFour: "1234", wallet: 20 },
    { id: 2, paymentType: "masterCard", lastFour: "5678", wallet: 0 },
    { id: 3, paymentType: "paypal", email: "noemail1@gmail.com", wallet: 0 },
    { id: 4, paymentType: "paypal", email: "noemail2@gmail.com", wallet: 20 },
  ];
  
  /** Hypothetical DB of stored records */
  const checkoutRecords = [
    {
      userId: 1,
      userWallet: 10,
      cost: 10,
      paymentMethod: "cc",
      lastFour: "1234",
    },
    {
      userId: 3,
      userWallet: 0,
      cost: 10,
      paymentMethod: "paypal",
      email: "noemail1@gmail.com",
    },
  ];
  

// for (let i = 0; i < checkoutRecords.length; i++) {
//   const element = checkoutRecords[i].userWallet;
//   console.log(element);
// }




const checkout = (user, cost) => {
  user = { id: 1, paymentType: "visa", lastFour: "1234", wallet: 20 }
  if(user.wallet >= cost){
    checkoutWallet(user, cost)
  }
  /**
   * add decision logic for calling each of the methods below,
   * in case wallet covers the cost, use the wallet method for checkout
   * */
};

const checkoutCC = (user, cost) => {
  if(user.lastFour = true){
    checkoutCC(user, cost)
  }
};
const checkoutPayPal = (user, cost) => {
  // logic to add record
};
const checkoutWallet = (user, cost) => {
  if(user.wallet >= 0){
    checkoutCC(user, cost)
  }
  // wallet adjustment
  // logic to add record
};

// Iterate through our users and perform a proper checkout for each
const callAllCheckouts = () => {
  // Each checkout call should look like this
  // const testUser = users[0];
  // checkout(testUser, 10);
  for ( i = 0; i < users.lenght; i++){
    checkout(users[i], 10);
  }
};

