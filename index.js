const app = "I don't do much.";
const token = '8bf74068e7c62fe4e1db7367f53ff5b417f9d50f'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));