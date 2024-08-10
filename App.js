import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - Restaurant Card
 * Footer
 *  - Copy Right
 *  - Links
 *  - Address
 *  - Contact
 */

const Title = () => (
    <h1 className='head'>
        Heading element
    </h1>
);
const HeadingMultiLineComponent = () => (
    <div id='container'>
    <h1>React Functional Component</h1>
    {Title()}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingMultiLineComponent/>);