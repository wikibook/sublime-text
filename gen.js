function makeTable(src, $dst) {
    var $table = $("<table>");
    $table.addClass("table table-condensed table-bordered");
    var $tableCaption = $("<tr>");
    $tableCaption.addClass("info");
    $tableCaption.html("<td colspan=\"3\"><h4>" + src.category + "</h4></td>");
    $table.append($tableCaption);
    for (var n in src.items) {
        var $row = $("<tr>");
        $row.html("<td>" + src.items[n].desc + "</td><td>" + src.items[n].osx + "</td><td>" + src.items[n].windows + "</td>");
        $table.append($row);
    }
    $dst.append($table);
}

function colNames($dst) {
    var $table = $("<table>");
    $table.addClass("table table-condensed table-bordered");
    var $row = $("<tr>");
    $row.addClass("active");
    $row.html("<td>기능</td><td>맥 OS X</td><td>윈도우즈 / 리눅스</td>");
    $table.append($row);
    $dst.append($table);
}
