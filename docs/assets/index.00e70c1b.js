const S=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}};S();const E=()=>`

  <div class="container">
    <div class="row text-center g-4">
      <div class="col-md mb-2">
        <div class="card bg-dark text-light">
          <div class="card-body text-center">
            <div class="h1 mb-3">
              <i class="bi bi-laptop"></i>
            </div>
            <h3 class="card-title">Virtual</h3>
            <p class="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
              quisquam vero nisi saepe accusantium sint at quis, quasi quae.
              Magnam sit saepe voluptatem culpa magni.
            </p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      <div class="col-md mb-2">
        <div class="card bg-secondary text-light">
          <div class="card-body text-center">
            <div class="h1 mb-3">
              <i class="bi bi-person-square"></i>
            </div>
            <h3 class="card-title">Hybrid</h3>
            <p class="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
              quisquam vero nisi saepe accusantium sint at quis, quasi quae.
              Magnam sit saepe voluptatem culpa magni.
            </p>
            <a href="#" class="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
      <div class="col-md text-center">
        <div class="card bg-dark text-light">
          <div class="card-body text-center">
            <div class="h1 mb-3">
              <i class="bi bi-people"></i>
            </div>
            <h3 class="card-title">In Person</h3>
            <p class="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
              quisquam vero nisi saepe accusantium sint at quis, quasi quae.
              Magnam sit saepe voluptatem culpa magni.
            </p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  `,M=()=>`
    <div class="container">
      <div class="row g-4">
        <div class="col-md">
          <h2 class="text-center mb-4">Contact Info</h2>
          <ul class="list-group list-group-flush lead">
            <li class="list-group-item">
              <span class="fw-bold">Main Location:</span>
              Lorem
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Enrollment Phone:</span> (555) 555-5555
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Student Phone:</span> (333) 333-3333
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Enrollment Email:</span> mail@mail.com
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Student Email:</span>
              student@mail.com
            </li>
          </ul>
        </div>
        <div class="col-md">
          <div id="map">
            <h1 class="text-center">Here goes the map :(</h1>
          </div>
        </div>
      </div>
    </div>
  `,I=()=>`
    <div class="container">
      <p class="lead">
        Copyright &copy; 2021 Frontend Bootcamp
      </p>
      <a href="#" class="position-absolute bottom-0 end-0 p-5">
        <i class="bi bi-arrow-up-circle h1"></i>
      </a>
    </div>
  `,T=()=>`

    <div class="container">
      <h2 class="text-center text-white">
        Our Instructors
      </h2>
      <p class="lead text-center text-white mb-5">
        Our instructors all have 5+ years working as a web developer in the
        industry
      </p>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="https://randomuser.me/api/portraits/men/11.jpg" class="rounded-circle mb-3" alt="Instructor" title="Instructor"/>
              <h3 class="card-title mb-3">John Doe</h3>
              <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="https://randomuser.me/api/portraits/women/11.jpg" class="rounded-circle mb-3" alt="Instructor" title="Instructor"/>
              <h3 class="card-title mb-3">Jane Doe</h3>
              <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="https://randomuser.me/api/portraits/men/12.jpg" class="rounded-circle mb-3" alt="Instructor" title="Instructor"/>
              <h3 class="card-title mb-3">Steve Smith</h3>
              <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="https://randomuser.me/api/portraits/women/12.jpg" class="rounded-circle mb-3" alt="Instructor" title="Instructor"/>
              <h3 class="card-title mb-3">Sara Smith</h3>
              <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,A=()=>`
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <img src="../assets/img/fundamentals.svg" class="img-fluid" alt="learn The Fundamentals" title="Learn The Fundamentals"/>
        </div>
        <div class="col-md p-5">
          <h2>Learn The Fundamentals</h2>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi, nihil ipsa voluptatum rerum repellendus, dicta obcaecati, sequi quod quo asperiores a. Suscipit, nulla quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis eveniet recusandae quidem iusto architecto, minima ipsum quisquam ratione esse obcaecati hic rerum nisi? Cam!
          </p>
          <a class="btn btn-light mt-3">
            <i class="bi bi-chevron-right"></i>
            Read More
          </a>
        </div>
      </div>    
    </div>
  `,H=()=>`
    <div class="container">
      <div class="row align-items-center justify-content-between">
        
        <div class="col-md p-4">
          <h2>Learn React</h2>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi, nihil ipsa voluptatum rerum repellendus, dicta obcaecati, sequi quod quo asperiores a. Suscipit, nulla quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis eveniet recusandae quidem iusto architecto, minima ipsum quisquam ratione esse obcaecati hic rerum nisi? Cam!
          </p>
          <a class="btn btn-light mt-3">
            <i class="bi bi-chevron-right"></i>
            Read More
          </a>
        </div>
        <div class="col-md">
          <img src="../assets/img/react.svg" class="img-fluid" alt="learn React" title="Learn The Fundamentals"/>
        </div>
      </div>    
    </div>
  `,R=()=>`

  <div
      class="modal fade"
      id="enroll"
      tabindex="-1"
      aria-labelledby="enrollLabel"
      aria-hidden="true"
    >

    <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="enrollLabel">Enrollment</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="lead">Fill out this form and we will get back to you</p>
              <form>
                <div class="mb-3">
                  <label for="first-name" class="col-form-label">
                    First Name:
                  </label>
                  <input type="text" class="form-control" id="first-name" />
                </div>
                <div class="mb-3">
                  <label for="last-name" class="col-form-label">Last Name:</label>
                  <input type="text" class="form-control" id="last-name" />
                </div>
                <div class="mb-3">
                  <label for="email" class="col-form-label">Email:</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="col-form-label">Phone:</label>
                  <input type="tel" class="form-control" id="phone" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
  `,C=()=>` 
  
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
 
  
  `;const F=()=>`
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

  `,N=()=>`

    <div class="container">
      <h2 class="text-center mb-4">Frequently Asked Questions</h2>
      <div class="accordion accordion-flush" id="questions">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-one"
              aria-expanded="false"
              aria-controls="question-one"
            >
              Where exactly are you located?
            </button>
          </h2>
          <div
            id="question-one"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex error aut quisquam ratione dignissimos, qui reiciendis, repellat sapiente tempore nisi, natus ipsam ab officiis sint quaerat tenetur deleniti. Voluptate pariatur veritatis fugit excepturi eos, quibusdam voluptatem et non numquam quaerat corporis dicta magnam obcaecati officiis fugiat eveniet cum cupiditate quia?
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-two"
              aria-expanded="false"
              aria-controls="question-two"
            >
            How much does it cost to attend?
            </button>
          </h2>
          <div
            id="question-two"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex error aut quisquam ratione dignissimos, qui reiciendis, repellat sapiente tempore nisi, natus ipsam ab officiis sint quaerat tenetur deleniti. Voluptate pariatur veritatis fugit excepturi eos, quibusdam voluptatem et non numquam quaerat corporis dicta magnam obcaecati officiis fugiat eveniet cum cupiditate quia?
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-three"
              aria-expanded="false"
              aria-controls="question-three"
            >
            What do I need to Know?
            </button>
          </h2>
          <div
            id="question-three"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex error aut quisquam ratione dignissimos, qui reiciendis, repellat sapiente tempore nisi, natus ipsam ab officiis sint quaerat tenetur deleniti. Voluptate pariatur veritatis fugit excepturi eos, quibusdam voluptatem et non numquam quaerat corporis dicta magnam obcaecati officiis fugiat eveniet cum cupiditate quia?
            </div>
          </div>
        </div>
        <!-- Item 4 -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-four"
            >
              How Do I sign up?
            </button>
          </h2>
          <div
            id="question-four"
            class="accordion-collapse collapse"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
        <!-- Item 5 -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-five"
            >
              Do you help me find a job?
            </button>
          </h2>
          <div
            id="question-five"
            class="accordion-collapse collapse"
            data-bs-parent="#questions"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
      </div>
    </div>

