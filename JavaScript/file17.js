function main(){
    let b=1
    function sub()//this sub function is called closure that always have  access to parent function
    {
        return b++;
    }
    return sub;
}
const f1=main()
console.log(f1())
console.log(f1())