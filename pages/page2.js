import Router from 'next/router';
import { callApi } from '../src/api';

Page2.getInitialProps = async ({ query, res }) => {
  const { sayHello } = await import('../src/sayHello');
  console.log(sayHello());
  console.log(res?.NODE_ENV);
  console.log(query);
  const text = query.text || 'none';
  const data = await callApi();
  return { text, data };
};

export default function Page2({ text, data }) {
// export default function Page2() {
  return (
    <div>
      <button onClick={() => Router.push('/page1')}>page1로 이동</button>
      <p>기획팀: 블루프린트</p>
      <p>개발팀: 블루스크린</p>
      <p>{`text: ${text}`}</p>
      <p>{`data is ...`}</p>
    </div>
  )
}
