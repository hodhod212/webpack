import React, { CSSProperties } from 'react';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) =>
    <h1 style={centeredContent}>Hello from Ali and {props.compiler} and {props.framework}!</h1>

const centeredContent: CSSProperties = {
    textAlign:'center',
    width:'100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex', 
    margin: '0'
};
render(){
    return(

<App>
     <Layout>
          <Navbar/>
           <Content>
                <SectionItem/>
                <SectionItem/>
                <SectionItem/>
        </Content>
    </Layout>
</App>
    )
}