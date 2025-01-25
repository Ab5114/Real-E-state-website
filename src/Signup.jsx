import onSubmit from "./Web3forms";
 export default function Signup() {
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Before calling onSubmit");
      await onSubmit(event, "Signed up successfully", null);
     } catch (error) {
      console.error("Error during handleSubmit:", error);
    }
  };

  return (
    <>
      <div className="outer">
        <div className="content">
          <h1>Signup</h1>
          <p>It just takes 30 seconds</p>
          <main>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">UserName</label>
              <input type="text" id="username" name="username" />
              <br />
              <br />

              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" />
              <br />
              <br />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
              <br />
              <br />

              <footer>
                <button type="submit" id="submit">
                  Create Account
                </button>
              </footer>
            </form>
          </main>
        </div>
      </div>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

h1,body{
    margin: 0;
 
     
}
  label {
    font-family:  sans-serif;
    
}
    
h1{
    margin: 0 ;
    font-size: 2.5rem;
    color: rgba(11, 69, 186, 0.764);
       text-align: center;
           font-family:sans-serif;

}
/* .content{
    width: 200px;
   margin: 0 auto;
    
} */
.outer{
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    border: 2px solid lightblue;
    padding: 15px 40px 40px ;
    border-radius: 4px;
        

}
.content p{
    font-size:16px;
    margin-top: 10px ;
    margin-bottom: 32px;
    color: rgba(61, 178, 190, 0.97);
       text-align: center;
           font-family:sans-serif;
        
 }
input ,button#submit
{
    width: 250px ;
    padding: 5px;
 }
#createaccount{
  margin: 14px;
  margin-bottom: 14px;
  color:#555;
  font-size: 1rem;
  text-align: center;
  font-family: 'Lato';

}
#submit
{  
   
     background-color: #236ae5d5;
    box-sizing: content-box;
    border: none;
    cursor: pointer;
    margin-top: 10px;
 

}

#submit:hover{
    background-color: rgba(19, 100, 231, 0.882);
}
label{
    display: block;     
    margin : 5px 0px ;
    font-weight:bold ;
}`}
      </style>
    </>
  );
}
