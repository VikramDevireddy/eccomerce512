import Example from "./navbar";
import "./productdetails.css";
import c1 from './cubook.jpg';
import c2 from './cuuniform.jpg';
import c3 from './cuimg4.jpg';
import c4 from './cuimg5.jpg';


export default function Product(props){
return(
    <div>
        <Example></Example>
         <img  className='cdimg' src={props.eachp.imageSrc}></img>
<h1 className='text'>{props.eachp.name}</h1>
<div className='courceinfo'>
<p className='text1'>{props.eachp.imageAlt}</p>
    </div></div>
)
}