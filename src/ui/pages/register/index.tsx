import React from 'react';
import { Layout, Typography } from 'antd';

// Components
import RegisterForm from '../../components/RegisterForm';

const { Header, Content } = Layout;

const Register: React.FC = () => (
  <Layout className="register__layout">
    <Header className="register__header">
      <Typography.Text>Register</Typography.Text>
    </Header>
    <Content className="register__content">
      <RegisterForm />
    </Content>
  </Layout>
);

export default Register;
