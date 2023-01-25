
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Mary'},]

const getUsers = (req, res) => {
    res.render('users', {users:users });
}

const getcreateUser = (req, res) => {
    res.render('create-users');
}

const getupdateUser = (req, res) => {
    res.render('delete-users');
}

const getdeleteUser = (req, res) => {
    res.render('update-users');
}
const createUser = (req, res) => {
    console.log (req.body);
    users.push(req.body);
    res.render('users', {users:users });
}
const updateUser = (req, res) => {
    const param = req.params.id;
    for (let i = 0; i < users.length; i++) {
      if (param==users[i].id) {
        users[i].name = req.body.name;
        break
        
      }
        
    }
    res.render('users', {users:users });
}
const deleteUser = (req, res) => {
    const param = req.params.id;
    for (let i = 0; i < users.length; i++) {
      if (param==users[i].id) {
        users.splice(i,1);
        break
        
      }
        
    }
    res.render('users', {users:users });
}


module.exports = {  
    getUsers,  
    getcreateUser,
    getupdateUser,
    getdeleteUser,
    createUser,
    updateUser,
    deleteUser

}