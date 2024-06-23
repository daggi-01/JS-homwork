const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

/* 1번 이 모자란 제자를 이헤 헤주시옵소서 */
// function emailInput(node, isValid) {
//   if (!isValid) {
//     node.classList.add("is--invalid");
//   } else {
//     node.classList.remove("is--invalid");
//   }
// }

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


/* 3-4번 로그인 버튼 클릭시 user(id, pw)값과 input 값비교!! */
const emailInput = document.getElementById("userEmail");
const pwInput = document.getElementById("userPassword");
const loginBtn = document.getElementById("Btn-login");

loginBtn.addEventListener("click", function () {
  const emailValue = emailInput.value.trim();
  const pwValue = pwInput.value.trim();

  if (emailValue === user.id && pwValue === user.pw) {
    alert("로그인 성공!");
  } else {
    alert("이메일이 또는 비밀번호가 올바르지 않습니다");
  }
});
