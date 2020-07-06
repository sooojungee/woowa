console.log('1');

// input2번에서 focus out 될 때 input1값과 비교하기

function checkInputValue() {
    const input2 = document.querySelector("input[name='second_name']");

    input2.addEventListener("focusout", (e) => {
        const input1 = document.querySelector("input[name='first_name']");

        const input1Value = input1.value;
        const input2Value = e.target.value;
        const messageNode = document.querySelector('.message');
        if(input1Value === input2Value) {
            messageNode.innerHTML = '';
            return;
        }
        messageNode.innerHTML = '<span>올바른 값을 넣으세요</span>';
        // messageNode.style.border = '2px solid #ccc';
        // css에 클래스 넣는게 조아
        // class list (addClass, removeClass)
    });
}

checkInputValue();