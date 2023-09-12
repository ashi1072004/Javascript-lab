const provinces = {"Punjab" : {
    "Faisalabad" : {
        "GC University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Agriculture University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Punjab University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}},
    "Lahore" : {
        "GC University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "UET Lahore" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Punjab University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}},
    "Multan" : {
        "GC University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Bahauddin Zakariya University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Punjab University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}}
},
"KPK" : {
    "Peshawar" : {
        "GC University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Peshawar University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "UET Peshawar" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}},
    "Kohat" : {
        "KUST University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "KMU Medical Institute" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Cadet College Kohat" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}},
    "Mardan" : {
        "Abdul Wali Khan University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Women University Mardan" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "KPK University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}}
},
"Sindh" : {
    "Karachi" : {
        "Agha Khan University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Iqra University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "University of Karachi" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}},
    "Hyderabad" : {
        "GC University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Isra University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "University of EAST" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}},
    "Sukkur" : {
        "Sukkur IBA University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Sukkur institute of Science and Tech" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "GC University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}}
},
"Balochistan" : {
    "Quetta" : {
        "University of Balochistan" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Agriculture University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Al-Hamd Islamic University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}},
    "Chaman" : {
        "GC University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Allama Iqbal Open University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Chaman Cadet College" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}},
    "Gwadar" : {
        "University of Gwadar" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "NUML Gwadar Campus" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()},
        "Allama Iqbal Open University" : {
            "BSCS" : Array(), "BSIT" : Array(), "BSSE" : Array()}}
}};
const arr = Array(Array('Ali', 52, 68, 45, 56, 45),
                Array('Hamza', 48, 60, 51, 49, 28),
                Array('Usman', 50, 78, 59, 43, 58),
                Array('Fatima', 54, 65, 40, 19, 37),
                Array('Ayesha', 34, 43, 31, 19, 27));

for (var province in provinces){
    row = provinces[province];
    for(var city in row){
        for(var uni in row[city]){
            for(var dep in row[city][uni]){
                for(var std of arr){
                    row[city][uni][dep].push(std);
                }
            }
        }
    }
}
// console.log(provinces);
var u = 1, roll = 577801, total=320, b=0, j=0;
for (var province in provinces){
    row = provinces[province];
    for(var city in row){
        for(var uni in row[city]){
            var col9 = "<div class='col-9 mask my-5 pb-4' id='uni"+u+"'><h2 class='uni pt-3'>"+uni+"</h2></div>"; u++;
            document.querySelector("#row").insertAdjacentHTML('beforeend', col9);
            for(var dep in row[city][uni]){
                var table = "<h3 align='center' class='pt-4'>"+dep+"</h3><div class='table-responsive px-3'><table id='tab' class='table text-nowrap mb-0'><thead><tr><th>Roll no.</th><th>Name</th><th>VB marks</th><th>OS marks</th><th>SE marks</th><th>Stat marks</th><th>Web Tech marks</th><th>Total marks</th><th>Obtained marks</th><th>%age</th><th>Grade</th></tr></thead><tbody class='body'></tbody></table></div>";
                document.querySelectorAll(".mask")[j].insertAdjacentHTML('beforeend', table);
                var c = 0;
                for(var std in row[city][uni][dep]){
                    document.querySelectorAll('.body')[b].insertAdjacentHTML('beforeend', '<tr></tr>');
                    var col = "<td>"+roll+"</td>";
                    document.querySelectorAll('.body')[b].children[c].insertAdjacentHTML('beforeend', col);
                    var ob=0; roll++;
                    for(var s of row[city][uni][dep][std]){
                        if(typeof s == 'number'){
                            ob += s;
                        }
                        col = "<td>"+s+"</td>";
                        document.querySelectorAll('.body')[b].children[c].insertAdjacentHTML('beforeend', col);
                    }
                    var per = Math.round(ob/total*100), g;
                    switch(true){
                        case(per>=90 && per<=100):
                        g = 'A+';
                        break;
                        case(per>=80 && per<90):
                        g = 'A';
                        break;
                        case(per>=70 && per<80):
                        g = 'B';
                        break;
                        case(per>=60 && per<70):
                        g = 'C';
                        break;
                        case(per>=50 && per<60):
                        g = 'D';
                        break;
                        default:
                        g = 'F';
                    }
                    col = "<td>"+total+"</td><td>"+ob+"</td><td>"+per+"</td><td>"+g+"</td>";
                    document.querySelectorAll('.body')[b].children[c].insertAdjacentHTML('beforeend', col);
                    c++;
                }
                b++;
            }
            j++;
        }
    }
}