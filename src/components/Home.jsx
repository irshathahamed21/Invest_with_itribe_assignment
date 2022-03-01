import {useState, useEffect} from "react";
import styles from "./home.module.css";

const Home = () => {
const[data,setData] = useState([])
const[option, setOption] = useState("england-and-wales")
const[date, setDate] = useState(Date.now())
const[dat, setDat] = useState({})

const getData = async() => {
    let res = await fetch("https://www.gov.uk/bank-holidays.json")
    res = await res.json()
    setDat(res)
    console.log(dat)
    
    setData([...Object.values(res)])
   console.log(data)  
 
  
}

// function handleChange(){
  
//   console.log(dat)
//   setData(Object.values(dat))
 

// }



// handleChange()

useEffect(()=> {
    getData()
    
   
},[])

  return (
    <div>
      <div className = {styles.filter}>
       
        <div className = {styles.labe}>Select date</div>
        <select className = {styles.labe}>
          <option value = "england-and-wales"></option>
          <option value = "northern-ireland">Northern Ireland</option>
          <option value = "scotland">scotland</option>
        </select>


      </div>
     {data.filter((e) => ( e.division === option))
     .map((e) => {
       return (
       <div>{e.division}</div>
       )
     })

    }
  

    </div>
  )
}

export default Home