import dva from 'dva';
import './index.css';
import products from './models/products';
import login from './models/login';
import layout from './models/layout';
import home from './models/home';
import classify from './models/classify';

// 1. Initialize
const app = dva({
    initialState: {
        products: [
            { name: 'dva', id: 1 },
            { name: 'antd', id: 2 },
        ],
    },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// 此处是关键，用于routes下面的页面链接models下的页面
app.model(products);
app.model(login);
app.model(layout);
app.model(home);
app.model(classify);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
