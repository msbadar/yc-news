# YC News - portal

## Demo
 [https://ycnews.appspot.com](https://ycnews.appspot.com/)

## Tasks

- [x] Front Page” feed with line chart.
- [x] Next & Prev Buttons - url friendly
- [x] Upvote
- [x] Hide
- [x] Chart to represent Votes over ID
- [x] Test cases
- [x] SSR Server side rendering & SEO Friendly
- [x] PWA Optimization
- [x] Responsive
- [x] CI/CD - using google build
- [x] Deployed to app engine

## Stack
- Typescript
- React
- Redux
- SSR
- Web pack & CRA
- Google Cloud build, Google App engine

## Developement setup

1. Install depedencies from npm registry by running `yarn` or `npm install`
2. Web pack dev server can run using `yarn run dev`

## Production setup (SSR)

1. Tanspile client files using `yarn run client-build`
2. Tanspile server files using `yarn run server-build`
3. Run the server using `node server/dist`


## Deploy to app engine
To enable auto deploy to googel app engine whenever push to github, you need to setup as following.
1. Create the proeject from https://console.cloud.google.com/ and enable billing
2. Enable cloud build: https://console.cloud.google.com/cloud-build 
3. Create triggers from https://console.cloud.google.com/cloud-build/triggers 
4. Modify IAM role from https://console.cloud.google.com/iam-admin/iam for `<projectid>@cloudbuild.gserviceaccount.com`. It should be `App Engine Admin, Cloud Build Service Account` 
5. Enable app engine from `https://console.cloud.google.com/appengine`


## Testing 
Unit test cases is covered using jest and @testing-library/react. It can run using `yarn run test`