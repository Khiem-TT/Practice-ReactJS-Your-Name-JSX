import ReactDom from 'react-dom/client';

const name = 'Trần Thế Khiêm';
const myName = <h1 style={{textAlign: "center"}}>
    {name}
</h1>
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(myName);