import Home from '../views/home/Home'
import authenticationMiddleware from '../middlewares/authentication'

// const routes = [
//   {
//     component: Layout,
//     routes: [
//       {
//         path: '/',
//         exact: true,
//         render: Home
//       },
//       // 404 not found
//       {
//         path: '*',
//         component: Home
//       }
//     ]
//   }
// ];

const routes =  [
  {
    path: '/',
    exact: true,
    component: authenticationMiddleware(Home)
  },
  // 404 not found
  {
    path: '*',
    component: Home
  }
]

export default routes;