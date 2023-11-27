
let ele = React.createElement("h1",{},"Sravan Thipparthy");
let root31 = React.createElement("div",{id:"root3"},[ele]);
let root21 = React.createElement("div",{id:"root2"},[root31]);
let root11 = React.createElement("div",{id:"root1"},[root21]);
let parent = ReactDOM.createRoot(document.getElementById('new'));
parent.render(root11);


