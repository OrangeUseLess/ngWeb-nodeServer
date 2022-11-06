const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const util = require('./src/util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
    origin: ['http://localhost:80', 'http://localhost:4200', 'http://localhost:3000'], //可设置多个跨域
    credentials: true //允许客户端携带验证信息
}))

// 登录
app.post('/login', (req, res) => {
    const { body } = req;
    if(body.userName !== 'Yao.Xiao' || body.passWord !== '123456789'){
        throw new Error('BROKEN');
    }else{
		let token = util.generateUserToken();
		const data = {...body,token};
        res.json(data);
        // throw new Error('BROKEN');
    }
})

app.listen(80, () => console.log('80 服务已启动'));