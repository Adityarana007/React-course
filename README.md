# Parcel
- dev build
- Local server
- refreshing page HMR (Hot Module Replacement)
- File Watching Algorithm - written in C++
- Caching Faster Builds
- Image optimization
- Minification - when create production build
- Bundling all files for us
- Compress your files
- Consistent hashing
- Code Splitting
- Differential Bundling - so that your app runs smoothly on older browsers as well (support older browsers)
- Diagnostic
- Error Handling
- Https
- Tree Shaking - remove unused code for you
-  different dev and prod bundles


# Food App Structure
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - Restaurant Card
 *          - img
 *          - Name of res, star rating, cuisines, delivery time
 * Footer
 *  - Copy Right
 *  - Links
 *  - Address
 *  - Contact
 */


# 2 types of routing
- Client side routing
- Server side routing


# Component Life Cycle Tree Structure

* --- MOUNTING PHASE ---
    - Constructor (dummy)
    - Render (dummy)
    - <HTML Dummy>
    - ComponentDid mount
    - <API Call>
    - <this.setState> -> state variable is updated

* --- UPDATING PHASE ---
    - render (API data)
    - <HTML (new API Data)>
    -  ComponentDidUpdate
    

# Redux Toolkit
- Install Libraries -- @reduxjs/toolkit, react-redux
- Build our store
- Connect out store to our app (make bridge)
- Create Slice (cart Slice)
- Dispatch action
- Selector (Read Data)


# Types of testing (Developer)
- Unit Testing
- Integration Testing
- End to End Testing (e2e testing)

# Setting up Testing in our app
- Install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel  
- Configure Parcel config file to disable default babel transpilation
- Jest configuration
- Install Jsdom library
- Install @babel/preset-react Library -- to make JSX work in test cases
- Include @babel/preset-react inside by babel config
- Install @testing-library/jest-dom