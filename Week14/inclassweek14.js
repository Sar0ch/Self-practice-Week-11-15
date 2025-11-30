//1.input parameter - empty
const today = new Date()
console.log(today) //2025-11-19T02:30:53.178Z

//2. input parameter - number of millisecond
const now = new Date(Date.now()) //Date.now() - return millisecond of current datetime
console.log(now) //2025-11-19T02:32.426Z

//3. input parameter -  date string
const dateISO1 = new Date("2025-05-02T17:15:35.100")
console.log(dateISO1) //2025-05-02T10:15:35.100Z

const dateISO2 = new Date("2025-05-02T17:15:35.100Z")
console.log(dateISO2) //2025-05-02T17:15:35.100Z

//4. input parameter - year, monthIndex (0-11), day, hh,mm,ss, ms
const customDate1 = new Date(2025, 1, 2, 18, 15, 0, 150)
console.log(customDate1) //2025-02-02T11:15:00.150Z

const customDate2 = new Date(2025, 1, 2, 18, 15, 0, 150)
console.log(customDate2) //2025-02-02T11:15:00.150Z

//Date Format
//1. toString()
console.log(customDate1.toString()) 
//Sun Feb 02 2025 18:15:00 GMT+0700 (Indochina Time)

//2. toISOString()
console.log(customDate1.toISOString()) 
//2025-02-02T11:15:00.150Z

//3. toLocaleString()
console.log(customDate1.toLocaleString()) 
//2/2/2025, 6:15:00 PM

console.log(
  customDate1.toLocaleString("th-TH", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  })
) //2/2/68 18:15

//4. Intl.DateTimeFormat()
const enFormatter = Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Asia/Bangkok",
})
console.log(enFormatter.format(customDate1)) //2/2/25, 6:15 PM

//resolvedOption()
const localeOptions = Intl.DateTimeFormat().resolvedOptions()
console.log(localeOptions.timeZone) //Asia/Bangkok
console.log(localeOptions.locale)   //en-US

//-----------------------------------------
// Compare Date
//-----------------------------------------

const openTime = new Date("2025-11-19T12:00:00")
const closeTime = new Date("2025-11-20T12:00:00")
const openTimeCopy = new Date("2025-11-19T12:00:00")
const bookingTime = new Date("2025-11-20T11:59:00")

//using >, <, >=,<= with date object
if (openTime < closeTime) console.log("opentime comes before closetime")
else console.log("opentime comes after closetime") 

//not using === to check object equality
if (openTime === openTime) console.log("both opentime is the same")
else console.log("both opentime are different")

if (openTime === openTimeCopy) console.log("opentime is the same as aTime")
else console.log("opentime is not the same as aTime")

//compare dateTime using getTime()
if (openTime.getTime() === openTimeCopy.getTime())
  console.log("both openTime and aTime are the same ")

//-----------------------------------------
// Validate booking time
//-----------------------------------------

const bookingOpen = new Date("2025-11-19T12:00:00")
const bookingClose = new Date("2025-11-20T12:00:00")
const bookingCheck = new Date("2025-11-19T11:59:59")

if (bookingCheck >= bookingOpen && bookingCheck <= bookingClose) {
  console.log("valid booking time")
} else console.log("invalid booking time")

//-----------------------------------------
// Dialog
//-----------------------------------------

async function showDialog() {
  return new Promise((resolve) => {
    let answer
    const dialog = document.getElementById("messageDialog")
    const okBtn = document.getElementById("okBtn")
    const cancelBtn = document.getElementById("cancelBtn")

    okBtn.addEventListener("click", () => {
      answer = okBtn.textContent
      dialog.close()
      resolve(answer)
    })

    cancelBtn.addEventListener("click", () => {
      answer = cancelBtn.textContent
      dialog.close()
      resolve(answer)
    })

    dialog.showModal()
  })
}

const dialogResult = await showDialog()
console.log(dialogResult)

if (dialogResult.toLowerCase().includes("ok")) console.log("goto ok action")
else if (dialogResult.toLowerCase().includes("cancel"))
  console.log("goto cancel action")

console.log("good bye")
