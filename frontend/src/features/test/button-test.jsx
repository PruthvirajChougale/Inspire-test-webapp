import Button from "../../components/button";
function ButtonTest(){
    return(
        <>
            <Button variant='primary' onclick={()=>console.log("clicked")}>
                Click me!!!
            </Button>
            <div></div>
        </>
    )
}
export default ButtonTest;
