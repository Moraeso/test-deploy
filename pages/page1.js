import Head from 'next/head';
import Icon from '../static/icon.png';
import Link from 'next/link';
import styled from 'styled-components';

const MyP = styled.div`
  color: blue;
  font-size: 18pt;
`;

function Page1() {
  return (
    <div>
      <MyP>블루스프링의 홈페이지 입니다. 테스트 페이지 입니다.</MyP>
      <Link href="/page2">
        <a>page2로 이동</a>
      </Link>
      <img src={Icon} />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
    </div>
  );
}

export default Page1;
