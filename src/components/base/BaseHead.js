/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import styled from 'styled-components';

const BaseHead = ({title = 'TelePIX', children}) => {
  return (
    <NoneDiv>
      <Head>
        <title>{`TelePIX ERP : ${title.toUpperCase()}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      {children}
    </NoneDiv>
  );
};

const NoneDiv = styled.div`
  max-height: 0;
  position: fixed;
  display: none;
`;

export default BaseHead;
