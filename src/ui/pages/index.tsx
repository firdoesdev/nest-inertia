import React from 'react';
import { Layout, Space } from 'antd';
import { Link } from '@inertiajs/inertia-react';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: 'white' }}></Header>
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Space>
          <Link href="/registrasi" as="button" type="button">Register</Link>
          <Link href="/login" as="button" type="button">Login</Link>
        </Space>
      </Content>
      <Footer style={{ backgroundColor: 'white' }}></Footer>
    </Layout>
  );
};

export default App;
