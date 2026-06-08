import "./App.css";
import Input from "./Components/Input";
import Text from "./Components/Text";


function App() {
  let count = 10
  let firstName = "nika"
  let stringArr = ["nika","luka","mariami"]
  let nums = [1,2,3,4,5]
  let obj = {
    name:"giorgi",
    age:10
  }
  let exseption = 1+1
  function foo(){
    return 5
  }

  function statemanet(gio = false){
    if(gio){
      return "ჭეშმარიტია"
    }else{
      return "არ არის ჭეშმარიტი"
    }
  }
  return (
    <>
      {/* <Text />
      <Input /> */}
      {/* {count} */}
      {/* <h1>{firstName}</h1> */}
      {/* <h2>{stringArr}</h2> */}
      {/* <h3>{nums}</h3> */}
      {/* <h4>{obj.name}</h4>
      <h4>{obj.age}</h4> */}
      {/* <h1>{exseption}</h1> */}
      {/* {foo() + 10} */}
      {/* <h2>{false ? "ჭეშმარიტია" : "არ არის ჭეშმარიტი"}</h2> */}
      {/* {statemanet()} */}

      <h1 style={{backgroundColor:"red"}}>hello world</h1>
      {/* <h1 className="first">hello world</h1> */}
      <h1 style={styles.first}>hello world</h1>
    </>
  );
}

export default App;

const styles = {
  first:{
    backgroundColor:"red",
    color:"blue"
  },

}
