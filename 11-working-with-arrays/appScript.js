'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
let currentAccount = '';
let sorted = false;

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? [...acc.movements].sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    const movHTML = `<div class="movements__row">
      <div class="movements__type movements__type--${movType}">${i + 1} ${movType}</div>
      <div class="movements__date">${i + 1} days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movHTML);
  });
};

// create usernames and add it to each account object
const createUserNames = function (arr) {
  arr.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};

createUserNames(accounts);

// calculate an display the account balance
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, item) => acc + item, 0);
  labelBalance.textContent = `${account.balance}€`;
};

// calcualte and display summary
const calcDisplaySummary = function ({ movements, interestRate }) {
  const income = movements.filter(mov => mov > 0).reduce((acc, curr) => acc + curr);

  const withdrawal = movements.filter(mov => mov < 0).reduce((curr, acc) => curr + acc);

  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, curr) => acc + curr);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${withdrawal}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc) {
  displayMovements(acc);

  // DISPLAY balance
  calcDisplayBalance(acc);

  // DISPLAY summary
  calcDisplaySummary(acc);
};

// LOGIN FEATURE
const displayAllData = function (currentAccount) {
  // DISPLAY UI AND WELCOME MESSAGE
  labelWelcome.textContent = `Welcom back, ${currentAccount.owner.split(' ')[0]}`;

  // clear inpit fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  // DISPLAY movements
  containerApp.style.opacity = 100;
  // update the UI

  updateUI(currentAccount);
};

// event handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) displayAllData(currentAccount);
});

currentAccount = account1;
displayAllData(currentAccount);

// transfer Mony
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);

  if (
    receiverAccount &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
});

// close an account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // hide UI
    containerApp.style.opacity = 0;
    // delete account
    accounts.splice(index, 1);
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

// Loan functionality

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  const elegForLoan = currentAccount?.movements.some(mov => mov >= amount * 0.1);
  if (amount > 0 && elegForLoan) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
