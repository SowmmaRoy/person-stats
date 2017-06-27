function updateHeading(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('h1')
    heading.textContent = name
    //heading.innerHTML = name

    const height = f.personHeight.value
    const color = f.personColor.value

    updateStats(name, height, color)
}

function updateStats(stat, height, color){
    const statsInfo = document.querySelector('#stats-info')
    statsInfo.innerHTML = statsInfo.innerHTML + "<br>" + stat + ' ' + height + color
    //document.querySelector('#stats-info').textContent = stat 
    statsInfo.style.color = color
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)

