import React from 'react';
import { Layout } from 'antd';

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
        <h1>Hallo Inertia + Ant Design + Nest JS</h1>
      </Content>
      <Footer style={{ backgroundColor: 'white' }}></Footer>
    </Layout>
  );
};

export default App;
