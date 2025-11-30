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