`,D=()=>`

  <div class="container">
    <div class="d-sm-flex align-items-center justify-content-between">
      <div>
        <h1>Become a 
          <span class="text-warning">Web Developer</span>
        </h1>
        <p class="lead my-4">
            We focus on teaching our students the fundamentals of the latest and greatest technologies to prepare them for their first dev role
        </p>
        <button class="btn btn-primary btn-lg" data-bs-toggle="modal"
        data-bs-target="#enroll">
          Start The Enrollment
        </button>
      </div>
      <img src="../assets/img/showcase.svg" loading="lazy" class="img-fluid w-50 d-none d-md-block" alt="developer" title="Web Developer"/>
    </div>
  </div>
  `,O=()=>{const t=document.body,i=document.createElement("nav"),c=document.createElement("section"),o=document.createElement("section"),e=document.createElement("section"),a=document.createElement("section"),s=document.createElement("section"),n=document.createElement("section"),r=document.createElement("section"),l=document.createElement("section"),d=document.createElement("footer"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),b=C(),v=D(),g=F(),h=E(),f=A(),q=H(),x=N(),y=T(),w=M(),L=I(),k=R();i.setAttribute("class","navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top"),c.setAttribute("class","bg-dark text-light p-5 p-lg-3 pt-lg-5 text-center text-sm-start"),o.setAttribute("class","bg-primary text-light p-5"),e.setAttribute("class","p-3"),a.classList.add("p-5"),a.setAttribute("id","learn"),s.setAttribute("class","p-5 bg-dark text-light"),n.setAttribute("class","p-5"),u.setAttribute("id","questions"),u.setAttribute("class","p-3"),r.setAttribute("class","p-5 bg-primary"),m.setAttribute("class","p-3"),m.setAttribute("id","instructors"),l.classList.add("p-5"),d.setAttribute("class","p-5 bg-dark text-white text-center position-relative"),i.innerHTML=b,c.innerHTML=v,o.innerHTML=g,e.innerHTML=h,a.innerHTML=f,s.innerHTML=q,n.innerHTML=x,r.innerHTML=y,l.innerHTML=w,d.innerHTML=L,p.innerHTML=k,t.append(i),t.append(c),t.append(o),t.append(e),t.append(a),t.append(s),t.append(u),t.append(n),t.append(m),t.append(r),t.append(l),t.append(d),t.append(p)};O();
