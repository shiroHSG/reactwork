function ArrowFun() {
    const func1 = function(a,b) {
        return a+b;
    }

    const func2 = (a,b) => {
        return a+b;
    }

    const func5 = num => value => num+value;
}

export default ArrowFun;