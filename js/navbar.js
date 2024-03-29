export const createNavBar = () => {
  const navbar = ` 
  
    <div class="container">
      <a href="#" class="navbar-brand">Frontend Bootcamp</a>
      <button 
      class="navbar-toggler"
      type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#learn" class="nav-link">What You'll learn</a>
          </li>
          <li class="nav-item">
            <a href="#questions" class="nav-link">Questions</a>
          </li>
          <li class="nav-item">
            <a href="#instructors" class="nav-link">Instructors</a>
          </li>
        </ul>
      </div>
    </div>
 
  
  `

  return navbar
}

// <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
//  </nav>