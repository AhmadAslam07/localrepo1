import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
   <div className="caintainer">
    <form className="row g-3 ">
    
  <div className="col-md-7 ">
    <label for="inputEmail4" className="form-label"     >Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-7">
    <label for="inputName4" className="form-label">FullName</label>
    <input type="Name" className="form-control" />
  </div>
  <div className="col-7">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
 
  <div className="col-md-7">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-7">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-7  ">
  <label for="formFile" class="form-label">Upload Your Document</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
  

  <div className="col-06  ">
    <button type="submit" className="btn btn-outline-secondary">Submit</button>
  </div>

</form>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
}

export default App;
