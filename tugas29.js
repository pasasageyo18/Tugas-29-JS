function regex() {
  let data = "Belajar menimba ilmu programming bersama Niomic";
  let regData = new RegExp("bersama");
  let exData = regData.exec(data);
  console.log(exData);
}
regex();
