// let student = new Object();
// student={
//     name_:"sanyam",
//     age : 23
// }
// let employe = {
//     name_:"sanskar",
//     age:23
// };
// alert(student.name_);
// alert(student.age);
// student.isAdmin = true;
// alert(student.isAdmin);
// alert(employe.name_);
// alert(employe.age);
// delete student.isAdmin;
// alert(student.isAdmin);
// // employe."loves car" = true; //this syntax wont work;
// employe["loves car"]=true;
// prompt(`does ${employe.name_} likes car`);
// alert(employe["loves car"]);
// delete employe["loves car"];
// let key = "loves car";
// let ans = confirm(`does ${employe.name_} likes car`);
// employe[key] = ans;
// alert(employe["loves car"]);
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   let sum =0;
//   for(let key in salaries){
//     sum+=salaries[key];
//   }
//   alert(sum);
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  function multiplyNumeric(obj){
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
          obj[key] *= 2;
        }
      }
  }
  for(let key in menu){
    alert(menu[key]);
  }