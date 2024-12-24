let dis = document.getElementById('inpbox');

function addtolast(value) {
    dis.value += value;
}
function del() {
    let currentresult = dis.value;
    dis.value = currentresult.slice(0, -1);
}

function ac() {
    dis.value = '';
}
function cal() {
    try {
        let res = eval(dis.value);
        dis.value = res;
    } catch (e) {
        dis.value = 'Error';
    }
}
