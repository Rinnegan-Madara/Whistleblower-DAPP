import React from 'react';
import { DrizzleContext } from 'drizzle-react';
import LoadingComponent from './LoadingComponent';
import ReadData from './ReadData';
import WriteData from './WriteData';

const Container = () =>(
    <DrizzleContext.Consumer>
      {drizzleContext =>{
        console.log(drizzleContext);
        const { initialized, drizzleState, drizzle } = drizzleContext;
        return(
        <LoadingComponent initialized={initialized}>
          <div>
            <div id="heading">
              <h1>Whistleblower DAPP</h1>
            </div> 
            <WriteData drizzleState={drizzleState} drizzle={drizzle}/>
            <ReadData drizzleState={drizzleState} drizzle={drizzle}/>
        </div>
        </LoadingComponent>
      );
      }}
    </DrizzleContext.Consumer>
);

export default Container;
