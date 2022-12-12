

/*function List() {
    const array=[1,2,3,4,5];
    const map1=array.map(x=>x)
    console.log(map1)
}*/
import '../App.css';
  function List() {
    const details=[
        {
        id:1,
        name:'Vimal',
        roll:'23'
    },
    {
        id:2,
        name:'Cathy',
        roll:'24'
    },
    {
        id:3,
        name:'Manoj',
        roll:'25'
    },
];
    return(
   <div>
   {details.map(data =>
        (
        <div>
        <p style={{backgroundColor:"pink"}}>My name is {data.name}</p>
        <p style={{backgroundColor:"skyblue"}}> my roll no is {data.roll}</p>
        </div>))
  } 
   </div>
  )
}
  export default List;