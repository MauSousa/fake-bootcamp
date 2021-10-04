export const showcase = () => {
  const showCaseSection = `

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
  `
  return showCaseSection
}
