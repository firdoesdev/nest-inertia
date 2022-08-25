import { Inertia } from '@inertiajs/inertia';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useForm } from '@inertiajs/inertia-react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import {FC} from 'react';

const Login: FC = () => {
    const {
        data,
        setData,
        post,
        processing,
        errors
    } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const handleSubmit = (event) => {
        event.prefentDefault()
        Inertia.post('/verified')
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                }}
            >
                <Form
                    name="login"
                    onFinish={handleSubmit}
                    style={{maxWidth: "300px"}}
                >
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your email!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" id='email' value={data.email} type="text" onChange={event => setData('email', event.target.value)}/>
                        {errors.email && <div>{errors.email}</div>}
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" id='password' value={data.password} onChange={event => setData('password', event.target.value)}/>
                        {errors.password && <div>{errors.password}</div>}
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox checked={data.remember} onChange={event => setData('remember', event.target.checked)}>Remember me</Checkbox>
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={processing} style={{width: "100%"}}>Login</Button>
                        Or <Link href={'/register'}>Register now!</Link>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default Login;