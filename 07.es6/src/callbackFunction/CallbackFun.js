function CallbackFun() {
    //콜백 함수 : 매개변수에 전달하는 함수

    //forEach() : 배열을 콜백함수를 이용하여 반복
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((value, index) => 
        console.log(`${index} : ${value}`)
    )

    // map() : 콜백함수에서 리턴한 값들을 새로운 배열로 만드는 함수
    let arrMap = numbers.map((v, i)=>v*i)

    //filter() : 콜백함수의 리턴값이 true인 것들로만 새로운 배열을 만드는 함수
    let oddNum = numbers.filter(v => v%2==1)
}

export default CallbackFun;