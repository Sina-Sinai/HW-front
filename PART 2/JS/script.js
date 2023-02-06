document.addEventListener("DOMContentLoaded", function() {
    loadData();
});

function drop1(){
    $("#gridd").html("5");
    $("#showing").html("5");
};

function drop2(){
    $("#gridd").html("10");
    $("#showing").html("10");
};

function makeTable(data){
    let table=$("<table class='table table-bordered table-striped' />");
    let header=$("<thead><tr><th>Action</th><th>#</th><th>Name</th><th>Age</th><th>View</th></tr></thead>");
    table.append(header);
    let body=$('<tbody/>');
    $.each(data,function(index,value){
        let tr=$('<tr/>');
        let col=
        $("<td><button class='btn btn-danger me-1'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'><path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/><path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'/></svg></button><button class='btn btn-primary ms-1'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x' viewBox='0 0 16 16'><path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/></svg></button></td>"+
        "<td>"+value.id+"</td>"+
        "<td>"+value.firstname+" "+value.lastname+"</td>"+
        "<td>"+value.age+"</td>"
        );
        tr.append(col);
        body.append(tr);
    });
    table.append(body);
    $("#info-grid").append(table);
}

function loadData(){
    fetch('https://dummyjson.com/users')
    .then(p=>p.json())
    .then(data=>{
        makeTable(data.users);
    })
}