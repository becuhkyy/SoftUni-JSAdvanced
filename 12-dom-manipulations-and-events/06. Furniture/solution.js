function solve() {
  const btnElGen = document.querySelector("button")

  btnElGen.addEventListener("click", function (e) {
    const inputEl = document.querySelector("textarea")
    const data = JSON.parse(inputEl.value)

    const productListEl = document.querySelector("table.table tbody")

    data.forEach((item) => {
      const product = document.createElement("tr")
      const productImageCell = document.createElement("td")
      const productImage = document.createElement("img")
      productImage.setAttribute("src", item.img)
      productImageCell.appendChild(productImage)

      const productNameCell = document.createElement("td")
      productNameCell.textContent = item.name

      const productPriceCell = document.createElement("td")
      productPriceCell.textContent = item.price

      const productDecFactorCell = document.createElement("td")
      productDecFactorCell.textContent = item.decFactor

      const productMarkCell = document.createElement("td")
      const productMarkCheckbox = document.createElement("input")
      productMarkCheckbox.setAttribute("type", "checkbox")
      productMarkCell.appendChild(productMarkCheckbox)

      product.append(
        productImageCell,
        productNameCell,
        productPriceCell,
        productDecFactorCell,
        productMarkCell
      )

      productListEl.appendChild(product)
    })
  })

  const shopBtnEl = document.querySelectorAll("button")[1]

  shopBtnEl.addEventListener("click", (e) => {
    const outputEl = document.querySelectorAll("textarea")[1]

    const data = Array.from(
      document.querySelectorAll(".table tbody tr:has(input:checked)")
    ).map((e) => ({
      name: e.childNodes[1].textContent,
      price: Number(e.childNodes[2].textContent),
      decFactor: Number(e.childNodes[3].textContent),
    }))

    console.log(data)
    let output = `Bought furniture: ${data.map((i) => i.name).join(", ")}\n`
    output += `Total price: ${data
      .reduce((acc, el) => acc + el.price, 0)
      .toFixed(2)}\n`
    output += `Average decoration factor: ${
      data.reduce((acc, el) => acc + el.decFactor, 0) / data.length
    }`

    outputEl.value = output
  })
}
