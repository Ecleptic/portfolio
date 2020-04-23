const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query IndexData {
      portfolioJson {
        name
        social {
          email
          github
          linkedin
        }
        title
        about {
          aboutme
          resume
        }
        jobs {
          company
          description
          title
        }
        projects {
          name
        }
      }
    }
  `)

  const portfolio = result.data.portfolioJson

  createPage({
    path: `/`,
    component: path.resolve(`./src/templates/Index.js`),
    context: {
      portfolio,
    },
  })
  createPage({
    path: `/Resume`,
    component: path.resolve(`./src/templates/Resume.js`),
    context: {
      portfolio,
    },
  })
}
