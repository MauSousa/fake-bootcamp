import '../style.css'


export const newsletter = () => {
  const news = `
    <div class="container">
      <div class="d-md-flex justify-content-between align-items-center">
        <h3 class="mb-3 mb-md-0">
          Sign Up For Our Newsletter
        </h3>
        <div class="input-group news-input">
          <input type="text" class="form-control" placeholder="Enter Email" aria-label="Enter Email"/>
          
          <button class="btn btn-dark btn-lg" type="button">
            Button
          </button>
        </div>
      </div>
    </div>

  `

  return news
}
