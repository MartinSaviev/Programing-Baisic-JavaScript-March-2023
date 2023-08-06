function openClosedOffice(input) {

    let time = Number(input[0]);
    let dayOfWeek = String(input[1]);

    let workHours = '';
    if (time >= 10 && time <= 18) {
        if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' ||
            dayOfWeek === 'Thursday' || dayOfWeek === 'Friday' || dayOfWeek === 'Saturday') {

            workHours = 'open'
        }
        else if (dayOfWeek === 'Sunday') {
            workHours = 'closed';
        }
    } else {
        workHours = 'closed';
    }

    console.log(workHours);

}
openClosedOffice(["11", "Sunday"])





