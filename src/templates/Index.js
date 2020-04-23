import React from "react"

const Index = ({ pageContext }) => {
  const portfolio = pageContext.portfolio
  console.log(portfolio)
  return (
    <div>
      <h1>{portfolio.name}</h1>
      <h2>{portfolio.title}</h2>
      <div className="categories">
        {/* <div className="about">
          <p>{portfolio.categories.about.aboutme}</p>
        </div> */}
        {/* <div className="experience">
          <ul>
            {portfolio.categories.experience.map((job,index) => (
              <li key={index}>
                <ul>
                  <li>{job.company}</li>
                  <li>{job.description}</li>
                  <li>{job.title}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="projects"></div>
      </div>
    </div>
  )
}

export default Index
