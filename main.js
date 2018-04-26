window.addEventListener("load", function() {

    let next_button = document.querySelector('#button_next');
    next_button.addEventListener("click", nextMonth);

    let previous_button = document.querySelector('#button_previous');
    previous_button.addEventListener("click", previousMonth);

    createCalendar(month_number, year_number);

    let tds = document.querySelectorAll('.dias > td');
    let tds_array = Array.from(tds);
    tds_array.forEach(t => (t.addEventListener("click", paintSelect)));

});

function paintSelect(event) {

    let previous_active = document.getElementsByClassName("active")[0];
    if (previous_active != undefined) {
        previous_active.classList.remove("active");
    }
    event.target.classList.add("active");

}

let date = new Date();

// let year_number = date.getFullYear();
let year_number = date.getFullYear();
// let month_number = date.getMonth();
let month_number = date.getMonth();

let week_days = new Array(7);
week_days[0] = 'Domingo';
week_days[1] = 'Lunes';
week_days[2] = 'Martes';
week_days[3] = 'Miercoles';
week_days[4] = 'Jueves';
week_days[5] = 'Viernes';
week_days[6] = 'Sabado';

let month_name = new Array(12);
month_name[0] = 'Enero';
month_name[1] = 'Febrero';
month_name[2] = 'Marzo';
month_name[3] = 'Abril';
month_name[4] = 'Mayo';
month_name[5] = 'Junio';
month_name[6] = 'Julio';
month_name[7] = 'Agosto';
month_name[8] = 'Septiembre';
month_name[9] = 'Octubre';
month_name[10] = 'Noviembre';
month_name[11] = 'Diciembre';

let month = document.querySelector('#mes_nombre');


function nextMonth() {
    cleanCalendar();
    let month = document.querySelector('#mes_nombre');
    let actual_month = month.getAttribute('data-month');
    let next_month = parseInt(actual_month) + 1;
    if (next_month > 11) {
        next_month = 0;
        year_number++;
    }
    createCalendar(next_month, year_number);
}

function previousMonth() {
    cleanCalendar();
    let month = document.querySelector('#mes_nombre');
    let actual_month = month.getAttribute('data-month');
    let next_month = parseInt(actual_month) - 1;
    if (next_month < 0) {
        next_month = 11;
        year_number--;
    }
    createCalendar(next_month, year_number);
}

function cleanCalendar() {
    let dias = document.querySelectorAll('.dias > td');
    dias.forEach(d => (d.innerText = ""));
}

function createCalendar(month_number, year_number) {
    let first_day_month = new Date(
        year_number,
        month_number,
        1);

    let month = document.querySelector('#mes_nombre');

    let day_of_week_first_day_month = first_day_month.getDay();

    const nodeList_of_td = document.querySelectorAll('td');

    const array_of_td = Array.from(nodeList_of_td);

    let month_days = new Date(year_number, month_number + 1, 0);

    let amount_of_days = month_days.getDate();

    let contador = day_of_week_first_day_month;

    for (let index = 1; index <= amount_of_days; index++) {
        if (index != null) {
            document.querySelector('[id="' + contador + '"').innerText = index;
        }
        contador++;
    }

    month.innerText = month_name[month_number] + " - " + year_number;
    month.setAttribute('data-month', month_number)
    paintCalendar();
}

function paintCalendar() {
    let td = document.querySelectorAll('.dias > td');
    td.forEach(d => d.removeAttribute('class'));
    let td_array = Array.from(td);
    let no_day = td_array.filter(d => (d.innerText == ""));
    no_day.forEach(d => d.setAttribute('class', 'no_day'));
    paintToday();
}

function paintToday() {
    let today_date = new Date();
    let month = document.querySelector('#mes_nombre');
    let actual_month = month.getAttribute('data-month');
    if (today_date.getMonth() == actual_month) {
        let td = document.querySelectorAll('.dias > td');
        let td_array = Array.from(td);
        let today = td_array.filter(d => (d.innerText == today_date.getDate()))[0];
        today.setAttribute('class', 'today active');

    }
}