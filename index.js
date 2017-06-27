function handleSubmit(ev){
    ev.preventDefault()

    const f = ev.target
       
    const name = f.personName.value
    const height = f.personHeight.value
    const color = f.personColor.value

    const statsContainer = document.querySelector('#stats-container')

    const completeList = renderList(name, height, color)

    statsContainer.appendChild(completeList)
    // updateStats(name, height, color)

}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)

function renderColor(inputColor){
    const colorBlock = document.createElement('div')
    colorBlock.style.backgroundColor = inputColor
    colorBlock.style.width = "5rem"
    colorBlock.style.height = "8rem"
    return colorBlock
}

function renderListItem(inputItem){
    const itemName = document.createElement('li')
    itemName.textContent = `${inputItem}`
    return itemName
}

function renderList(name,height,color){
    const fullList = document.createElement('ul')
    const nameListItem = renderListItem(name)
    const heightListItem = renderListItem(height)
    const colorListItem = renderListItem(color)
    const colorBlock = renderColor(color)

    fullList.appendChild(nameListItem)
    fullList.appendChild(heightListItem)
    fullList.appendChild(colorListItem)
    fullList.appendChild(colorBlock)

    return fullList
}


/*const list = document.createElement('ul')
const nameItem = document.createElement('li')
nameItem.textContent = `Name: ${name}`
list.appendChild(nameItem)

const ageItem = document.createElement('li')
ageItem.textContent = 'Age: ${age}'
list.appendChild(ageItem)

const colorItem = document.createElement('li')
colorItem.textContent= "Favorite Color '
colorItem.style.backgrwoundColor= favoriteColor
list.appendChild(colorItem)

const colorDiv = document.createElement('div')
colorDiv.style.backgroundColor = favoriteColor
colorDiv.style.width = "6rem"
colorDiv.style.height = ""
colorItem. 

const stats = document.querySelector(#'stats')
stats.appendChild(list)

//Add Statde in an unordered List//
//Display color in an empty Div//
*/