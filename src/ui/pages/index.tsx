import React from 'react';

type IProps = {
  name: string;
};

const App: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <h1>Inertia Apps COK! ISO COK!! {props.name}</h1>
    </div>
  );
};

export default App;
