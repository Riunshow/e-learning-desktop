const Mock = require('mockjs');
const Random = Mock.Random;

// 登录
const loginUser = (opt) => {
    const options = JSON.parse(opt.body)
    let user = {}
    if (options.user_num == 'sysadmin') {
        let newUserObject = {
            username: 'sysadmin',
            role: '20',
            code: 0,
        }
        user = newUserObject
    } else if (options.user_num == 'bookadmin') {
        let newUserObject = {
            username: 'bookadmin',
            role: '10',
            code: 0,
        }
        user = newUserObject
    } else {
        let newUserObject = {
            code: -1,
        }
        user = newUserObject
    }
    return user;
}

Mock.mock('/user/login', 'post', loginUser);