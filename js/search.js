$("select.level, select.gender, select.employees").change(updateEmployees);
$("#myInput").on("keyup", updateEmployees);
function updateEmployees() {
    var level = $('select.level').val();
    var gender = $('select.gender').val();
    var employees = $('select.employees').val();
    var search = $("#myInput").val().toLowerCase();
    console.log(search)
    $('.all-example-list')
        .find('.card')
        .hide()
        .filter(function (v) {
            console.log("yyyyyyyyyyyyyyy" + v)

            var okLevel = true;
            var okGender = true;
            var okEmployees = true;
            var okSearch = true;
            console.log(okSearch);
            if (level !== "all") {
                okLevel = $(this).attr('data-level') === level;
            }
            if (gender !== "all") {
                okGender = $(this).attr('data-gender') === gender;
            }
            if (employees !== "all") {
                okEmployees = $(this).attr('data-employee') === employees;
            }
            if (search !== '') {
                okSearch = $(this).text().toLowerCase().indexOf(search) > -1;
                console.log("YYYYYYYYYYYYY")
            }
            
            //only fade a room if it satisfies all four conditions
            return okLevel && okGender && okEmployees && okSearch;
        }).fadeIn('fast');
}