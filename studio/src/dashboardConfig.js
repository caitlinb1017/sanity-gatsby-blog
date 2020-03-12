export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6a54f231fd71a9276ddfdd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-f4cmsfzg',
                  apiId: '20e10662-8e96-4fb7-b11a-0315b71ef424'
                },
                {
                  buildHookId: '5e6a54f207b4b5961e49fed1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-anzik84p',
                  apiId: '6ae3ede6-34b6-46e7-af27-29ac22ff25fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/caitlinb1017/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-anzik84p.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
