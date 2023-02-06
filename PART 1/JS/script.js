document.addEventListener("DOMContentLoaded", function() {
    loadData();
});
let loadtime = 0;
let sumPrices = 0;
function makeTable(data){
    let table=$("<table class='table table-bordered' />");
    let body=$('<tbody/>');
    for (let i = 0; i < 5; i++){
        let tr=$('<tr/>');
        let col=
        $("<td>"+data[i].title+"</td>"+
        "<td>"+data[i].price+"</td>"
        );
        sumPrices += data[i].price;
        tr.append(col);
        body.append(tr);
    }
    table.append(body);
    table.append("</table>");
    $(".right-side").append(table);
    $("#price").html(sumPrices);
    $("#sumprice").html(sumPrices + 10)
};

function makeRow(data){
    let row = $("<div class='row'>");
    for (let i = 0; i < 5; i++){
        let col1 = $("<div class='col-md-6 mb-3'>")
        col1.append(data[i].title);
        col1.append("</div>");
        let col2 = $("<div class='col-md-6 mb-3'>")
        sumPrices += data[i].price;
        col2.append(data[i].price);
        col2.append("</div>");
        row.append(col1);
        row.append(col2);
        row.append("<hr>");
    }
    $(".right-side").append(row);
    $("#price").html(sumPrices);
    $("#sumprice").html(sumPrices + 10)
}

function loadData(){
    fetch('https://dummyjson.com/products')
    .then(p=>p.json())
    .then(data=>{
        if (loadtime == 0){
            makeRow(data.products);
            loadtime += 1;
        }
    })
};
