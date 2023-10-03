// let time = new Date().getTime();
// let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
// let [hour, minute, second] = new Date().toLocaleString([], { timeZone: "Asia/Dhaka" })
// let [dayName, month, day, year, allTime] = new Date()


// .toLocaleTimeString("en-US")
// .split(/:| /);

const today = new Date();
console.log(today);
const year = today.getFullYear();
let month = today.getMonth(); // Months start at 0!
let day = today.getDate();



const mounthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// let thisMonth = parseInt(month) + 1;
let thisMonth = parseInt(month);
// console.log(month);
let thisMonthName = mounthNames.at(thisMonth)

// const 

// console.log(mounthNames.at(0));
// console.log(mounthNames.at(month));
// console.log(mounthNames.at(thisMonth));
// console.log(typeof (thisMonth));

export default {day, thisMonthName, year}