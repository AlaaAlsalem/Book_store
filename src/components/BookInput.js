 
 const Bookinput = () =>
 {
     return (
         <section>
             <form className="form">
                 <input type= "text" placeholder="Book Title"></input>
                 <input type="text" placeholder="Book Author"></input>
                 <button type="submit">Add the Book</button>
             </form>
         </section>
     );
 }

 export default Bookinput;