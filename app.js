const root = ReactDOM.createRoot(document.getElementById('root'));
const wrapper = React.createElement('div',{className:'wrapper'},'',
    [React.createElement('div',{className:'parent'},'',
    React.createElement('h1',{},'I am parent'),
    React.createElement('p',{},'Barir Korta')
    )],
    [
        React.createElement('div',{className:'parent-two'},'',
        React.createElement('h1',{},'I am parent two'),
        React.createElement('p',{},'Barir Second Korta'))
    ]
    

);
root.render(wrapper)
