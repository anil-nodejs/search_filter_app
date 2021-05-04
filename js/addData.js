let emp_count = all_json_data_list.length
//  all render data card lists
for (var l = 0; l < emp_count; l++) {
    $('.all-example-list').
        append(' <div class="card" style="width: 18rem;"><div class= "card-body"><h5 class="card-title empname"></h5><b></b><p class="card-text empdesc"></p></div></div >');
}
//add the employee name in data card list
$('.all-example-list>.card>.card-body>.empname').each(function (i, obj) {
    $(obj).text(all_json_data_list[i].name);
});
// add the profile of employees
$('.all-example-list>.card>.card-body>b').each(function (i, obj) {
    $(obj).text(all_json_data_list[i].profile);
});
//add the department, name & gender
$('.all-example-list>.card').each(function (i, obj) {
    $(obj).attr('data-level', all_json_data_list[i].department);
    $(obj).attr('data-employee', all_json_data_list[i].name);
    $(obj).attr('data-gender', all_json_data_list[i].gender);
});
//add the employee description
$('.all-example-list>.card>.card-body>.empdesc').each(function (i, obj) {
    $(obj).text(all_json_data_list[i].desc);
    console.log(i);
});

// dynamic add the option name list
$.each(all_json_data_list, function (index, value) {
    $('#empList').append('<option value="' + all_json_data_list[index].name + '">' + all_json_data_list[index].name + '</option>');
});
