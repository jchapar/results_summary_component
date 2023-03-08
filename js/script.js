function getData() {
  fetch('../data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      data.forEach((item) => {
        const categoryEl = document.createElement('div')

        switch (item.category) {
          case 'Reaction':
            categoryEl.classList.add('category', 'reaction')
            break
          case 'Memory':
            categoryEl.classList.add('category', 'memory')
            break
          case 'Verbal':
            categoryEl.classList.add('category', 'verbal')
            break
          case 'Visual':
            categoryEl.classList.add('category', 'visual')
            break
          default:
            break
        }

        categoryEl.innerHTML = `
        <div class="category-title">
          <img src="${item.icon}" alt="${item.category}" />
          <p>${item.category}</p>
        </div>
        <div class="category-stat">
          <p>${item.score}<span> / 100</span></p>
        </div>
        `

        document.querySelector('.categories').appendChild(categoryEl)
      })
    })
}

getData()
