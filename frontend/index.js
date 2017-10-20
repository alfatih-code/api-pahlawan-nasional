;(function () {
$.get('http://localhost:3000/api/pahlawan', data => {
  data.map(item =>{
    // const id = item.id
    const name = item.name
    const area = item.area
    const die = item.die
    const senjata = item.senjata

    const newRow = `
    <tr>
      <td>${name}</td>
      <td>${area}</td>
      <td>${die}</td>
      <td>${senjata}</td>
    </tr>
    `
         $("#app-table-body").append(newRow)
  })
})
})()