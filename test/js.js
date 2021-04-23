const text = document.getElementById('text');
text.value = localStorage.getItem('text')
text.oninput = () => {
    localStorage.setItem('text', text.value)
}
//////////////////////////////////////////////////////////////

const forms = document.forms.forma
const obj = JSON.parse(localStorage.getItem('form'));
for (let key in obj) {
    forms[key].value = obj[key]
}
forms.onchange = () => {
    const obj = {}
    for (let item of forms) {
        if (item.name === 'radio') {
            if (item.checked) {
                obj[item.name] = item.value
            }
        } else {
            obj[item.name] = item.value
        }
    }

    localStorage.setItem('form', JSON.stringify(obj))
}
///////////////////////////////////////////////////////////////////
const store = document.getElementById('store');
const arr = JSON.parse(localStorage.getItem('store')) || [];
let index = arr.length - 1;
store.value = arr[index] || ''
document.getElementById('minus').onclick = () => {
    const arr = JSON.parse(localStorage.getItem('store')) || [];
    index--
    if (arr[index]) {
        store.value = arr[index]

    } else {
        index++
        store.value = arr[0] || ''
    }
}
document.getElementById('plus').onclick = () => {
    const arr = JSON.parse(localStorage.getItem('store')) || [];
    index++
    if (arr[index]) {
        store.value = arr[index]
    } else {
        index--
        store.value = arr[arr.length - 1] || ''
    }
}


document.getElementById('save').onclick = () => {
    const fromStorage = JSON.parse(localStorage.getItem('store')) || []
    fromStorage.push(store.value)
    index = fromStorage.length - 1;
    localStorage.setItem('store', JSON.stringify(fromStorage))

}
//////////////////////////////////////////////////////////////////////////////

const users = document.getElementById('users');
const form = document.forms.user;
const showUsers = () => {
    users.innerText = null
    const arrUser = JSON.parse(localStorage.getItem('users')) || [];
    arrUser.forEach((value, index) => {
        const div = document.createElement('div');
        const user = document.createElement('div');
        user.innerText = JSON.stringify(value)
        div.appendChild(user)
        const button = document.createElement('button');
        button.innerText = 'edit'
        button.onclick = function () {
            const objUser = JSON.parse(this.parentElement.firstElementChild.innerHTML);
            console.log(this.parentElement);
            console.log(objUser);
            const arr = JSON.parse(localStorage.getItem('users'));
            arr.splice(index, 1)
            localStorage.setItem('users', JSON.stringify(arr))
            for (let key in objUser) {
                form[key].value = objUser[key]
            }

        }
        const del = document.createElement('button');
        del.innerText = 'del'
        del.onclick = () => {
            const arr = JSON.parse(localStorage.getItem('users'));
            arr.splice(index, 1)
            localStorage.setItem('users', JSON.stringify(arr))
            showUsers()
        }

        div.appendChild(button)
        div.appendChild(del)
        users.appendChild(div)
    })
}
showUsers()
document.getElementById('btn').onclick = () => {
    const arr = JSON.parse(localStorage.getItem('users')) || []
    const obj = {}
    for (let item of form) {
        obj[item.name] = item.value
    }
    arr.push(obj)
    localStorage.setItem('users', JSON.stringify(arr))
    form.reset()
    showUsers()
}
