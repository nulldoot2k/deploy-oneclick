const nodeList = document.querySelector("#node__list")
const checkBtn = document.querySelector("#check")

const inputNumber = document.querySelector(".quantity-input");
if(inputNumber) {
  inputNumber.addEventListener("input", function(event) {
    const number = event.target.value;
    console.log(nodeList);
    console.log(number);
    if(number >= 1 ){
      const children = [];
      for(let i = 0; i < number; i++) {
        children.push(`
        <div id="show-hide" class="row">
          <div class="col"><input type="text" name="" id="ip_public_${i}" placeholder="Nhập Ip Public"></div>
          <div class="col"><input type="text" name="" id="" placeholder="Nhập Ip Private"></div>
          <div class="col"><input type="text" name="" id="" placeholder="Nhập tên node"></div>
          <div class="col"><button type="button" class="btn btn-success">import key</button></div>
        </div>
        `)
      }
      nodeList.innerHTML = children.join("")
     } else{
      nodeList.innerHTML = "";
    }
  })
}


checkBtn.addEventListener("click", function () {
  const ipPublics = []
  for(let i = 0 ;i < nodeList.childElementCount; i++) {
    const ipPublicInput = document.querySelector("#ip_public_" + i);
    if(ipPublicInput)
      ipPublics.push(ipPublicInput.value)
  }
  console.log(ipPublics)
})
