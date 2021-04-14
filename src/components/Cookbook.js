import React from 'react'
import NavigationBar from './NavigationBar'
/*import Footer from './Footer'*/
import "./Cookbook.css"

export default function CookBook(){
 return(
     <div>
         <NavigationBar></NavigationBar>
         <h1 className="cookbooktext">
             CookBook
         </h1>
         <div className="container">
            <div class="item1">Sidebar</div>
            <div class="item2">Pic1</div>
            <div class="item3">Pic2</div>  
            <div class="item3">Pic3</div>
            <div class="item3">Pic4</div>
            <div class="item3">Pic5</div>
            <div class="item3">Pic6</div>



         </div>
         
     </div>
 )   
}

